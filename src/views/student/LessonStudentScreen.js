import React from 'react'
import { SafeAreaView } from 'react-native'
import StudentLesson from '../../components/organisms/students/LessonStudent'

export default () => {
    return (
        <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
            <StudentLesson/>
        </SafeAreaView>
    )
}