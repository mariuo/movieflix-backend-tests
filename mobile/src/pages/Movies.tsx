import React, { useEffect, useState } from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import { CardMovie } from '../components';
import { theme } from '../styles';
import movieImage from '../assets/movie1.png';
import { getMovies } from '../services';

//  const movies =[
//     {
//         id: 1,
//         imgUrl: movieImage,
//         name: "Godzilla vs. Kong",
//         subTitle: "Um dos dois cairá.",
//         year: 2020,
//     },
//     {
//         id: 2,
//         imgUrl: movieImage,
//         name: "Godzilla vs. Kong",
//         subTitle: "Um dos dois cairá.",
//         year: 2020,
//     },{
//         id: 3,
//         imgUrl: movieImage,
//         name: "Godzilla vs. Kong",
//         subTitle: "Um dos dois cairá.",
//         year: 2020,
//     }
// ]

const Movies: React.FC = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fillMovies(){
        setLoading(true);
        const movieList = await getMovies();
        setMovies(movieList.data.content);
        setLoading(false);
       
    }

    useEffect(()=>{
        fillMovies();
    },[]);

    return(
        
            <ScrollView contentContainerStyle={theme.scrollContainer}>            
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