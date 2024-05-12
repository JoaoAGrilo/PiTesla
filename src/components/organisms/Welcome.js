import React from 'react'
import { View, StyleSheet } from 'react-native'

import WelcomeHeader from '../molecules/WelcomeHeader'
import WelcomeButtons from '../molecules/WelcomeButtons'

export default () => {
    return (
        <View style={style.container}>
            <WelcomeHeader />
            {/* <WelcomeButtons/> */}
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        backgroundColor: '#006BFF',
        height: '100%',
        padding: 20
    },
})
