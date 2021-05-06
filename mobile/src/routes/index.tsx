import React from 'react';
import {Home, Login, Movies, Details} from '../pages';
import { createStackNavigator} from '@react-navigation/stack';
import { NavBarRight, NavBarLeft } from '../components';
import { colors } from '../styles';

const Stack = createStackNavigator();

const Routes: React.FC = () =>{
   
    return (
        <Stack.Navigator screenOptions={{
            headerTitle: " ",
            headerStyle: {backgroundColor: colors.primary},
            headerTintColor: colors.black,
            
            headerLeft: () => <NavBarLeft />,
            headerRight: () => <NavBarRight />,
            
        }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Movies" component={Movies}/>
            <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    );
};

export default Routes;