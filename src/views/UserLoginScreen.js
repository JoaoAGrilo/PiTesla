import React from 'react'
import { SafeAreaView }from 'react-native'
import UserLogin from '../components/organisms/UserLogin'

export default props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <UserLogin navigation={props.navigation}/>
        </SafeAreaView>
    )
}