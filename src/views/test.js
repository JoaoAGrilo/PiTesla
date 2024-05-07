
import React from 'react-native'
import { SafeAreaView, Text, View } from 'react-native'
import UserCoins from '../components/atoms/UserCoins';
import CircularProgress from 'react-native-circular-progress-indicator'
import * as Progress from 'react-native-progress';


export default () => { 

    const lesson = 'Produtos notáveis'
    const gainedCoins = 20
    const examResult = 7.5
    const progressValue = (examResult*10)
    const currentXp = 600
    const nextLevelXp = 1200
    const levelProgressValue = (currentXp/nextLevelXp)

    return (
        <SafeAreaView style={{flex: 1, backgroundColor:'#006BFF'}}>
            <View>
                <View style={{justifyContent: 'center', alignItems: 'flex-end', margin: 20}}>
                <UserCoins />
            <Text style={{ marginRight: 22, fontFamily: 'Montserrat-SemiBold', fontSize: 16, color: '#F5F5F5'}}>+{gainedCoins}</Text>
                </View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 32, color: '#F5F5F5'}}>Resultados</Text>
                    <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 18, color: '#F5F5F5'}}>{lesson}</Text>
                    <CircularProgress radius={90} value={progressValue} duration={2000} fontSize='20'  valueSuffix={'%'} activeStrokeColor={'#F5F5F5'} inActiveStrokeOpacity={0.2}/>
                </View>


            <Progress.Bar animated={true} progress={levelProgressValue} width={320} height={10} borderRadius={10} borderWidth={3} borderColor='#F5F5F5' color='#006BFF' unfilledColor='#77B0FF' />
            </View>
        </SafeAreaView>
    )
}