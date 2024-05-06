import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UserCoins from '../atoms/UserCoins'
import ReturnButton from '../atoms/ReturnButton'
import { useNavigation } from '@react-navigation/native'

export default ({ return: shouldReturn = true, coins: shouldShowCoins = true, ...props }) => {

    return(
        <View style={style.container}>
            {shouldReturn && <ReturnButton returnTo={props.returnTo}/>}
            <View style={style.headerTextContainer}>
                <Text style={style.headerText}>{props.headerText}</Text>
                {props.headerSubText && <Text style={style.headerSubText}>{props.headerSubText}</Text>}
            </View>
            {shouldShowCoins && <UserCoins />}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 60,
        backgroundColor: '#006BFF',
        padding: 20
    },

    headerTextContainer: {
        width: '100%',
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        color: '#F5F5F5'
    },

    headerSubText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        color: '#F5F5F5'
    }
})
