import zh_CN from 'src/locale/zh';
import en_US from 'src/locale/en';
import { LocaleKeys } from 'src/types/LocaleKeys';

type ZHKeys = LocaleKeys<typeof zh_CN>;
type ENKeys = LocaleKeys<typeof en_US>;

const CURRENT_LANGUAGE: string =
  localStorage.getItem('currentLanguage') || process.env.LANGUAGE || navigator.language || 'en';

const formatMessage = (params: { id: string }): string => {
  if (!params || !params.id) return '';

  switch (CURRENT_LANGUAGE) {
    case 'zh':
    case 'zh-CN':
      // @ts-ignore
      return zh_CN[params.id];
    case 'en':
    case 'en-US':
      // @ts-ignore
      return en_US[params.id];
    default:
      // @ts-ignore
      return zh_CN[params.id];
  }
};

export const isChina = /^zh/.test(CURRENT_LANGUAGE);

export { formatMessage, CURRENT_LANGUAGE };
