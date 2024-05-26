import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import SvgPhysicsIcon from '../../../assets/svg/icons/SvgPhysicsIcon'
import SvgMathIcon from '../../../assets/svg/icons/SvgMathIcon'
import SvgComputerIcon from '../../../assets/svg/icons/SvgComputerIcon'
import SvgChemistryIcon from '../../../assets/svg/icons/SvgChemistryIcon'

export default props => {

    const navigation = useNavigation()

    let Icon;
    let cardColor;
    let cardText;
    switch (props.cardType) {
        case 'Physics':
            Icon = SvgPhysicsIcon;
            cardText = 'Física'
            cardColor = '#14618C'
            break;
        case 'Math':
            Icon = SvgMathIcon;
            cardText = 'Matemática'
            cardColor = '#0386B0'
            break;
        case 'Computer':
            Icon = SvgComputerIcon;
            cardText = 'Computação'
            cardColor = '#109CBB'
            break;
        case 'Chemistry':
            Icon = SvgChemistryIcon;
            cardText = 'Química'
            cardColor = '#10B1BB'
            break;
        default:
            Icon = View;
            cardColor = '#808080'
    }

    return (
        <TouchableOpacity style={[style.container, {backgroundColor: cardColor}]} onPress={() => navigation.navigate('SubjectStudent', { cardType: props.cardType })}>
            <Icon />
            <Text style={style.cardText}>{cardText}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        height: 140,
        width: 140,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },

    cardText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: '#F5F5F5',
        paddingTop: 10
    }
})
