export interface ResModel<T> {
  code: number;
  message: string,
  data: T;
}

export enum ResEnums {
  TIMEOUT = 20000,
  SERVERERROR = 500,
  SUCCESS = 200,
}
