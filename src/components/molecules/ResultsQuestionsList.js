import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import SvgGreenCheckIcon from '../../../assets/svg/icons/SvgGreenCheckIcon'
import SvgRedMarkIcon from '../../../assets/svg/icons/SvgRedMarkIcon'

const questions = [
    {
        id: '1',
        correct: true
    },
    {
        id: '2',
        correct: true
    },
    {
        id: '3',
        correct: false
    },
    {
        id: '4',
        correct: true
    },
    {
        id: '5',
        correct: false
    },
    {
        id: '6',
        correct: false
    }
];

export default () => {
    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            {item.correct ? <SvgGreenCheckIcon /> : <SvgRedMarkIcon />}
            <Text style={style.itemText}>Questão {item.id}</Text>
        </View>
    );

    return (
        <FlatList
            data={questions}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

const style = StyleSheet.create({
    itemText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: '#F5F5F5',
        marginLeft: 10
    }
})
