import React, { Fragment } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import SvgMailIcon from '../../assets/svg/SvgMailIcon'
import SvgCheckIcon from '../../assets/svg/SvgCheckIcon'
import SvgLockIcon from '../../assets/svg/SvgLockIcon'
import SvgHideIcon from '../../assets/svg/SvgHideIcon'

export default () => {
    return (
        <View style={style.container}>
            <View style={style.inputContainer}>
                <SvgMailIcon />
                <TextInput  placeholder=" Informe seu email"  style={style.textInput}/>
                <SvgCheckIcon />
            </View>
            <View style={style.inputContainer}>
                <SvgLockIcon />
                <TextInput  placeholder=" ********"  style={style.textInput}/>
                <SvgHideIcon />
            </View>
            <View style={style.buttonsContainer}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.button, style.registerButton]}>
                    <Text style={[style.buttonText, style.registerButtonText]}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
        paddingTop: "50%"
    },

    inputContainer: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        marginBottom: 40
    },

    textInput: {
        width: "84%"
    },

    buttonsContainer: {
        paddingTop: "12%"
    },

    button: {
        backgroundColor: '#006BFF',
        height: 40,
        width: 300,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 6,
    },

    buttonText: {
        fontSize: 16,
        fontFamily: "Montserrat-SemiBold",
        color: '#F5F5F5',
    },

    registerButton: {
        backgroundColor: "#F5F5F5",
        borderWidth: 1,
        borderColor: "#006BFF"

    },

    registerButtonText: {
        color: '#006BFF',
    },
})