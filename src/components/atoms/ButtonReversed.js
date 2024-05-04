import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default props => {

    return (
        <TouchableOpacity style={style.button} onPress={props.onPress}>
            <Text style={style.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 6,
        height: 40,
        marginBottom: 20,
        width: '90%',
    },

    buttonText: {
        color: '#006BFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
    },
})
