import React from 'react'
import { View } from 'react-native'
import DoubleHeader from '../atoms/HeaderDouble'

export default props => {

    const currentLesson = 'Notação científica'
    const currentSubject = 'Física'

    return (
        <View>
            <DoubleHeader navigation={props.navigation} headerTitle={currentLesson} headerSubTitle={currentSubject} returnTo='StudentSubject'/>
            
        </View>
    )
}