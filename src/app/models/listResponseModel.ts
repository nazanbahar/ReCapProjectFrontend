/* 1) ListResponseModel
export interface ListResponseModel<T> extends ResponseModel{
    data:T[];
}*/

import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModel{
    data:T[];
}






