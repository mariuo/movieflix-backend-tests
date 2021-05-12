import React, { useEffect, useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity,Alert} from 'react-native';
import eyesClosed from '../assets/eyes-closed.png';
import eyesOpened from '../assets/eyes-opened.png';
import arrow from '../assets/arrow.png';
import {text, theme} from '../styles';
import { getAccessTokenDecoded, isAuthenticated, login } from '../services/auth';
import { useNavigation } from '@react-navigation/core';


const Login: React.FC = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [userInfo, setUserInfo] = useState({username: "", password:""});
    const navigation = useNavigation();
    const [userFetchData, setUserFetchData] = useState({});
    

    async function handleLogin(){
        try{
            const data = await login(userInfo);
        setUserFetchData(data);
        navigation.navigate("Movies")
        }catch(e) {
            Alert.alert('User/Senha inválidos.');
            
        }
        
    }
    useEffect(()=>{
        isAuthenticated();
        const token = getAccessTokenDecoded();
    }, []);

    return(

        <View style={theme.loginContainer}>
            <Text style={text.loginTitle}> Login </Text>
            <View style={theme.form}>
                <TextInput 
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={theme.textInput} 
                    value={userInfo.username}
                    onChangeText={
                        (e)=>{
                            const newUserInfo = {...userInfo};
                            newUserInfo.username = e;
                            setUserInfo(newUserInfo);
                        }
                    }                    
                />
                <View style={theme.passwordContainer}>
                <TextInput 
                    placeholder="Senha"
                    autoCapitalize="none"
                    style={theme.textInput}
                    value={userInfo.password}
                    secureTextEntry={hidePassword}
                    onChangeText={
                        (e) => {
                            const newUserInfo = {...userInfo};
                            newUserInfo.password = e;
                            setUserInfo(newUserInfo);
                        }
                    }
                />
                <TouchableOpacity style={theme.toggle} onPress={()=> setHidePassword(!hidePassword)}> 
                    <Image style={theme.eyes} source={hidePassword ? eyesOpened : eyesClosed}/>
                </TouchableOpacity>
                </View>

            <TouchableOpacity style={theme.primaryBtn} onPress={handleLogin}>
                <Text style={text.primaryBtn}> Fazer Login</Text>
                <View style={theme.arrowContainer}>
                    <Image source={arrow} />
                </View>
            </TouchableOpacity>
            </View>

        </View>
    );
};

export default Login;