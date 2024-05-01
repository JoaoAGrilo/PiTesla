import React from 'react'
import { View, StyleSheet } from 'react-native'
import AtomicText from '../atoms/AtomicText'
import UserCoins from '../atoms/UserCoins'
import ReturnButton from '../atoms/ReturnButton'

export default props => {
    return(
        <View style={style.container}>
            <ReturnButton navigation={props.navigation} returnTo={props.returnTo}/>
            <View style={{width: '100%', position: 'absolute', alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
                <AtomicText fontFamily='Montserrat-Bold' fontSize={24} color='#F5F5F5'>{props.children}</AtomicText>
            </View>
            <UserCoins />
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