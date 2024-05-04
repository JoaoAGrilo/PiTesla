import React from 'react'
import { View, StyleSheet } from 'react-native'
import HomeCard from '../atoms/HomeCard'

export default props => {
    return (
        <View style={style.container}>
            <View style={style.gridLine}>
                <HomeCard cardType='Physics' navigation={props.navigation}/>
                <HomeCard cardType='Math' navigation={props.navigation}/>
            </View>
            <View style={style.gridLine}>
                <HomeCard cardType='Computer' navigation={props.navigation}/>
                <HomeCard cardType='Chemistry' navigation={props.navigation}/>
            </View>
        </View>


    )
}

const style = StyleSheet.create({
    container: {
        marginTop: '36%',
        padding: 50
    },

    gridLine: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
})