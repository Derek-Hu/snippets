export type IParamFirst<T extends (...arg: any) => any> = NonNullable<Parameters<T>[0]>;
