
import React from 'react'
import { View, StyleSheet } from 'react-native'
import ResultsHeader from '../../molecules/ResultsHeader'
import ResultsCircleBar from '../../molecules/ResultsCircleBar'
import ResultsProgressBar from '../../molecules/ResultsProgressBar'
import ResultsQuestionsList from '../../molecules/ResultsQuestionsList'
import ButtonReversed from '../../atoms/ButtonReversed'
import { useNavigation } from '@react-navigation/native'


export default () => { 

    const navigation = useNavigation()

    const examResult = 7.5
    const gainedCoins = 24
    const gainedXp = 200
    const currentXp = 600
    const nextLevelXp = 1200
    const progressValue = (currentXp/nextLevelXp)

    return (
        <View style={style.container}>
            <ResultsHeader gainedCoins={gainedCoins}/>
            <View style={style.resultsCircleContainer}>
                <ResultsCircleBar examResult={examResult}/>
            </View>
            <View>
                <ResultsProgressBar gainedXp={gainedXp} progressValue={progressValue}/>
            </View>
            <View style={style.resultsListContainer}>
                <ResultsQuestionsList/>
            </View>
            <View style={style.buttonContainer}>
                <ButtonReversed onPress={() => navigation.navigate('SubjectStudent')}>Concluir</ButtonReversed>
            </View>
        </View>
    )
}

    const style = StyleSheet.create({

    container: {
        justifyContent: 'center'
    },

    resultsCircleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },

    resultsListContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonContainer: {
        marginTop: 20,
        alignSelf: 'center',
        width: '70%'
    }
    })