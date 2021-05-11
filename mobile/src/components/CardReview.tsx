import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { theme } from '../styles';
import starImg from '../assets/star.png';

interface ReviewProps {
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
//
const CardReview: React.FC<ReviewProps> = ({id, text, movieId, user}) => {
    

    return (
            <View>
                <View style={theme.reviewContet}>
                    <Image source={starImg} style={theme.starImg} />
                    <Text style={theme.textReviewName}>{user.name}</Text>
                </View>
                <View style={theme.reviewTextContent}>
                    <Text style={theme.textMovieSinopse}> {text} </Text>
                </View>
            </View>
        
    );
};

export default CardReview;