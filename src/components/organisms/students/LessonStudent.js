import React from 'react'
import { View } from 'react-native'
import LessonContent from '../../molecules/LessonContent'
import Header from '../../molecules/Header'

export default () => {
    
    const currentLesson = 'Notação científica'
    const currentSubject = 'Física'

    return (
        <View>            
            <Header headerText={currentLesson} headerSubText={currentSubject} returnTo='SubjectStudent'/>
            <View style={{padding: 20}}>
                <LessonContent/>
            </View>
        </View>
    )
}