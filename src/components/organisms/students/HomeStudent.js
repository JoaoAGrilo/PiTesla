import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import StudentHomeHeader from '../../molecules/StudentHomeHeader'
import SubjectGrid from '../../molecules/SubjectGrid'
import ButtonRegular from '../../atoms/ButtonRegular'


export default () => {

    const navigation = useNavigation()

    return (
        <View style={style.container}>
            <StudentHomeHeader/>
            <SubjectGrid />
            <ButtonRegular onPress={() => navigation.navigate('RedeemCoins')}>Resgatar moedas</ButtonRegular>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#006BFF',
        padding: 20
    }
})