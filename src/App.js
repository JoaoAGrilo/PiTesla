import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import test from "./views/test";
import Welcome from "./views/Welcome";
import StudentHomeScreen from "./views/StudentHomeScreen";
import UserLoginScreen from "./views/UserLoginScreen";

export default () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Welcome"
            screenOptions={{headerShown: false}}>
                <Stack.Screen name="Test" component={test} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="UserLogin" component={UserLoginScreen} />
                <Stack.Screen name="StudentHome" component={StudentHomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
