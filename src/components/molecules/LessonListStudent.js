import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import SvgCircleCheckIcon from '../../../assets/svg/icons/svgCircleCheckIcon'
import SvgPendingExamIcon from '../../../assets/svg/icons/SvgPendingExamIcon'

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
    const navigation = useNavigation()
    return (
        <View style={style.container}>
            <FlatList 
            data={DATA}
            renderItem={({item: lesson}) => {
                let ComponenteIcone;
                if (lesson.isWatched == false) {
                    ComponenteIcone = null;
                } else if (lesson.isWatched == true && lesson.testIsDone == false) {
                    ComponenteIcone = SvgPendingExamIcon;
                } else if (lesson.isWatched == true && lesson.testIsDone == true) {
                    ComponenteIcone = SvgCircleCheckIcon;
                }

                return(
                    <TouchableOpacity style={style.buttonContainer} onPress={() => navigation.navigate('LessonStudent')}>
                        <View style={style.lessonHeaderContainer}>
                            <Text style={style.lessonTitle}>{lesson.title}</Text>
                            {ComponenteIcone && <ComponenteIcone />}
                        </View>
                        <Text style={style.lessonInfo}>{lesson.timeLength} minutos</Text>
                        <Text style={style.lessonInfo}>Avaliação: {lesson.testGrade}</Text>
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
    
    buttonContainer: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 20,
        marginBottom: 10
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
        marginBottom: 4
    }


  })