// declare 模块
declare module 'lodash' {
  export function first<T extends unknown>(array: T[]): T;
}