import React from 'react'
import { View, StyleSheet } from 'react-native'
import LoginForm from '../molecules/LoginForm'
import LoginHeader from '../molecules/LoginHeader'

export default props => {
    return(
    <View style={style.container}>
        <LoginHeader style={{flex: 1}}/>
        <View  style={style.loginFormContainer}>
            <LoginForm navigation={props.navigation}/>
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#F5F5F5',
        padding: 20
    },

    loginFormContainer: {
        flex: 1,
        marginTop: '90%'
    }
})