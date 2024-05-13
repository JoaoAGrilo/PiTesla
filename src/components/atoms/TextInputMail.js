import React, { useState } from 'react'
import { View, TextInput, StyleSheet} from 'react-native'
import SvgMailIcon from '../../../assets/svg/icons/SvgMailIcon'
import SvgCheckIcon from '../../../assets/svg/icons/SvgCheckIcon'

export default props => {
    // const { placeholder } = props.placeholder
    const [email, setEmail] = useState('')

    const isValidEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }

    return (
        <View style={style.container}>
            <View style={style.inputContainer}>
                <SvgMailIcon/>
                <TextInput 
                    placeholder={props.placeholder}
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
            </View>
            {isValidEmail(email) && <SvgCheckIcon/>}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
        width: '100%',
    },
    
    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
})
