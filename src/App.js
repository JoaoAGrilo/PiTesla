import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './views/WelcomeScreen'
import LoginScreen from './views/LoginScreen'
import HomeStudentScreen from './views/student/HomeStudentScreen'
import HomeTeacherScreen from './views/teacher/HomeTeacherScreen'
import SubjectStudentScreen from './views/student/SubjectStudentScreen'
import LessonStudentScreen from './views/student/LessonStudentScreen'
import ExamStudentScreen from './views/student/ExamStudentScreen'
import ClassTeacherScreen from './views/teacher/ClassScreen'
import ClassStudentScreen from './views/teacher/ClassStudentScreen'
import ExamResultsScreen from './views/student/ExamResultsScreen'
import test from './views/test';


export default () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='ExamResults'
            screenOptions={{headerShown: false}}>
                <Stack.Screen name='Test' component={test}/>      
                <Stack.Screen name='Welcome' component={Welcome}/>
                <Stack.Screen name='LoginScreen' component={LoginScreen}/>
                <Stack.Screen name='HomeStudent' component={HomeStudentScreen}/>
                <Stack.Screen name='HomeTeacher' component={HomeTeacherScreen}/>
                <Stack.Screen name='SubjectStudent' component={SubjectStudentScreen}/>
                <Stack.Screen name='LessonStudent' component={LessonStudentScreen}/>
                <Stack.Screen name='ExamStudent' component={ExamStudentScreen}/>
                <Stack.Screen name='ClassTeacher' component={ClassTeacherScreen}/>
                <Stack.Screen name='ClassStudent' component={ClassStudentScreen}/>
                <Stack.Screen name='ExamResults' component={ExamResultsScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}
