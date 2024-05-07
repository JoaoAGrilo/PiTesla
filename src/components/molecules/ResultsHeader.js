import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UserCoins from '../atoms/UserCoins'

export default props => {

    const lesson = 'Produtos notáveis'
    const gainedCoins = props.gainedCoins

    return (            
            <View>
                <View style={style.coinsContainer}>
                    <UserCoins />
                    <Text style={style.gainedCoins}>+{gainedCoins}</Text>
                </View>
                <View style={style.textContainer}>
                    <Text style={style.mainText}>Resultados</Text>
                    <Text style={style.subText}>{lesson}</Text>
                </View>
            </View>
    )
}

const style = StyleSheet.create({

    coinsContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        margin: 20
    },

    gainedCoins: {
        marginRight: 22,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: '#F5F5F5'
    },

    textContainer: {
        display: 'flex',
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