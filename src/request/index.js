import axios from "axios";


function  createService() {
    const instance = axios.create();
    instance.interceptors.request.use(config => {
        // 如果是get
        return config
    }, error => {
        return Promise.reject(error);
    });
    instance.interceptors.response.use(response => {
        return response.data;
    }, error => {
        return Promise.reject(error);
    });
    return instance
}


/** 创建请求方法 */
function createRequest(service) {
    return function (config) {
        const defaultConfig = {
            // timeout: 5000,
            baseURL: import.meta.env.VITE_API_DOMAIN,
            data: {},
        }
        const mergeConfig = Object.assign({}, defaultConfig, config)
        return service(mergeConfig)
    }
}
/** 用于网络请求的实例 */
const service = createService()
/** 用于网络请求的方法 */
export const request = createRequest(service)


