import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import welcome from "./views/welcome";
import studentLogin from "./views/studentLogin";
import studentRegister from "./views/studentRegister";
import subjectPicker from "./views/subjectPicker";
import studentHome from "./views/studentHome";
import teacherHome from "./views/teacherHome";

export default () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Welcome"
            screenOptions={{headerShown: false}}>
                <Stack.Screen name="Welcome" component={welcome} />
                <Stack.Screen name="StudentLogin" component={studentLogin} />
                <Stack.Screen name="StudentRegister" component={studentRegister} />
                <Stack.Screen name="SubjectPicker" component={subjectPicker} />
                <Stack.Screen name="StudentHome" component={studentHome} />
                <Stack.Screen name="TeacherHome" component={teacherHome} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
