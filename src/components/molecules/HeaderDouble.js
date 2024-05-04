import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ReturnButton from '../atoms/ReturnButton'

export default props => {
    return(
        <View style={style.container}>
            <ReturnButton returnTo={props.returnTo}/>
            <View style={style.textContainer}>
                <Text style={style.headerTitle}>{props.headerTitle}</Text>
                <Text style={style.headerSubtitle}>{props.headerSubTitle}</Text>
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

    textContainer: {
        width: '100%',
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        color: '#F5F5F5'
    },

    headerSubtitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        color: '#F5F5F5'
    }
})