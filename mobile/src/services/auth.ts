import { api, TOKEN } from "./index";
import queryString from 'query-string';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from "jwt-decode";

interface AuthProps {
    username: string;
    password: string;
}


export async function login(userInfo: AuthProps) {
    const data = queryString.stringify({ ...userInfo, grant_type: "password" });
    
    const result = await api.post('oauth/token', data, {
        headers: {
            Authorization: TOKEN,
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
    const { access_token } = result.data;
    setAsyncKeys("@token", access_token);
    return result;
}

export async function setAsyncKeys(key: string, value: string) {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.warn(e)
    }
}

export async function isAuthenticated(){
    try{
        const token = await AsyncStorage.getItem("@token");
        return token ? true : false;
        
    } catch(e){}
}

export async function doLogout(){
    try{
        AsyncStorage.removeItem("@token");
        
    }catch(e){
        console.warn(e);
    }
}

export type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

export async function getAccessTokenDecoded() {
    try{
        const token = await AsyncStorage.getItem("@token");
        if (token){
            const tokenDecoded = jwtDecode(token);
            return tokenDecoded;
        }
    }catch(e){
        console.warn(e);
    } 
}
export async function isAllowedByRole(routeRoles: Role[] = []) {
    if (routeRoles.length === 0) {
            return true;
        }    
        const res = await getAccessTokenDecoded();
        const authorities = res.authorities;   
        return routeRoles.some(role => authorities?.includes(role));
    }
    