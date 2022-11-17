export type ObjStrCustom<T> = {
  [key: string]: T;
}

export type ObjStrCommon = ObjStrCustom<string | boolean | number>;