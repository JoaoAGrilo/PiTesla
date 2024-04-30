import React from "react";
import { View, StyleSheet } from 'react-native'
import AtomicText from "../atoms/AtomicText";
import MiniLogo from "../atoms/MiniLogo";
import UserLevel from "../atoms/UserLevel";
import UserCoins from "../atoms/UserCoins"

export default props => {

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
                <AtomicText fontFamily='Montserrat-Bold' fontSize={18} color='#F5F5F5'>
                    Olá {userFirstName},
                </AtomicText>
                <AtomicText fontFamily='Montserrat-Bold' fontSize={24} color='#F5F5F5'>
                    O que vamos estudar?
                </AtomicText>
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
    }
  })