import React, { Fragment } from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native"
import Welcome from "../components/organisms/Welcome";

export default props => {
    return (
        <SafeAreaView>
            <Welcome navigation={props.navigation}/>
        </SafeAreaView>
    )
}
