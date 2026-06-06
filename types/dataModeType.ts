import { keyValue } from "./reqDataType";

export type dataModeType= "params" | "headers" | "body";

export type reqMethodType= "get" |"post" |"put" |"patch" |"delete";

export type historyCardType = {
    method: reqMethodType
    url: string,
    body:keyValue[],
    headers:keyValue[],
    params:keyValue[]
}