import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import test from './views/test'
import Welcome from './views/WelcomeScreen'
import LoginScreen from './views/LoginScreen'

// import HomeStudentScreen from './views/student/HomeStudentScreen'
// import SubjectStudentScreen from './views/student/SubjectStudentScreen'
// import LessonStudentScreen from './views/student/LessonStudentScreen'
// import ExamStudentScreen from './views/student/ExamStudentScreen'
// import ExamResultsScreen from './views/student/ExamResultsScreen'
// import RedeemCoinsScreen from './views/student/RedeemCoinsScreen'

// import HomeTeacherScreen from './views/teacher/HomeTeacherScreen'
// import ClassTeacherScreen from './views/teacher/ClassScreen'
// import ClassStudentScreen from './views/teacher/ClassStudentScreen'


export default () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='Welcome'
            screenOptions={{headerShown: false}}>

                {/* General */}
                {/* <Stack.Screen name='Test' component={test}/>       */}
                <Stack.Screen name='Welcome' component={Welcome}/>
                {/* <Stack.Screen name='LoginScreen' component={LoginScreen}/> */}

                {/* Student */}
                {/* <Stack.Screen name='HomeStudent' component={HomeStudentScreen}/>
                <Stack.Screen name='SubjectStudent' component={SubjectStudentScreen}/>
                <Stack.Screen name='LessonStudent' component={LessonStudentScreen}/>
                <Stack.Screen name='ExamStudent' component={ExamStudentScreen}/>
                <Stack.Screen name='ExamResults' component={ExamResultsScreen}/>
                <Stack.Screen name='RedeemCoins' component={RedeemCoinsScreen}/> */}

                {/* Teacher */}
                {/* <Stack.Screen name='HomeTeacher' component={HomeTeacherScreen}/>
                <Stack.Screen name='ClassTeacher' component={ClassTeacherScreen}/>
                <Stack.Screen name='ClassStudent' component={ClassStudentScreen}/> */}

            </Stack.Navigator>
        </NavigationContainer>
    )
}
