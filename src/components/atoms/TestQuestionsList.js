import React from "react";
import { View, FlatList, Text } from 'react-native'

const Questions = [
    {
    id: 1,
    text: "Texto da pergunta 1",
    alternatives: [
        "Alternativa 1A",
        "Alternativa 1B",
        "Alternativa 1C",
        "Alternativa 1D"
        ],
    },
            {
    id: 2,
    text: "Texto da pergunta 2",
    alternatives: [
        "Alternativa 2A",
        "Alternativa 2B",
        "Alternativa 2C",
        "Alternativa 2D"
        ],
    },
            {
    id: 3,
    text: "Texto da pergunta 3",
    alternatives: [
        "Alternativa 3A",
        "Alternativa 3B",
        "Alternativa 3C",
        "Alternativa 3D"
        ],
    },
];

let currentQuestion = 1

export default props => {
    return (
        <FlatList 
        data={Questions}
        renderItem={({item: question}) => {
            return(
                <View>
                    <Text>{question.id}</Text>
                    <Text>{question.text}</Text>
                    <Text>{question.alternatives}</Text>
                </View>
            )
        }}/>
    )
}