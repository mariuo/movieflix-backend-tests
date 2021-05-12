import React, { useEffect, useState } from 'react';
import { Image, Text, View, ScrollView, ActivityIndicator, Modal, TouchableOpacity} from 'react-native';
import { CardMovie } from '../components';
import { text, theme } from '../styles';
import { getGenres, getMovies, getMoviesGenre } from '../services';
import arrow from '../assets/arrow.png'
import { isAllowedByRole } from '../services/auth';

type Genre = {
    id?: number;
    name?: string;
}
const Movies: React.FC = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [genres, setGenres] = useState([]);
    const [showGenres, setShowGenres] = useState(false);
    const [genre, setGenre] = useState<Genre>();
   

    async function fillMovies(){
        setLoading(true);
        const movieList = await getMovies();
        setMovies(movieList.data.content);
        setLoading(false);       
    }
    
    async function fillGenres() {
        setLoading(true);
        const genreList = await getGenres();
        setGenres(genreList.data);        
        setLoading(false);       
    }

    async function filter(genre : Genre){
        setLoading(true);
        const movieList = await getMoviesGenre(genre.id);
        setMovies(movieList.data.content);        
        setLoading(false);
    }

    useEffect(()=>{
        fillGenres();
        fillMovies();
        
    },[]);

    return(
            <ScrollView contentContainerStyle={theme.scrollContainer}>
             <View>
                <Modal style={theme.modalContainer} visible={showGenres} animationType="fade" transparent={true} presentationStyle={'overFullScreen'}>
                    <View style={theme.modalContent}>
                        <ScrollView>
                        <TouchableOpacity style={theme.modalItem} onPress={() => {
                                            setGenre({});
                                            fillGenres();
                                            fillMovies();
                                            setShowGenres(!showGenres);
                                        }}>
                                            <Text style={text.modalCancel}> Limpar Filtro</Text>
                                            
                                        </TouchableOpacity>                                
                            {   
                                genres.map(
                                    gen => (
                                        <TouchableOpacity style={theme.modalItem} key={gen.id} onPress={() => {
                                            setGenre(gen)
                                            filter(gen)
                                            setShowGenres(!showGenres)
                                        }}>
                                            <Text style={text.modal}> {gen.name}</Text>
                                            
                                        </TouchableOpacity>
                                    )
                                )
                            }
                        </ScrollView>
                    </View>
                    </Modal>     
            </View>
            <View style={theme.searchContainer}>
             <TouchableOpacity style={theme.searchContent} onPress={() => setShowGenres(!showGenres)}>
                    <Text style={text.search}> 
                        {genre?.name == null ? 'Filtar por genero' : genre?.name}
                    </Text>
                    <Image style={theme.searchArrow} source={arrow}/>
                </TouchableOpacity>    
                </View> 
                     
            {loading ? ( 
                <ActivityIndicator size="large" />
                 ) : (
                movies.map(movie => (
                    <CardMovie {...movie} key={movie.id} />
                )))
            }   
            </ScrollView>
        
    );
};

export default Movies;