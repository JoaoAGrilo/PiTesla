// WaveBackground.js
import React from 'react';
import { StyleSheet } from 'react-native'
import SvgHeaderWave1 from '../../../assets/svg/patterns/SvgHeaderWave1'
import SvgHeaderWave2 from '../../../assets/svg/patterns/SvgHeaderWave2'

const WaveBackground = ({ waveNumber }) => {
    switch(waveNumber) {
        case 1: return <SvgHeaderWave1 style={style.headerWave}/>
        case 2: return <SvgHeaderWave2/>
        default: return null;
    }
}

export default WaveBackground;

const style = StyleSheet.create({
    
    headerWave: {
        width: '100%'
    }

  })