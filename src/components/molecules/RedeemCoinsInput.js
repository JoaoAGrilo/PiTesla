import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import SvgBigCoinIcon from '../../../assets/svg/icons/SvgBigCoinIcon'

export default () => {

    const availableCoins = 1224

    return (
        <View style={style.container}>
            <Text style={style.mainText}>Quantas moedas{'\n'}você deseja resgatar?</Text>
            <Text style={style.subText}>Moedas disponíveis: {availableCoins}</Text>
            <View style={style.inputContainer}>
                <SvgBigCoinIcon style={style.icon}/>
                <TextInput style={style.coinsInput} placeholderTextColor='#F5F5F5' keyboardType='numeric' placeholder='0'/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({   
    container: {
        marginTop: 40
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#E1E1E1',
        borderBottomWidth: 2
    },

    mainText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        color: '#F5F5F5'
    },

    subText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        color: '#F5F5F5'
    },

    coinsInput: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        color: '#F5F5F5',
        flex: 1
    },

    icon: {
        marginRight: 10,
    }
})
