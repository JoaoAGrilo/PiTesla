import React from 'react'
import { SafeAreaView } from 'react-native'
import StudentHome from '../components/organisms/HomeStudent'

export default () => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#006BFF'}}>
            <StudentHome/>
        </SafeAreaView>
    )
}