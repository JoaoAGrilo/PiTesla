import React from 'react'
import { View, TextInput, StyleSheet} from 'react-native'
import SvgMailIcon from '../../../assets/svg/icons/SvgMailIcon'
import SvgLockIcon from '../../../assets/svg/icons/SvgLockIcon'

const Icon = ({ leftIcon, rightIcon }) => {
    switch(leftIcon) {
        case 'mail': return <SvgMailIcon/>
        case 'lock': return <SvgLockIcon/>
    }

    switch(rightIcon) {
        case 'mail': return <SvgMailIcon/>
        case 'lock': return <SvgLockIcon/>
    }
}

export default props => {
    const { placeholder, leftIcon, rightIcon } = props;

    return (
        <View style={style.inputContainer}>
            <Icon leftIcon={leftIcon} />
            <TextInput placeholder={placeholder} />
            <Icon rightIcon={rightIcon} />
        </View>
    )
}

const style = StyleSheet.create({
    inputContainer: {
        width: "100%",
        borderBottomWidth: 1,
        marginBottom: 40,
    },
}
)