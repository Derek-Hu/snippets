const fs = require('fs');
const path = require('path');
const xxhashjs = require('xxhashjs');

const generatedPath = path.resolve(process.cwd(), 'swagger/router-config.json');
const generatedRouter = path.resolve(process.cwd(), 'src/codegen/router/router-config.ts');

const H = xxhashjs.h32(0xabcd); // seed = 0xABCD
const alias = '~';

const getImportPath = function (file) {
  return path.join(alias, path.relative(path.resolve(process.cwd(), 'src'), file)).replace(/\\+/g, '/').replace(/\.js$/, '');
};
const checkValidParam = function (params) {
  if (!params.length || typeof params[0] !== 'string') {
    throw new Error(`请指定页面访问的路径: 如@Controller('/home')`);
  }
  const pageParams = params[1];
  if (pageParams && Object.prototype.toString.call(pageParams) !== '[object Object]') {
    throw new Error(`请指定页面访问的路径参数: 如@Controller('/home', {async: true, chunk: 'common'})`);
  }
};

/**
 * Layout: '/', '/user', 匹配最接近的，最长的路径
 */
const findRealLayout = function (layoutKeys, url) {

  const layouts = layoutKeys.filter(urlPath => {
    const endWithSlash = /\/$/.test(urlPath);
    if (!endWithSlash) {
      urlPath = urlPath + '/';
    }
    return url.indexOf(urlPath) === 0;
  });

  if (!layouts || !layouts.length) {
    return null;
  }
  return layouts.reduce(function (real, layout) {
    return layout.length > real.length ? layout : real;
  }, '');
};
const getNameByImport = function (url) {
  return (
    '_' +
    H.update(url)
      .digest()
      .toString(16)
  );
};
const twoBlank = `  `;
const sixBlank = `${twoBlank}${twoBlank}${twoBlank}`;

const renderItem = function (dependency, blanks) {
  return dependency.dynamic
    ? `${blanks}{
  ${blanks}name: '${dependency._.title || ''}',
  ${blanks}path: '${dependency.url}',
  ${blanks}component: lazy(() => import(/* webpackChunkName: "${dependency.chunk}" */ '${dependency.import}')),
${blanks}}`
    : `${blanks}{
  ${blanks}name: '${dependency._.title || ''}',
  ${blanks}path: '${dependency.url}',
  ${blanks}component: ${dependency.name},
${blanks}}`;
};
const renderLayout = function (url, layout) {
  return `  {
    layout: ${layout.name},
    path: '${url}',
    children: [
${layout.children.sort(sortRoute).map(item => renderItem(item, sixBlank)).join(',\n')}${layout.children.length ? ',' : ''}
    ],
  },`;
};
const getControllerMeta = function (original) {
  if (Object.prototype.toString.call(original[0]) === '[object Array]') {
    return original[0];
  }
  return [original];
}
const addImport = function (staticImports, dep) {
  const exists = staticImports.find(function (statment) { return statment.import === dep.import });
  if (!exists) {
    staticImports.push(dep);
  }
}
const sortRoute = function (a, b) {
  return b.url > a.url ? -1 : 1;
}
module.exports = function generateCode(pages) {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  fs.writeFileSync(generatedPath, JSON.stringify(pages, null, 2));

  const keys = Object.keys(pages);

  const staticImports = [];
  const urlMappings = {};
  const duplicated = [];
  const layouts = {};
  const noLayouts = [];

  function handleLayout(p, file) {
    checkValidParam(p);
    const pageParams = p[1];
    const importPath = getImportPath(file);
    const importName = getNameByImport(importPath);
    if (pageParams && pageParams.layout) {
      layouts[p[0]] = {
        name: importName,
        children: [],
      };

      addImport(staticImports, {
        import: importPath,
        name: importName,
      });
    }
  }
  keys.forEach(file => {
    const metas = getControllerMeta(pages[file].params);
    metas.forEach(function (m) {
      handleLayout(m, file);
    });
  });
  let hasDynamic = false;

  const layoutKeys = Object.keys(layouts);
  keys.forEach(file => {
    const metas = getControllerMeta(pages[file].params);

    metas.forEach(function (param) {
      const meta = {};
      const url = param[0];
      const pageParams = param[1];

      if (pageParams && pageParams.layout) {
        return;
      }

      if (!urlMappings[url]) {
        urlMappings[url] = true;
      } else {
        duplicated.push(url);
      }
      meta._ = pageParams || {};
      meta.url = url;
      meta.import = getImportPath(file);

      meta.dynamic = pageParams && pageParams.async;
      if (meta.dynamic) {
        hasDynamic = true;
        if (!pageParams.chunk) {
          pageParams.chunk = 'default';
        }
        meta.chunk = pageParams.chunk;
      } else {
        meta.name = getNameByImport(meta.import);
        addImport(staticImports, meta);
      }

      const realLayout = findRealLayout(layoutKeys, url);
      if (realLayout) {
        layouts[realLayout].children.push(meta);
      } else {
        noLayouts.push(meta);
      }
    });

  });

  const noLayoutCode = noLayouts
    .sort(sortRoute)
    .map(function (item) { return renderItem(item, twoBlank) }).join(',\n') + (noLayouts.length ? ',' : '');

  const layoutCode = layoutKeys.sort().map(function (urlPath) {
    return renderLayout(urlPath, layouts[urlPath]);
  }).join('\n');

  fs.writeFileSync(
    generatedRouter,
    `// 内容自动生成，请勿手动修改\n
${staticImports.sort(function (a, b) {
      return b.import > a.import ? -1 : 1;
    }).map(dependency => `import ${dependency.name} from '${dependency.import}';`).join('\n')}
${hasDynamic ? `import { lazy } from '~/utils/core';\n` : ''}
const rootConfig = () => [
${noLayoutCode ? noLayoutCode + '\n' : ''}${layoutCode}
];
${
    duplicated.length
      ? `throw new Error('URL Conflict! Multiple Page try Mounting the Same URL: ${JSON.stringify(duplicated)}')`
      : ''
    }
export default rootConfig;
`
  );
};
