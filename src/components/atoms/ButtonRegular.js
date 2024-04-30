import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default (props) => {
    return (
        <TouchableOpacity style={style.button} onPress={props.onPress}><Text style={style.buttonText}>{props.children}</Text></TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: '#006BFF',
        height: 40,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#F5F5F5'
    },

    buttonText: {
        fontSize: 16,
        fontFamily: "Montserrat-SemiBold",
        color: '#F5F5F5',
    },
}
)