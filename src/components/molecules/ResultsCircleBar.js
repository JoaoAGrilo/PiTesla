import React from 'react'
import { View } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator'

export default props => {

    progressValue = (props.examResult*10)

    return (
        <View>
            <CircularProgress 
            radius={90} 
            value={progressValue} 
            duration={2000} 
            fontSize='20'  
            valueSuffix={'/10'} 
            activeStrokeColor={'#F5F5F5'} 
            inActiveStrokeOpacity={0.2}/>
        </View>
         )
}