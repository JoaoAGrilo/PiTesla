import React from "react";
import { View, Text } from "react-native"
import LessonList from "../molecules/LessonList";
import SimpleHeader from "../atoms/HeaderSimple";
import ClassDetailsCard from "../molecules/ClassDetailsCard";

export default props => {
   
    const currentSubject = 'Física'
    
    return (
        <View style={{flex:1, backgroundColor: '#F5F5F5'}}>
            <SimpleHeader navigation={props.navigation} headerText={currentSubject} returnTo='StudentHome'/>
            <ClassDetailsCard />
            <LessonList/>
        </View>
    )
}