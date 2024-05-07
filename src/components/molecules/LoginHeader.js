import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import MiniLogo from '../atoms/MiniLogo'
import WaveBackground from '../atoms/WaveBackground'

export default () => {

    return (
        <View style={style.container}>
            <WaveBackground waveNumber={1}/>
            <View style={style.headerContent}>
            <MiniLogo />
                <View style={style.botSection}>
                    <Text style={style.mainText}>Bem-vindo{'\n'}de volta!</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
    },

    headerContent: {
        padding: 20,
        position: 'absolute',
    },

    botSection: {
        zIndex: 2,
        marginTop: '40%',
    },
    
    mainText: {
        color: '#F5F5F5',
        fontFamily: 'Montserrat-Bold',
        fontSize: 28,
    }
})
