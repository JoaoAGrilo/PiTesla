import React from 'react'
import { View, StyleSheet } from 'react-native'
import LoginForm from '../molecules/LoginForm'
import LoginHeader from '../molecules/LoginHeader'

export default () => {
    return(
    <View style={style.container}>
        <LoginHeader/>
        <View  style={style.loginFormContainer}>
            <LoginForm/>
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        height: '100%',
        padding: 20
    },

    loginFormContainer: {
        flex: 1,
        marginTop: '90%'
    }
})