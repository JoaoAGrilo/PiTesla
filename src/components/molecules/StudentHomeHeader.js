import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import MiniLogo from "../atoms/MiniLogo"
import UserLevel from "../atoms/UserLevel"
import UserCoins from "../atoms/UserCoins"

export default () => {

    const userFirstName = 'João'

    return (
        <View style={style.container}>
            <View style={style.topSection}>
                <MiniLogo />
                <View>
                    <UserLevel />
                    <UserCoins />
                </View>
            </View>
            <View style={style.botSection}>
                <Text style={style.subText}>Olá {userFirstName},</Text>
                <Text style={style.mainText}>O que vamos estudar?</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    botSection: {
        marginTop: '24%'
    },

    subText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: '#F5F5F5'
    },

    mainText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        color: '#F5F5F5'
    }
  })