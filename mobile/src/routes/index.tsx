import React from 'react';
import {Home, Login, Movies, Details} from '../pages';
import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routes: React.FC = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Movies" component={Movies}/>
            <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    );
};

export default Routes;