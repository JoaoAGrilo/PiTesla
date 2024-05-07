import React from 'react'
import { SafeAreaView } from 'react-native'
import ExamResults from '../../components/organisms/students/ExamResults'

export default () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#006BFF'}}>
            <ExamResults />
        </SafeAreaView>
    )
}