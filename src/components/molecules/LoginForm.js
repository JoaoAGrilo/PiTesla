import React from "react";
import { View, StyleSheet } from "react-native"
import Button from "../atoms/ButtonRegular";
import TextInput from "../atoms/IconTextInput";

const LoginForm = props => {
  return (
    <View style={style.container}>
      <TextInput style={style.textInput} placeholder=" Email"/>
      <TextInput placeholder=" Senha" leftIcon='mail' rightIcon='lock'/>
      <Button onPress={() => props.navigation.navigate('Home')} children="Entrar"/>
    </View>
  )
}


export default LoginForm

const style = StyleSheet.create({
  container: {
    width: '70%',
    alignSelf: "center",
    alignItems: "center",
  },
})