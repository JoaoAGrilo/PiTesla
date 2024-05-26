import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const DATA = [
    {
        id: '001',
        name: 'Guilherme Savasa Bernal',
        watchedLessons: 13,
        grade: 9,
    },
    {
        id: '002',
        name: 'Julio Cesar Bonow',
        watchedLessons: 12,
        grade: 9,
    },
    {
        id: '003',
        name: 'Rafael Henrique Ramos',
        watchedLessons: 14,
        grade: 9,
    },
    {
        id: '004',
        name: 'Jhonatan Frossard',
        watchedLessons: 12,
        grade: 9,
    },
    
    {
        id: '005',
        name: 'Jhonatan Frossard',
        watchedLessons: 12,
        grade: 9,
    },
    
    {
        id: '006',
        name: 'Jhonatan Frossard',
        watchedLessons: 12,
        grade: 9,
    },
    
    {
        id: '007',
        name: 'Jhonatan Frossard',
        watchedLessons: 12,
        grade: 9,
    },
];

const totalLessons = 16

export default props => {
    const navigation = useNavigation()
    return (
        <View style={style.listContainer}>
            <Text style={style.listTitle}>Alunos</Text>
            <View>
                <FlatList 
                data={DATA}
                renderItem={({item: student}) => {
                    return(
                        <TouchableOpacity style={style.buttonContainer} onPress={() => navigation.navigate('ClassStudent')}>
                            <Text style={style.studentName}>{student.name}</Text>
                            <Text style={style.lessonInfo}>Aulas assistidas: {student.watchedLessons}/{totalLessons}</Text>
                            <Text style={style.lessonInfo}>Média: {student.grade}</Text>
                        </TouchableOpacity>
                    )
                }}/>
            </View>
        </View>
    )
}


const style = StyleSheet.create({

    listContainer: {
        height: '70%',
        margin: 20
    },
    
    buttonContainer: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        margin: 5,
        padding: 12,
        borderRadius: 20,
    },

    listTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        color: '#808080',
        margin: 4
    },

    lessonHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5
    },

    studentName: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: '#808080'
    },

    lessonInfo: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
        color: '#808080',
        marginBottom: 4
    }


  })