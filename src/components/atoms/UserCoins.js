import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import SvgCoinIcon from "../../../assets/svg/icons/SvgCoinIcon"

export default () => {

    const userCoins = 1224

    return (
        <View style={style.container}>
            <Text style={style.text}>{userCoins} </Text>
            <SvgCoinIcon />
        </View>
    )
}

const style = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    text: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: '#F5F5F5'
    }
})