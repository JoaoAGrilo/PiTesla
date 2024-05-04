import React from 'react'
import { View } from 'react-native'
import LessonContent from '../molecules/LessonContent'
import HeaderDouble from '../molecules/HeaderDouble'

export default () => {
    
    const currentLesson = 'Notação científica'
    const currentSubject = 'Física'

    return (
        <View>            
            <HeaderDouble headerTitle={currentLesson} headerSubTitle={currentSubject} returnTo='StudentSubject'/>
            <View style={{padding: 20}}>
                <LessonContent/>
            </View>
        </View>
    )
}