import axios from "axios";

const instance = axios.create({
    baseURL: "https://60065ad43698a80017de165e.mockapi.io/ListsProductist"
})
instance.interceptors.request.use(config => {
    config.params = {
        ...config.params,
    };
    return config;
});
export default instance;
export function requestGetUser() {
    return axios.request({
        method: "get",
        url: "https://60065ad43698a80017de165e.mockapi.io/ListsProductist"
    });
}