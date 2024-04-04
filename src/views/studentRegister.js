import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native"
import StudentRegisterForm from "../components/StudentRegisterForm";
import SvgHeaderWave2 from "../../assets/svg/patterns/SvgHeaderWave2";
import MiniLogo from "../components/MiniLogo";

export default props => {
    return (
        <View style={style.App}>
            <MiniLogo />
            <SvgHeaderWave2 />
            <Text style={style.mainText}>Crie{"\n"}uma conta</Text>
            <StudentRegisterForm navigation = {props.navigation} />
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
    },


})