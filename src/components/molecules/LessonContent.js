import React from 'react'
import { View, StyleSheet } from 'react-native'
import AtomicText from '../atoms/AtomicText'
import ButtonRegular from '../atoms/ButtonRegular'

export default props => {

    const lessonText = 'A notação científica é uma maneira eficiente de expressar números muito grandes ou muito pequenos. É frequentemente usada em ciências como física, química e astronomia para lidar com as vastas escalas de tamanho e distância que esses campos abrangem.'

    return (
        <View  style={{justifyContent: 'center'}}>
            <View style={{height: '86%'}}>
                <View style={{marginBottom: 20}}>
                    <AtomicText fontFamily='Montserrat-SemiBold' fontSize={20} color='#808080'>Introdução</AtomicText>
                </View>
                <AtomicText fontFamily='Montsrrat-Medium' fontSize={16} color='#202020'>{lessonText}</AtomicText>
                <ButtonRegular onPress={() => props.navigation.navigate('StudentExam')}>Iniciar avaliação</ButtonRegular>
            </View>
        </View>
    )
}