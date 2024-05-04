import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './views/WelcomeScreen'
import LoginScreen from './views/LoginScreen'
import HomeStudentScreen from './views/HomeStudentScreen'
import HomeTeacherScreen from './views/HomeTeacherScreen';
import SubjectStudentScreen from './views/SubjectStudentScreen'
import LessonStudentScreen from './views/LessonStudentScreen'
import ExamStudentScreen from './views/ExamStudentScreen'
import ClassTeacherScreen from '.view/ClassTeacherScreen'

export default () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='Welcome'
            screenOptions={{headerShown: false}}>
                <Stack.Screen name='Welcome' component={Welcome}/>
                <Stack.Screen name='LoginScreen' component={LoginScreen}/>
                <Stack.Screen name='HomeStudent' component={HomeStudentScreen}/>
                <Stack.Screen name='HomeTeacher' component={HomeTeacherScreen}/>
                <Stack.Screen name='SubjectStudent' component={SubjectStudentScreen}/>
                <Stack.Screen name='LessonStudent' component={LessonStudentScreen}/>
                <Stack.Screen name='ExamStudent' component={ExamStudentScreen}/>
                <Stack.Screen name='ClassTeacher' component={ClassTeacherScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
