import React from "react";
import { SafeAreaView, Text } from "react-native"
import HomeTeacher from "../components/organisms/HomeTeacher";

export default props => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#006BFF'}}>
            <HomeTeacher/>
        </SafeAreaView>
    )
}