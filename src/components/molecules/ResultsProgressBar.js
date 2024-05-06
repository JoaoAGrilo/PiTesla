import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Progress from 'react-native-progress';

export default props => {

    const currentLevel = 7
    const progressValue = props.progressValue

    return (
        <View style={style.container}>
            <Text style={style.levelNumber}>{currentLevel}</Text>
            <View style={style.midContainer}>
                <Text style={style.levelText}>Level</Text>
                    <View style={style.progressBar}>
                        <Progress.Bar animated={true} progress={progressValue} width={300} height={8} borderRadius={10} borderWidth={3} borderColor='#F5F5F5' color='#006BFF' unfilledColor='#77B0FF' />
                    </View>
                </View>
            <Text style={style.levelNumber}>{currentLevel+1}</Text>
        </View>
    )
}

const style = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },

    midContainer: {
        alignItems: 'center',
        marginTop: 40
    },

    progressBar: {
        paddingBottom: 10
    },

    levelText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
        color: '#F5F5F5',
        marginBottom: 12
    },

    levelNumber: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        color: '#F5F5F5',
        marginLeft: 10,
        marginRight: 10 
    }
})