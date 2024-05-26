import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default () => {
    return (
        <View style={style.container}>
            <Text style={style.mainText}>Resgate</Text>
            <Text style={style.subText}>Suas moedas</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    mainText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: '#F5F5F5'
    },

    subText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: '#F5F5F5'
    }
})