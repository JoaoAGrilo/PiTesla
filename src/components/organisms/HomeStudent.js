import React from 'react'
import { View, StyleSheet } from 'react-native'
import StudentHomeHeader from '../molecules/StudentHomeHeader'
import SubjectGrid from '../molecules/SubjectGrid'


export default () => {
    return (
        <View style={style.container}>
            <StudentHomeHeader/>
            <SubjectGrid />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#006BFF',
        padding: 20
    }
})