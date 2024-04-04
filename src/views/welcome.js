import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native"
import MiniLogo from "../components/MiniLogo";
import SvgWelcomeArt from "../../assets/svg/arts/SvgWelcomeArt";
import WelcomeButtons from "../components/WelcomeButtons";

export default props => {
    return (
        <View style={style.App}>
            <MiniLogo />
            <SvgWelcomeArt style={style.WelcomeArt}/>
            <View style={style.textContainer}>
                <Text style={style.mainText}>Educação</Text>
                <Text style={style.subText}>Estude de maneira mais prática{"\n"}e eficiente.</Text>
                <WelcomeButtons navigation = {props.navigation}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    App: {
        backgroundColor: "#006BFF",
        flex: 1,
        paddingTop: "4%",
        paddingLeft: "10%",
        paddingRight: "10%"
    },

    WelcomeArt: {
        alignSelf: "center",
        marginTop: 120,
    },

    mainText: {
        fontSize: 32,
        fontFamily: "Montserrat-SemiBold",
        color: "#F5F5F5",
        marginTop: 88,
    },
    
    subText: {
        fontSize: 14,
        fontFamily: "Montserrat-Medium",
        color: "#F5F5F5",
        marginTop: 10,
        marginBottom: 40,
    },

    buttons: {
        marginTop: 40,
    }
})