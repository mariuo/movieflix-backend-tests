import React from 'react';
import { View, Text, } from 'react-native';
import { nav } from '../styles';


const NavBar: React.FC = () => {
    return (
        <View style={nav.content}>
            <Text style={nav.text}>MovieFlix </Text>
        </View>
    );
};

export default NavBar;