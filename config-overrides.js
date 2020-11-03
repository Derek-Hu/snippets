const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const git = require('git-rev-sync');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const bodyParser = require('body-parser');
const SwaggerESCode = require('swagger-escode');
const opener = require('opener');
const isProduction = process.env.NODE_ENV === 'production';

const {
  override,
  removeModuleScopePlugin,
  useEslintRc,
  addWebpackExternals,
  addBundleVisualizer,
  addTslintLoader,
  enableEslintTypescript,
  addWebpackAlias,
  addDecoratorsLegacy,
  fixBabelImports,
  addLessLoader,
} = require('customize-cra');
const entries = require('./config-entry');
const multipleEntry = require('react-app-rewire-multiple-entry')(entries);

if (!isProduction) {
  opener('https://ftc-saas-rbms-console-demo.corp.dalianyun.com/swagger-ui.html');
}

module.exports = {
  webpack: override(
    addDecoratorsLegacy(),
    addTslintLoader(),
    enableEslintTypescript(),
    fixBabelImports('import-antd', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    useEslintRc(),
    addWebpackAlias({
      '~': path.resolve(__dirname, 'src/'),
      'src': path.resolve(__dirname, 'src/'),
      root: path.resolve(__dirname, 'src/'),
    }),
    // addBundleVisualizer(),
    addWebpackExternals({
      './cptable': 'var cptable',
      d3: 'd3',
    }),
    removeModuleScopePlugin(),
    multipleEntry.addMultiEntry,
    rewireReactHotLoader,
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        // Primary
        '@primary-color': '#2acd8f',
        '@link-color': '#2acd8f',
        '@border-radius-base': '2px',

        // Input
        '@input-placeholder-color': '#a3afb7',
        '@input-hover-border-color': '#2acd8f',

        // Button
        '@button-primary-bg': '#2acd8f',
        // Button lg
        '@btn-height-lg': '48px',
        '@btn-padding-lg': '11px',
        'btn-font-size-lg': '20px',

        // Table
        '@table-header-bg': '#ffffff',

        // Font
        '@font-size-base': '14px',
      },
    }),
    config => {

      const tsJSONPath = path.resolve(__dirname, 'tsconfig.json');
      const tsJson = JSON.parse(fs.readFileSync(tsJSONPath, 'UTF8'));

      tsJson.compilerOptions.paths = {
        "~/*": [
          "src/*"
        ],
      }
      tsJson.compilerOptions.baseUrl = '.';

      fs.writeFileSync(tsJSONPath, JSON.stringify(tsJson, null, 2));

      let _env = process.env.AppEnv || 'local';

      if (!isProduction) {
        const CircularDependencyPlugin = require('circular-dependency-plugin');
        config.plugins.push(
          new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /node_modules/,
            // add errors to webpack instead of warnings
            failOnError: true,
            // set the current working directory for displaying module paths
            cwd: process.cwd(),
          })
        );
      }
      if (!config.optimization.splitChunks.cacheGroups) {
        config.optimization.splitChunks.cacheGroups = {
        };
      }

      // 增加cache-loader, thread-loader优化
      // 其中cache-loader与meta.macro冲突，导致代码不能正确生成。由于代码已经在开发环境中生成，因此生产环境开启cache-loader
      if (isProduction) {
        for (let _rule of config.module.rules) {
          if (_rule.oneOf) {
            for (let certainRule of _rule.oneOf) {
              if ((typeof certainRule.loader === 'string') && certainRule.loader.indexOf('babel-loader') !== -1) {
                certainRule.loader = ['cache-loader', 'thread-loader', {
                  loader: certainRule.loader,
                  options: certainRule.options
                }];
                delete certainRule.options;
              }
            }
            break;
          }
        }

        config.plugins.push(
          new FilterWarningsPlugin({
            exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
          })
        );
      }

      config.optimization.splitChunks.cacheGroups.vendors = {
        test: /[\\/](node_modules|components[\\/]webVOWL)[\\/]/,
        name: 'vendors',
        chunks: 'all'
      }

      config.plugins.push(
        // Or: To strip all locales except “en”, “es-us” and “ru”
        // (“en” is built into Moment and can’t be removed)
        new MomentLocalesPlugin({
          localesToKeep: ['en', 'zh-cn'],
        }),
        new webpack.DefinePlugin({
          'process.env.GIT_COMMIT': JSON.stringify(git.long()),
          'process.env.ENV_NAME': JSON.stringify(_env),
          'process.env.LANGUAGE': JSON.stringify(process.env.LANGUAGE),
        }),
      );
      return config;
    }
  ),
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.before = function (app, server, compiler) {
        app.use(bodyParser.json({ limit: '50mb' }));
        app.use(SwaggerESCode([{
          homePage: [
            'https://ftc-saas-rbms-console-dev.corp.dalianyun.com/swagger-ui.html',
            'https://ftc-saas-rbms-console-demo.corp.dalianyun.com/swagger-ui.html',
            'https://ftc-saas-rbms-console-stage.corp.dalianyun.com/swagger-ui.html',
          ],
          swaggerSavePath: 'swagger/rbms-swagger.json',
          prettyCmd: 'npm run code:prettier',
          codegen: {
            // generated Folders
            tsType: 'src/codegen/service/types',
            tsApi: 'src/codegen/service/ts',

            // Custom Request Tool
            httpBase: '../httpClient',
            transformFileName: (name) => {
              console.log('name', name);
              const FriendlyNames = {
                '产品审核操作配置：拒绝码、撤销码、文件核查选项、迁移条件配置': 'ProductService',
                '内匹功能，匹配：个人法人、关联人、企业及关联企业、地址匹配': 'HitMatchService',
                '签约条件查询': 'SignService',
                '审批订单文件核查:文件资料': 'OrderInfoService',
                '审批记录查询，审批时上传的:规则引擎审批结果、签约条件、担保人': 'ApproveCenterService',
              };

              const isHardName = FriendlyNames[name];

              if (isHardName) {
                return isHardName;
              }
              var _name = name;
              _name = _name.replace(/controller$/i, '');
              if (!(/service$/i.test(_name))) {
                _name += 'Service';
              }
              return _name;
            },
            // Response Wrapper
            responseWrapperPath: 'src/codegen/service/commonType',
            responseWrapperName: 'Response',
          },
        }]))
      }
      return config;
    };
  },
};
