import {GET} from "./index";

export function category(param) {
    let path = "/categories";
    return GET(path,param);
}