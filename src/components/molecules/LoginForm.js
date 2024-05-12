import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import ButtonRegular from '../atoms/ButtonRegular'
import TextInputMail from '../atoms/TextInputMail'
import TextInputPass from '../atoms/TextInputPass'

export default () => {
  const navigation = useNavigation()
  
  const route = useRoute()
  const { userType } = route.params

  // const handleLogin = () => {
  //   if (userType === 'student') {
  //     navigation.navigate('HomeStudent')
  //   } else if (userType === 'teacher') {
  //     navigation.navigate('HomeTeacher')
  //   }
  // }

  return (
    <View style={style.container}>
      <TextInputMail/>
      <TextInputPass/>
      <ButtonRegular onPress={handleLogin}>Entrar</ButtonRegular>
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
