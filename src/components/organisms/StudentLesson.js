import React from 'react'
import { View } from 'react-native'
import DoubleHeader from '../molecules/HeaderDouble'
import LessonContent from '../molecules/LessonContent'
import HeaderDouble from '../molecules/HeaderDouble'

export default props => {
    
    const currentLesson = 'Notação científica'
    const currentSubject = 'Física'

    return (
        <View>            
            <HeaderDouble navigation={props.navigation} headerTitle={currentLesson} headerSubTitle={currentSubject} returnTo='StudentSubject'/>
            <View style={{padding: 20}}>
                <LessonContent navigation={props.navigation}/>
            </View>
        </View>
    )
}