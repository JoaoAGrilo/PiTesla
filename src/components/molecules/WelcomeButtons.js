import React from "react";
import { View, StyleSheet, Button } from 'react-native'
import ButtonRegular from "../atoms/ButtonRegular";
import ButtonReversed from "../atoms/ButtonReversed";

export default props => {
    return (
        <View style={{marginTop: '8%'}}>
            <ButtonReversed onPress={() => props.navigation.navigate('UserLogin')}>Sou Aluno</ButtonReversed>
            <ButtonRegular onPress={() => props.navigation.navigate('UserLogin')}>Sou Professor</ButtonRegular>
        </View>
    )
}
