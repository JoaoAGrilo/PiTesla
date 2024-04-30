import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default (props) => {
    return (
        <TouchableOpacity style={style.button} onPress={props.onPress}><Text style={style.buttonText}>{props.children}</Text></TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: '#F5F5F5',
        height: 40,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 6
    },

    buttonText: {
        fontSize: 16,
        fontFamily: "Montserrat-Bold",
        color: '#006BFF',
    },
}
)