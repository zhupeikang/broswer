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

export const blockList=(params)=>{
    return request({
        method:'GET',
        url:'explorer/v1/block_list',
        params
    })
}
export const transactionList=(params)=>{
    return request({
        method:'GET',
        url:'explorer/v1/tx_list',
        params
    })
}
export const transactionDetail=(params)=>{
    return request({
        method:'GET',
        url:'explorer/v1/hash',
        params
    })
}
export const nftList=(params)=>{
    return request({
        method:'GET',
        url:'explorer/v1/nft_list',
        params
    })
}
export const asset=(params)=>{
    return request({
        method:'GET',
        url:'explorer/v1/asset',
        params
    })
}
export const account=(params)=>{
    return request({
        method:'GET',
        url:'explorer/v1/account',
        params
    })
}
export const search=(params)=>{
    return request({
        method:'GET',
        url:'explorer/v1/type_of',
        params
    })
}
export const indexData=(params)=>{
    return request({
        method:'GET',
        url:'explorer/v1/index',
        params
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
