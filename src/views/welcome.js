import React from "react";
import { SafeAreaView } from "react-native"
import Welcome from "../components/organisms/Welcome";

export default props => {
    return (
        <SafeAreaView>
            <Welcome navigation={props.navigation}/>
        </SafeAreaView>
    )
}
