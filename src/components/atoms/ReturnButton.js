import React from 'react'
import { View, StyleSheet } from 'react-native'
import SvgReturnIcon from '../../../assets/svg/icons/SvgReturnIcon'
import { useNavigation } from '@react-navigation/native'

export default props => {

    const navigation = useNavigation()

    return(
        <View>
            <SvgReturnIcon onPress={() => navigation.navigate(props.returnTo)}/>
        </View>
    )
}