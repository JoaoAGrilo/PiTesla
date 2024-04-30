import React from "react";
import { View, StyleSheet } from 'react-native'
import MiniLogo from "../atoms/MiniLogo";
import SvgWelcomeArt from "../../../assets/svg/arts/SvgWelcomeArt";
import AtomicText from "../atoms/AtomicText";

export default () => {
    return (
        <View>
            <MiniLogo />
            <SvgWelcomeArt style={{marginTop: '30%', marginBottom: '20%', alignSelf: 'center'}}/>
            <View style={{padding: '5%'}}>
                <AtomicText fontFamily='Montserrat-SemiBold' fontSize={32} color='#F5F5F5'>Educação</AtomicText>
                <AtomicText fontFamily='Montserrat-Medium' fontSize={16} color='#F5F5F5'>Estude de maneira mais prática{"\n"}e eficiente.</AtomicText>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    
  })