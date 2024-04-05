import React, { Fragment } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import SvgMailIcon from '../../assets/svg/icons/SvgMailIcon'
import SvgCheckIcon from '../../assets/svg/icons/SvgCheckIcon'
import SvgLockIcon from '../../assets/svg/icons/SvgLockIcon'
import SvgHideIcon from '../../assets/svg/icons/SvgHideIcon'

export default props => {
    return (
        <View style={style.container}>
            <View style={style.inputContainer}>
                <SvgMailIcon />
                <TextInput  placeholder=" Email"  style={style.textInput}/>
                <SvgCheckIcon />
            </View>
            <View style={style.inputContainer}>
                <SvgLockIcon />
                <TextInput  placeholder=" Senha"  style={style.textInput}/>
                <SvgHideIcon />
            </View>
            <View style={style.buttonsContainer}>
                <TouchableOpacity style={style.button} onPress={() => props.navigation.navigate("StudentHome")}>
                    <Text style={style.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.button, style.registerButton]}  onPress={() => props.navigation.navigate("StudentRegister")} >
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
        marginTop: "50%"
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
        borderColor: "#006BFF",
        alignItems: "center"

    },

    registerButtonText: {
        color: '#006BFF',
    },
})