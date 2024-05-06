import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from '../../molecules/Header'
import StudentList from '../../molecules/StudentList'
import ClassDetailsCard from '../../molecules/ClassDetailsCard'

export default () => {

    const className = 'Física 2A'

    return (
        <View>
            <Header headerText={className} coins={false} returnTo='HomeTeacher'/>
            <ClassDetailsCard />
            <StudentList/>
        </View>
    )
}