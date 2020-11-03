export default definitions => {
  delete definitions.workflowNodes;

  const selectedModules = {};

  const modules = Object.keys(definitions).reduce((all, key) => {
    const mod = definitions[key];
    const item = {
      value: mod.categoryCode,
      description: mod.categoryDescription,
      label: mod.categoryName,
    };
    if (mod.modules) {
      item.children = mod.modules.reduce((options, sub) => {
        const subItem = {
          value: sub.code,
          description: sub.description,
          label: sub.name,
        };
        const optionMap = {};
        let firtFieldCode = null;
        if (
          sub.reviewModuleConfigSchema &&
          sub.reviewModuleConfigSchema.fields &&
          sub.reviewModuleConfigSchema.fields[0] &&
          sub.reviewModuleConfigSchema.fields[0].options
        ) {
          const fieldCode = sub.reviewModuleConfigSchema.fields[0].fieldCode;
          const options = sub.reviewModuleConfigSchema.fields[0].options;

          firtFieldCode = fieldCode;

          subItem.children = options.map(opt => {
            optionMap[opt.value] = opt.label;
            return {
              value: opt.value,
              label: opt.label,
              fieldCode,
            };
          });
        }
        options.push(subItem);

        if (sub.selected) {
          const moduleSelectedText = [mod.categoryName];
          moduleSelectedText.push(sub.name);
          let selectSchema = null;
          try {
            selectSchema = sub.selectSchema ? JSON.parse(sub.selectSchema) : null;
            if (selectSchema && selectSchema[firtFieldCode]) {
              moduleSelectedText.push(optionMap[selectSchema[firtFieldCode]]);
            }
          } catch (e) {}

          selectedModules[sub.code] = {
            label: moduleSelectedText.join('/'),
            config: selectSchema ? selectSchema[firtFieldCode] : null,
            fieldCode: firtFieldCode,
          };
        }

        return options;
      }, []);
    }
    all.push(item);
    return all;
  }, []);

  return {
    modules,
    selected: selectedModules,
  };
};

export const parseNodeConfig = definitions => {
  if (!definitions) {
    return {};
  }
  return Object.keys(definitions).reduce((info, key) => {
    if (key === 'workflowNodes') {
      return info;
    }
    const mod = definitions[key];
    if (mod.modules) {
      mod.modules.forEach(subMod => {
        if (subMod.nodeConfigs) {
          subMod.nodeConfigs.forEach(nodeConfig => {
            if (!info[subMod.code]) {
              info[subMod.code] = [];
            }
            info[subMod.code].push({
              visible: true,
              editable: nodeConfig.nodeId !== 'DEFAULT_QUERY_MODULE_CONFIG',
              nodeId: nodeConfig.nodeId,
            });
          });
        }
      });
    }
    return info;
  }, {});
};
