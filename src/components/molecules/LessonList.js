import React from "react";
import { View, FlatList, TouchableOpacity, StyleSheet, Touchable } from 'react-native'
import AtomicText from "../atoms/AtomicText";
import SvgCircleCheckIcon from "../../../assets/svg/icons/svgCircleCheckIcon";

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
                <TouchableOpacity style={style.container}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5}}>
                        <AtomicText fontFamily='Montserrat-SemiBold' fontSize={16} color='#606060' >{lesson.title}</AtomicText>
                        <SvgCircleCheckIcon />
                    </View>
                    <AtomicText fontFamily='Montserrat-SemiBold' fontSize={15} color='#808080' style={{marginBottom:4}} >{lesson.timeLength} minutos</AtomicText>
                    <AtomicText fontFamily='Montserrat-SemiBold' fontSize={15} color='#808080' >Avaliação: {lesson.testGrade}</AtomicText>
                </TouchableOpacity>
            )
        }}/>
    )
}

const style = StyleSheet.create({
    
    container: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        margin: 5,
        padding: 16,
        borderRadius: 20,
    }
  })