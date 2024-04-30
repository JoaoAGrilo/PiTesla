import React from "react";
import { View, Text } from "react-native"
import StudentHomeHeader from "../molecules/StudentHomeHeader";

export default props => {
    return (
        <View style={{flex:1, backgroundColor: '#006BFF', padding: 20}}>
            <StudentHomeHeader/>
        </View>
    )
}