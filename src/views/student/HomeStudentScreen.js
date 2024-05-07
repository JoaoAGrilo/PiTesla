import React from 'react'
import { SafeAreaView } from 'react-native'
import StudentHome from '../../components/organisms/students/HomeStudent'

export default () => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#006BFF'}}>
            <StudentHome/>
        </SafeAreaView>
    )
}