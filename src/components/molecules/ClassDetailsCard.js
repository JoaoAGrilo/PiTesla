import React from "react";
import { View, Text } from 'react-native'
import AtomicText from "../atoms/AtomicText";


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
            <AtomicText fontFamily='Montserrat-SemiBold' fontSize={24} color='blue'>
                {subject.grade}/10
            </AtomicText>
            <AtomicText fontFamily='Montserrat-SemiBold' fontSize={16} color='#808080'>
                Aulas assistidas: {subject.watchedLessons}/{subject.lessonsAmount}
            </AtomicText>
            <AtomicText fontFamily='Montserrat-SemiBold' fontSize={16} color='#808080'>
                <Text>Testes realizados: {subject.doneTests}/{subject.testAmount}</Text>
            </AtomicText>
        </View>
    )
}