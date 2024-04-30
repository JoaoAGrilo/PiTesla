import React from "react";
import { View, StyleSheet, Button } from 'react-native'
import ButtonRegular from "../atoms/ButtonRegular";
import ButtonReversed from "../atoms/ButtonReversed";

export default props => {
    return (
        <View style={{marginTop: '8%'}}>
            <ButtonReversed onPress={() => props.navigation.navigate('StudentLogin')}>Sou Aluno</ButtonReversed>
            <ButtonRegular onPress={() => props.navigation.navigate('StudentLogin')}>Sou Professor</ButtonRegular>
        </View>
    )
}

const style = StyleSheet.create({
    
  })