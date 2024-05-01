import React from "react";
import { View, Text } from "react-native"
import LessonList from "../molecules/LessonList";
import SimpleHeader from "../molecules/SimpleHeader";
import ClassDetailsCard from "../molecules/ClassDetailsCard";

export default props => {
    return (
        <View style={{flex:1, backgroundColor: '#F5F5F5'}}>
            <SimpleHeader navigation={props.navigation} returnTo='StudentHome'>Física</SimpleHeader>
            <ClassDetailsCard />
            <LessonList/>
        </View>
    )
}