import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


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
        <View style={style.container}>

            <View style={style.gradeContainer}>
                <Text style={style.grade}>{subject.grade}/10</Text>
            </View>
            <View>
                <Text style={style.detailsText}>Aulas assistidas: {subject.watchedLessons}/{subject.lessonsAmount}</Text>
                <Text style={style.detailsText}>Testes realizados: {subject.doneTests}/{subject.testAmount}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create ({
    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 8,
    },

    gradeContainer: {
        backgroundColor: '#FFFFFF',
        borderWidth: 5,
        borderRadius: 45,
        borderColor: '#006BFF',
        width:90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 24
    },

    grade: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 25,
        color: '#808080'
    },

    detailsText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: '#808080'
    }
})
