import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from '../../molecules/Header'
import LessonListStudent from '../../molecules/LessonListStudent'
import LessonDetailsCard from '../../molecules/LessonDetailsCard'

export default () => {

    const student = {
        name: 'Jhonatan Frossard',

    }

    const className = 'Física 2A'

    return (
        <View>
            <Header headerText={student.name} headerSubText={className} coins={false} returnTo='ClassTeacher'/>
            <LessonDetailsCard/>
            <LessonListStudent style={style.listContainer}/>
        </View>
    )
}

const style = StyleSheet.create({
    listContainer: {
        padding: 20
    }
})