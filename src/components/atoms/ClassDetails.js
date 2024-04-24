import React from "react";
import { View, Text } from 'react-native'


export default () => {
    
const subject = {
        id: '001',
        grade: 7,
        lessonsAmount: 4,
        watchedLessons: 2,
        testAmount: 3,
        doneTests: 2,
    }


    return (
        <View>
            <Text>{subject.grade}/10</Text>
            <Text>Aulas assistidas: {subject.watchedLessons}/{subject.lessonsAmount}</Text>
            <Text>Testes realizados: {subject.doneTests}/{subject.testAmount}</Text>
            <Text></Text>
        </View>
    )
}