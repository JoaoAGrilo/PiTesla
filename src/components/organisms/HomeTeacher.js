import React from 'react'
import { View, StyleSheet } from 'react-native'
import ClassesList from '../molecules/ClassesList'
import HeaderSimple from '../molecules/HeaderSimple'


export default () => {
    return (
        <View style={style.container}>
            <HeaderSimple headerText='Turmas'/>
            <View>
                
            </View>
            <ClassesList/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    }
})