import React from 'react';
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ButtonRegular from '../atoms/ButtonRegular'
import ButtonReversed from '../atoms/ButtonReversed'

export default () => {

    const navigation = useNavigation()

    return (
        <View style={style.container}>
            <ButtonReversed onPress={() => navigation.navigate('LoginScreen', { userType: 'student' })}>Sou Aluno</ButtonReversed>
            <ButtonRegular onPress={() => navigation.navigate('LoginScreen', { userType: 'teacher' })}>Sou Professor</ButtonRegular>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: '8%'
    }
})
