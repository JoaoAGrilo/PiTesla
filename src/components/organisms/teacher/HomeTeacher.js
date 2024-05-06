import React from 'react'
import { View, StyleSheet } from 'react-native'
import ClassesList from '../../molecules/ClassesList'
import Header from '../../molecules/Header'


export default () => {
    return (
        <View style={style.container}>
            <Header headerText='Turmas' return={false} coins={false}/>
            <ClassesList/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
})