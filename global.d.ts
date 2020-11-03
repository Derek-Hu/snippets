import { Hooks } from 'dva';

declare module '*.module.less' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module 'meta.macro' {
    const register: (url: string) => void
    export default register;
}

declare module 'dva-loading' {
    const register: () => Hooks
    export default register;
} 
