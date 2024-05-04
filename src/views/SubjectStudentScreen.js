import React from 'react'
import { SafeAreaView} from 'react-native'
import StudentSubject from '../components/organisms/SubjectStudent'

export default props => {
    return(
        <SafeAreaView style={{flex:1}}>
            <StudentSubject navigation={props.navigation}/>
        </SafeAreaView>
    )
}