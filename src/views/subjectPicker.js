import React, { Fragment } from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native"
import SubjectPicker from "../components/SubjectPicker"
import MiniLogo from "../components/atoms/MiniLogo";
import SvgHeaderWave1 from "../../assets/svg/patterns/SvgHeaderWave1";

export default props => {
    return (
        <SafeAreaView style={style.App}>
            <MiniLogo />
            <SvgHeaderWave1 />
            <Text style={style.mainText}>Escolha suas{"\n"}matérias</Text>
            <View style={style.subjectPicker}>
                <SubjectPicker />
            </View>
        </SafeAreaView>
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

    subjectPicker: {
        marginTop: "35%"
    }
})