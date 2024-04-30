import React, { Fragment } from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native"
import WelcomeHeader from "../molecules/WelcomeHeader";
import WelcomeButtons from "../molecules/WelcomeButtons";

export default props => {
    return (
        <SafeAreaView style={style.container}>
            <WelcomeHeader />
            <WelcomeButtons style={style.buttonsContainer} navigation={props.navigation}/>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#006BFF',
        padding: 20
    },
})
