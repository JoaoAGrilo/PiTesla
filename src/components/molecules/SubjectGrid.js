import React from 'react'
import { View, StyleSheet } from 'react-native'
import SubjectCard from '../atoms/SubjectCard'

export default () => {
    return (
        <View style={style.container}>
            <View style={style.gridLine}>
                <SubjectCard cardType='Physics'/>
                <SubjectCard cardType='Math'/>
            </View>
            <View style={style.gridLine}>
                <SubjectCard cardType='Computer'/>
                <SubjectCard cardType='Chemistry'/>
            </View>
        </View>


    )
}

const style = StyleSheet.create({
    container: {
        marginTop: '36%',
        padding: 50
    },

    gridLine: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
})