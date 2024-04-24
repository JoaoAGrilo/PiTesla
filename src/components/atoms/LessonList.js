import React from "react";
import { View, FlatList, Text } from 'react-native'

const DATA = [
    {
        id: '001',
        title: 'Movimento retilíneo uniforme',
        timeLength: 14,
        isWatched: true,
        testIsDone: true,
        testGrade: 9,
    },
    {
      id: '002',
      title: 'Movimento retilíneo uniforme',
      timeLength: 22,
      isWatched: true,
      testIsDone: true,
      testGrade: 7,
    },
    {
      id: '003',
      title: 'Movimento uniformemente variado',
      timeLength: 31,
      isWatched: true,
      testIsDone: false,
      testGrade: null,
    },
    {
      id: '004',
      title: 'Movimento circular uniforme',
      timeLength: 28,
      isWatched: false,
      testIsDone: false,
      testGrade: null,
    },
];

export default props => {
    return (
        <FlatList 
        data={DATA}
        renderItem={({item: lesson}) => {
            return(
                <View>
                    <Text>{lesson.title}</Text>
                    <Text>{lesson.timeLength} min</Text>
                    <Text>Avaliação {lesson.testGrade}</Text>
                </View>
            )
        }}/>
    )
}