import React from 'react'
import { View, StyleSheet } from 'react-native'
import AtomicText from './AtomicText'
import UserCoins from './UserCoins'
import ReturnButton from './ReturnButton'

export default props => {
    return(
        <View style={style.container}>
            <ReturnButton navigation={props.navigation} returnTo={props.returnTo}/>
            <View style={{width: '100%', position: 'absolute', alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
                <AtomicText fontFamily='Montserrat-Bold' fontSize={20} color='#F5F5F5'>{props.headerTitle}</AtomicText>
                <AtomicText fontFamily='Montserrat-Bold' fontSize={16} color='#F5F5F5'>{props.headerSubTitle}</AtomicText>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#006BFF',
        padding: 20
    },


})