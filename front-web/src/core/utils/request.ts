import axios, {AxiosRequestConfig, Method} from 'axios';
import { CLIENT_ID, CLIENT_SECRET, getSessionData, logout } from './auth';
import qs from 'qs';


type RequestParams = {
    method?: Method;
    url?: string;
    data?: object | string;
    params?: object;
    headers?: object;
}

type LoginData = {
    username: string;
    password: string;
}
const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'https://localhost:8080';

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
      if (error.response.status === 401){
          logout();
      }
    return Promise.reject(error);
});

export const makeRequest = ({method = 'GET', url, data, params, headers} : RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
        params,
        headers
    });
};
export const makePrivateRequest = (params : AxiosRequestConfig) => {
    const sessionData = getSessionData();

    const headers = {
        'Authorization': `Bearer ${sessionData.access_token}`
    }
    return makeRequest({ ...params, headers})
}
export const makeLogin = (LoginData: LoginData) => {
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

    const headers = {
        Authorization:`Basic ${window.btoa(token)}`,
        'Content-Type':'application/x-www-form-urlencoded'
    }
    const payload = qs.stringify({ ...LoginData, grant_type: 'password'})
       
    return makeRequest({url: '/oauth/token', data: payload, method: 'POST', headers})
}