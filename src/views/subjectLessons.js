import React, { Fragment } from "react";
import { View } from 'react-native'
import LessonList from "../components/atoms/LessonList";
import ClassDetails from "../components/atoms/ClassDetails";

export default () => {
    return (
        <View>
            <ClassDetails />
            <LessonList />
        </View>
    )
}