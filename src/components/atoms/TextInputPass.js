import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import SvgLockIcon from '../../../assets/svg/icons/SvgLockIcon'
import SvgEyeIcon from '../../../assets/svg/icons/SvgEyeIcon'
import SvgEyeOffIcon from '../../../assets/svg/icons/SvgEyeOffIcon'

export default () => {
    const [isHidden, setIsHidden] = useState(true);

    const handlePress = () => {
        setIsHidden(prevState => !prevState);
    };

    return (
        <View style={style.container}>
            <View style={style.inputContainer}>
                <SvgLockIcon/>
                <TextInput placeholder=' Senha' secureTextEntry={isHidden}/>
            </View>
            <TouchableOpacity onPress={handlePress}>
                {isHidden ? <SvgEyeIcon /> : <SvgEyeOffIcon />}
            </TouchableOpacity>
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
