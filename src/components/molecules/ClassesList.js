import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const DATA = [
    {
        id: '001',
        name: 'Física 1A',
        code: 'FIS01A',
        studentsAmount: 24,
        lessonsAmount: 6,
        grade: 8,
    },
    {
        id: '002',
        name: 'Física 1B',
        code: 'FIS01B',
        studentsAmount: 22,
        lessonsAmount: 6,
        grade: 6,
    },
    {
        id: '003',
        name: 'Física 1C',
        code: 'FIS01C',
        studentsAmount: 23,
        lessonsAmount: 6,
        grade: 7,
    },
    {
        id: '004',
        name: 'Física 2A',
        code: 'FIS02A',
        studentsAmount: 20,
        lessonsAmount: 8,
        grade: 7,
    },
    {
        id: '005',
        name: 'Física 2B',
        code: 'FIS02B',
        studentsAmount: 18,
        lessonsAmount: 8,
        grade: 8,
    },
];

export default props => {
    const navigation = useNavigation()
    return (
        <View style={style.container}>
            <Text style={style.listHeaderText}>Selecione uma turma:</Text>
            <FlatList 
            data={DATA}
            renderItem={({item: thisClass}) => {
                return (
                    <TouchableOpacity style={style.classContainer} onPress={() => navigation.navigate('LessonStudent')}>
                        <View>
                            <Text style={style.className}>{thisClass.name}</Text>
                            <Text style={style.classCode}>{thisClass.code}</Text>
                            <Text style={style.classDetail}>{thisClass.studentsAmount} alunos matriculados</Text>
                            <Text style={style.classDetail}>{thisClass.lessonsAmount} aulas cadastradas</Text>
                        </View>
                        <View style={style.gradeContainer}>
                            <Text style={style.classGrade}>{thisClass.grade}/10</Text>
                        </View>
                    </TouchableOpacity>
                )
            }}/>
        </View>
    )
}


const style = StyleSheet.create({
    
    container: {
        padding: 20
    },

    classContainer: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        margin: 6,
        padding: 16,
        borderRadius: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    className: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: '#606060'
    },

    classCode: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: '#B6B6B6'
    },

    classDetail: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: '#808080'
    },

    classGrade: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 17,
        color: '#808080'
    },

    listHeaderText: {
        fontFamily: 'Montserrt-SemiBold',
        fontSize: 16,
        color: '#808080'
    },

    gradeContainer: {
        backgroundColor: '#FFFFFF',
        borderWidth: 5,
        borderRadius: 45,
        borderColor: '#006BFF',
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    }
  })
