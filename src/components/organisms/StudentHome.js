import React from "react";
import { View, Text } from "react-native"
import StudentHomeHeader from "../molecules/StudentHomeHeader";
import SubjectGrid from "../molecules/SubjectGrid";


export default props => {
    return (
        <View style={{flex:1, backgroundColor: '#006BFF', padding: 20}}>
            <StudentHomeHeader/>
            <SubjectGrid navigation={props.navigation}/>
        </View>
    )
}