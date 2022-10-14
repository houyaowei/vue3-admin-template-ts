import request from "../utils/request";
import type { resModal } from "../types/biz/app"
import type { UserInfo } from "../types/biz/user";
import type { AxiosPromise } from "axios";

export function getUserInfo(user: UserInfo) : AxiosPromise<resModal>{
  return request({
    url: "account/query/getUserInfoOfZd",
    method: "post",
    data: user,
  })
}
