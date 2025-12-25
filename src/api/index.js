import {request} from "@/request/index.js";
import {router} from "@/router/index.js";

export const gameList=()=>{
    return request({
        method:'GET',
        url:'/api/index/index'
    })
}
export const footer=()=>{
    return request({
        method:'GET',
        url:'api/index/config'
    })
}

export const go=({click_params, click_event})=>{
    if (!click_params) return
    const {url} = click_params
    switch (click_event) {
        case 'link':
            window.open(url)
            break;
        case '_self':
        case 'push':
            router.push(url)
            break;
        default:
            break;
    }
}
