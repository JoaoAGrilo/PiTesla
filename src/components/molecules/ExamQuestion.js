import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ButtonRegular from '../atoms/ButtonRegular'

export default () => {

  const navigation = useNavigation()

  return (
    <View>
      <Text>Perguntas</Text>
      <ButtonRegular onPress={() => navigation.navigate('ExamResults')}>Finalizar avaliação</ButtonRegular>
    </View>
  )
}