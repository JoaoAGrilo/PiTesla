import React from "react";
import { View, StyleSheet } from 'react-native'
import AtomicText from "../atoms/AtomicText";
import MiniLogo from "../atoms/MiniLogo";

export default props => {

    const userFirstName = 'João'

    return (
        <View style={style.container}>
            <MiniLogo />
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
    
  })