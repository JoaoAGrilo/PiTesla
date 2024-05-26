import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ButtonRegular from '../atoms/ButtonRegular'
import { useNavigation } from '@react-navigation/native'

export default () => {

    const navigation = useNavigation()

    const sectionTitle = 'Introdução'
    const sectionContent = 'A notação científica é uma maneira eficiente de expressar números muito grandes ou muito pequenos. É frequentemente usada em ciências como física, química e astronomia para lidar com as vastas escalas de tamanho e distância que esses campos abrangem.'

    return (
        <View style={style.container}>
            <View style={style.contentContainer}>
                <Text style={style.sectionTitle}>{sectionTitle}</Text>
                <Text style={style.sectionContent}>{sectionContent}</Text>
            </View>
            <ButtonRegular onPress={() => navigation.navigate('ExamStudent')}>Iniciar avaliação</ButtonRegular>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },

    contentContainer: {
        height: '86%'
    },

    sectionTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        color: '#808080',
        marginBottom: 20
    },

    sectionContent: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        color: '#404040'
    },

    buttonContainer: {
        marginTop: 40
    }
})