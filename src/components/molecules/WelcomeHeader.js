import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import MiniLogo from '../atoms/MiniLogo'
import SvgWelcomeArt from '../../../assets/svg/arts/SvgWelcomeArt'

export default () => {
    return (
        <View>
            <MiniLogo />
            <SvgWelcomeArt style={style.welcomeArt}/>
            <View style={style.textContainer}>
                <Text style={style.mainText}>Educação</Text>
                <Text style={style.subText}>Estude de maneira mais prática{'\n'}e eficiente.</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    welcomeArt: {
        alignSelf: 'center',
        marginTop: '30%',
        marginBottom: '20%'
    },

    textContainer: {
        padding: '5%'
    },

    mainText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 32,
        color: '#f5f5f5'
    },

    subText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        color: '#F5F5F5'
    }
})
