import React from "react";
import { View, Text } from "react-native"
import LessonList from "../../molecules/LessonListStudent";
import Header from "../../molecules/Header";
import ClassDetailsCard from "../../molecules/LessonDetailsCard";

export default props => {
   
    const currentSubject = 'Física'
    
    return (
        <View style={{flex:1, backgroundColor: '#F5F5F5'}}>
            <Header headerText={currentSubject} returnTo='HomeStudent'/>
            <ClassDetailsCard />
            <LessonList/>
        </View>
    )
}