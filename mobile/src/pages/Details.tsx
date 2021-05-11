import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Image, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CardReview } from '../components';
import { getMovie } from '../services';
import { text, theme } from '../styles';

interface Movie {
    id: number,
    title: string,
    subTitle: string,
    year: number,
    imgUrl: string,
    synopsis: string,
    genreId: number,
    reviews: Review[],
}
interface Review {
    id: number,
    text: string,
    movieId: number,
    user: User,
}
interface User {
    id: number,
    name: string,
    email: string,
    roles: Role[],
}

interface Role {
    id: Number,
    authority: string[],
}
const Details = ({ route: { params: { id } } }) => {

    const navigation = useNavigation();

    const [movie, setMovie] = useState({
        id: null,
        title: null,
        subTitle: null,
        year: null,
        imgUrl: null,
        synopsis: null,
        genreId: null,
        reviews: [],
    });

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    async function loadMovieData() {
        setLoading(true);
        const res = await getMovie(id);
        setMovie(res.data);
        setReviews(res.data.reviews);
        setLoading(false);
    }

    useEffect(() => {
        loadMovieData();
    }, []);

    return (
        <ScrollView contentContainerStyle={theme.scrollContainer}>
            <View style={theme.cardDetails}>
                <Text style={text.movieTitle}> {movie.title}</Text>
                <Image source={{ uri: movie.imgUrl }} style={theme.cardImg} />
                <View>
                    <Text style={text.movieYear}>{movie.year}</Text>
                    <Text style={text.movieSubtitle}>{movie.subTitle}</Text>
                    <Text style={text.movieSin}>Sinopse</Text>
                </View>
                <ScrollView style={theme.scrollTextContainer}>
                    <Text style={text.movieSinopse}>{movie.synopsis}</Text>
                </ScrollView>

            </View>

            {reviews.length !== 0 ? (
                <View style={theme.reviewContainer}>
                    <Text style={text.reviewTitle}>
                        Avaliações
                    </Text>
                    { reviews?.map(rev => (
                        <CardReview key={rev.id} {...rev}/>

                    ))}
                </View>
            ) : (null)}

        </ScrollView>
    );
};

export default Details;