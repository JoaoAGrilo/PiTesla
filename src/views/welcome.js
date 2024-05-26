import React from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'
import MiniLogo from '../components/MiniLogo'
import SvgWelcomeArt from '../../assets/svg/arts/SvgWelcomeArt'
import WelcomeButtons from '../components/WelcomeButtons'

export default props => {
    return (
        <SafeAreaView style={style.App}>
            <MiniLogo />
            <SvgWelcomeArt style={style.WelcomeArt}/>
            <View style={style.textContainer}>
                <Text style={style.mainText}>Educação</Text>
                <Text style={style.subText}>Estude de maneira mais prática{'\n'}e eficiente.</Text>
                <WelcomeButtons navigation={props.navigation}/>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    App: {
        backgroundColor: '#006BFF',
        flex: 1,
        paddingTop: '4%',
    },

    WelcomeArt: {
        alignSelf: 'center',
        marginTop: 120,
    },

    textContainer: {
        marginLeft: '10%',
        marginRight: '10%'
    },

    mainText: {
        fontSize: 32,
        fontFamily: 'Montserrat-SemiBold',
        color: '#F5F5F5',
        marginTop: 88,
    },
    
    subText: {
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        color: '#F5F5F5',
        marginTop: 10,
        marginBottom: 40,
    },

    buttons: {
        marginTop: 40,
    }
})