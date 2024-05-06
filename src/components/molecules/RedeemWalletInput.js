import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import SvgWalletIcon from '../../../assets/svg/icons/SvgWalletIcon'

export default () => {
    return (
        <View style={style.container}>
            <Text style={style.mainText}>Informe a sua carteira digital</Text>
            <View style={style.inputContainer}>
                <SvgWalletIcon style={style.icon}/>
                <TextInput style={style.walletInput}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        marginTop: 40
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#E1E1E1',
        borderBottomWidth: 2,
    },

    mainText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: '#F5F5F5'
    },

    walletInput: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: '#F5F5F5',
        flex: 1,
    },

    icon: {
        marginRight: 10,
    }
})
