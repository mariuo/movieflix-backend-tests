import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { theme } from '../styles';
import starImg from '../assets/star.png';

interface ReviewProps {
    text: string,
    user: User,
}
interface User {
    name: string,
}
//
const CardReview: React.FC<ReviewProps> = ({text, user}) => {
    

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