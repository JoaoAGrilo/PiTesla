import React from 'react'
import { SafeAreaView } from 'react-native'
import StudentLesson from '../components/organisms/StudentLesson'

export default props => {
    return (
        <SafeAreaView>
            <StudentLesson navigation={props.navigation}/>
        </SafeAreaView>
    )
}