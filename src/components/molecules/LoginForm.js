import React from "react";
import { View, StyleSheet } from "react-native"
import ButtonRegular from "../atoms/ButtonRegular";
import IconTextInput from "../atoms/IconTextInput";
import AtomicText from "../atoms/AtomicText";

const LoginForm = props => {
  return (
    <View style={style.container}>
      <IconTextInput placeholder=" Email" leftIcon='mail' rightIcon='mail'/>
      <IconTextInput placeholder=" Senha" leftIcon='lock' rightIcon='hide'/>
      <ButtonRegular onPress={() => props.navigation.navigate('StudentSubject')}>Entrar</ButtonRegular>
    </View>
  )
}


export default LoginForm

const style = StyleSheet.create({
  container: {
    marginTop: '32%',
    width: '70%',
    alignSelf: "center"
  },
})