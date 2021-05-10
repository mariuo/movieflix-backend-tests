import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { text, theme } from '../styles';


interface MovieProps {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: ImageSourcePropType;
}


const CardMovie: React.FC<MovieProps> = ({id, imgUrl, title, subTitle, year}) => {
    const navigation = useNavigation();    

    return(
        <TouchableOpacity style={theme.card} onPress={ () => navigation.navigate("Details", { id })}>
            <Image source={{uri : imgUrl}} style={theme.cardImg}/>
            <View style={theme.movieCardInfo}>
            <Text style={text.cardTitle}>{title}</Text>
            <Text style={text.cardYear}>{year}</Text>
            <Text style={text.cardSubTitle}>{subTitle}</Text>
            </View>
            <View style={theme.cardBtnDetails}>
                <Text style={text.cardDetails}> Ver Detalhes</Text>
            </View>

        </TouchableOpacity>
    );
};

export default CardMovie;