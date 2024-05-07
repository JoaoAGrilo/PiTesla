import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import RedeemWalletInput from '../../molecules/RedeemWalletInput'
import RedeemCoinsHeader from '../../molecules/RedeemCoinsHeader'
import RedeemCoinsInput from '../../molecules/RedeemCoinsInput'
import ButtonReversed from '../../atoms/ButtonReversed'

export default () => {

    const navigation = useNavigation()

    return (
        <View style={{paddingTop: 40, padding: 30}}>
            <RedeemCoinsHeader />
            <RedeemWalletInput />
            <RedeemCoinsInput />
            <View  style={{width: '70%', marginTop: 60, alignSelf: 'center'}}>
                <ButtonReversed onPress={() => navigation.navigate('HomeStudent')}>Resgatar</ButtonReversed>
            </View>
        </View>
    )
}