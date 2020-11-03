type EnvEnum = 'ftcDev' | 'ftcDemo' | 'ftcStage' | 'ftc' | 'local';

const _env: EnvEnum = (function() {
  if (/^https?:\/\/ftc-saas-rbms-console-dev.corp.dalianyun.com/.test(window.location.href)) {
    return 'ftcDev';
  }

  if (/^https?:\/\/ftc-saas-rbms-console-demo.corp.dalianyun.com/.test(window.location.href)) {
    return 'ftcDemo';
  }

  if (/^https?:\/\/ftc-saas-rbms-console-stage.corp.dalianyun.com/.test(window.location.href)) {
    return 'ftcStage';
  }

  if (/^https?:\/\/rbms.corp.dalianyun.com/.test(window.location.href)) {
    return 'ftc';
  }
  return 'local';
})();

export const env = _env;

export const isProduction: boolean = _env === 'ftc';
export const isDemo: boolean = _env === 'ftcDemo';
export const isStage: boolean = _env === 'ftcStage';
