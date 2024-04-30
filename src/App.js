import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import test from "./views/test";
import welcome from "./views/Welcome";
import studentLogin from "./views/studentLogin";
import studentRegister from "./views/studentRegister";
import subjectPicker from "./views/subjectPicker";
import studentHome from "./views/StudentHomeScreen";
import teacherHome from "./views/teacherHome";
import StudentHomeScreen from "./views/StudentHomeScreen";

export default () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Welcome"
            screenOptions={{headerShown: false}}>
                <Stack.Screen name="Test" component={test} />
                <Stack.Screen name="Welcome" component={welcome} />
                <Stack.Screen name="StudentLogin" component={studentLogin} />
                <Stack.Screen name="StudentRegister" component={studentRegister} />
                <Stack.Screen name="SubjectPicker" component={subjectPicker} />
                <Stack.Screen name="StudentHome" component={StudentHomeScreen} />
                <Stack.Screen name="TeacherHome" component={teacherHome} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
