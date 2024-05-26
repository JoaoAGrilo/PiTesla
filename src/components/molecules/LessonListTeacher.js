import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const DATA = [
    {
        id: '001',
        title: 'Notação científica',
        timeLength: 14,
        classGrade: 9,
    },
    {
        id: '002',
        title: 'Movimento retilíneo uniforme',
        timeLength: 20,
        classGrade: 9,
    },
    {
        id: '003',
        title: 'Movimento uniformemente variado',
        timeLength: 14,
        classGrade: 9,
    },
    {
        id: '004',
        title: 'Movimento circular uniforme',
        timeLength: 14,
        classGrade: 9,
    },
];

export default props => {
    const navigation = useNavigation()
    return (
        <View style={style.listContainer}>
            <Text style={style.listTitle}>Aulas</Text>
            <View>
                <FlatList 
                data={DATA}
                renderItem={({item: lesson}) => {
                    return(
                        <TouchableOpacity style={style.buttonContainer} onPress={() => navigation.navigate('LessonStudent')}>
                            <View style={style.lessonHeaderContainer}>
                                <Text style={style.lessonTitle}>{lesson.title}</Text>
                            </View>
                            <Text style={style.lessonInfo}>Média da turma: {lesson.classGrade}</Text>
                        </TouchableOpacity>
                    )
                }}/>
            </View>
        </View>
    )
}


const style = StyleSheet.create({

    listContainer: {
        height: '36%',
        margin: 40
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
        fontSize: 18,
        color: '#808080',
        margin: 4
    },

    lessonHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5
    },

    lessonTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: '#808080'
    },

    lessonInfo: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
        color: '#808080',
    }


  })