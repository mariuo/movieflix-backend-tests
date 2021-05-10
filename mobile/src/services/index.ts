import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
    baseURL: "https://mario-movieflix.herokuapp.com",
});

export const TOKEN = 'Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==';


export async function userToken(){
    const token = await AsyncStorage.getItem("@token");
    return token;
}


export async function getMoviesGenre(id: number) {
    const authToken = await userToken();
    
    const res = api.get(`/movies?&direction=ASC&orderBy=title&genreId=${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    
    return res;

}

export async function getMovies() {
    const authToken = await userToken();
    
    const res = api.get(`/movies?&direction=ASC&orderBy=title`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    
    return res;

}

export async function getMovie(id: number) {
    const authToken = await userToken();
    
    const res = api.get(`/movies/${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    
    return res;

}

export async function getGenres() {
    const authToken = await userToken();
    
    const res = api.get('/genres', {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    
    return res;

}