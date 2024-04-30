import React from "react";
import { View, StyleSheet } from 'react-native'
import AtomicText from "../atoms/AtomicText";
import MiniLogo from "../atoms/MiniLogo";
import WaveBackground from "../atoms/WaveBackground";

export default props => {

    const userFirstName = 'João'

    return (
        <View style={style.container}>
            <WaveBackground waveNumber={1} style={style.headerWave}/>
            <View style={style.headerContent}>
            <MiniLogo />
                <View style={style.botSection}>
                    <AtomicText fontFamily='Montserrat-Bold' fontSize={28} color='#F5F5F5'>
                        Bem-vindo{'\n'}de volta!
                    </AtomicText>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        position: 'absolute'
    },
    
    headerWave: {
        position: 'absolute',
        top: -1,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        width: "100%"
      },

      headerContent: {
        position: 'absolute',
        padding: 20
      },

    botSection: {
        marginTop: '40%',
        zIndex: 2
    }
})
