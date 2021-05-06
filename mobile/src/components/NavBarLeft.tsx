import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { nav } from '../styles';
import backImage from '../assets/back.png';

const NavBarLeft: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();


    return (
        <View style={nav.content}>
            {route.name === "Login" ? (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={nav.backImg} source={backImage} />
                </TouchableOpacity>

            ) : null}
            {route.name === "Details" ? (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={nav.backImg} source={backImage} />
                </TouchableOpacity>

            ) : null}
            <Text style={nav.leftText}>MovieFlix</Text>

        </View>





    );

}
export default NavBarLeft;