import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native"
import MiniLogo from "./components/MiniLogo";
import StudentLoginButtons from "./components/StudentLoginForm";
import SvgHeaderWave1 from "../assets/svg/SvgHeaderWave1";

export default () => {
    return (
        <View style={style.App}>
            <MiniLogo />
            <SvgHeaderWave1 />
            <Text style={style.mainText}>Bem-vindo{"\n"}de volta!</Text>
            <StudentLoginButtons style={style.buttons}/>
        </View>
    )
}

const style = StyleSheet.create({
    App: {
        backgroundColor: "#F5F5F5",
        flexGrow: 1,
        paddingTop: "4%",
    },

    mainText: {
        fontSize: 32,
        fontFamily: "Montserrat-Bold",
        color: "#F5F5F5",
        marginTop: 88,
        marginLeft: "10%",
    },

    buttons: {
        alignSelf: "center",
        width: "80%",
    }
})