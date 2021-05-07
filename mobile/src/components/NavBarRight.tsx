import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState} from 'react';
import { View, Text, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { doLogout, isAuthenticated } from '../services/auth';
import { nav, text } from '../styles';

const NavBarRight: React.FC = () => {
    const [Authenticated, setAuthenticated] = useState(false);
    const navigation = useNavigation();

    async function logged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false)
    }

    function logout(){
        doLogout();
        navigation.navigate("Login");
    }
    useEffect(() => {
        logged();
    }, [])

    return (
        <>
            {Authenticated ? (
                <TouchableOpacity style={nav.btnLogout} onPress={()=> logout()}>
                    <Text style={text.btnLogout}> Sair</Text>
                </TouchableOpacity>
            ) : ( null

            )}
            
        </>
    );
};

export default NavBarRight;