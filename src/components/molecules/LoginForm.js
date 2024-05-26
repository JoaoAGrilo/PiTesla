import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import ButtonRegular from '../atoms/ButtonRegular'
import TextInputMail from '../atoms/TextInputMail'
import TextInputPass from '../atoms/TextInputPass'
import ButtonReversed from '../atoms/ButtonReversed'
import { store } from '../../store'

export default () => {
  const navigation = useNavigation()
  
  const route = useRoute()
  const { userType } = route.params

  const handleLogin = () => {
    if (userType === 'student') return store.student.login()
    // navigation.navigate('HomeStudent')
    // return navigation.navigate('HomeTeacher')
  }

  return (
    <View style={style.container}>
      <TextInputMail placeholder='Email institucional' />
      <TextInputPass/>
      <ButtonRegular onPress={handleLogin}>Entrar</ButtonRegular>
      <ButtonReversed onPress={() => navigation.navigate('Welcome')}>Voltar</ButtonReversed>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginTop: '32%',
    width: '70%',
  },
})
