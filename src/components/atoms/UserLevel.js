import React from "react"
import { View, Text, StyleSheet } from 'react-native'

export default () => {

    const userLevel = 7

    return (
        <View style={style.container}>
            <Text style={style.text}>Level </Text>
            <Text style={style.text}>{userLevel}</Text>
        </View>
    )
}

const style = StyleSheet.create({

    container: {
        flexDirection: 'row'
    },

    text: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: '#F5F5F5'
    }
})