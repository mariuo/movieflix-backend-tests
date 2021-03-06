import React from 'react';
import {Image, View, Text} from 'react-native';
import {text, theme} from '../styles';
import homeImg from '../assets/home_draw.png';
import arrow from '../assets/arrow.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';


const Home: React.FC = () => {
    
    const navigation = useNavigation();
    return(
        <View style={theme.container}>
            <Image source={homeImg} />
            <View style={theme.content}>
                <Text style={text.bold}>Avalie filmes</Text>
                <Text style={text.regular}>Diga o que você achou do seu filme favorito</Text>
            </View>
            <TouchableOpacity style={theme.primaryBtn} onPress={()=> navigation.navigate("Login")}>
                <Text style={text.primaryBtn}> Fazer Login</Text>
                <View style={theme.arrowContainer}>
                    <Image source={arrow} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Home;