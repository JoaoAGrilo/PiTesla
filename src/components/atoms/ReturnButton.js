import React from 'react'
import { View, StyleSheet } from 'react-native'
import SvgReturnIcon from '../../../assets/svg/icons/SvgReturnIcon'

export default props => {
    return(
        <View>
            <SvgReturnIcon onPress={() => props.navigation.navigate(props.returnTo)}/>
        </View>
    )
}