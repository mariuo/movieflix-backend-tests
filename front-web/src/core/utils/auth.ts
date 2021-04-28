import history from './history';
import jwtDecode from 'jwt-decode';

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'movieflix';
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'movieflix123';


type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userName: string;
    userId: number;
}
export type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

type AccessToken = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

export const saveSessionData = (LoginResponse: LoginResponse) =>{
    localStorage.setItem('authData', JSON.stringify(LoginResponse));
}

export const logout = () => {
    localStorage.removeItem('authData');
    history.replace('/');
}
export const getSessionData = () => {
    const sessionData = localStorage.getItem('authData') || '{}';
    const parsedSessionData = JSON.parse(sessionData);
    return parsedSessionData as LoginResponse;
}

export const getAccessTokenDecoded = () => {
    const sessionData = getSessionData();
    const tokenDecoded = jwtDecode(sessionData.access_token);

    return tokenDecoded as AccessToken;
}
export const isTokenValid = () => {
    const { exp } = getAccessTokenDecoded();

    return Date.now() <= exp * 1000;
}
export const isAuthenticated = () => {
    const sessionData = getSessionData();
    return sessionData.access_token && isTokenValid();
    // Verifica se existe token e é válido!
}
export const isAllowedByRole = (routeRoles:Role[] = []) => {
    if (routeRoles.length === 0) {
        return true;
    }
    const { authorities } = getAccessTokenDecoded();

    return routeRoles.some(role => authorities?.includes(role));
}