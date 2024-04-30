import React from 'react'
import { View, TextInput, StyleSheet} from 'react-native'
import SvgMailIcon from '../../../assets/svg/icons/SvgMailIcon'
import SvgLockIcon from '../../../assets/svg/icons/SvgLockIcon'
import SvgCheckIcon from '../../../assets/svg/icons/SvgCheckIcon'
import SvgHideIcon from '../../../assets/svg/icons/SvgHideIcon'

const Icon = ({ leftIcon, rightIcon }) => {
    switch(leftIcon || rightIcon) {
        case 'mail': return <SvgMailIcon/>
        case 'lock': return <SvgLockIcon/>
        case 'check': return <SvgCheckIcon/>
        case 'hide' : return <SvgHideIcon/>
    }
}

export default props => {
    const { placeholder, leftIcon, rightIcon } = props;

    return (
        <View style={style.inputContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon leftIcon={leftIcon} />
                <TextInput placeholder={placeholder} />
            </View>
            <Icon rightIcon={rightIcon} />
        </View>
    )
}

const style = StyleSheet.create({
    inputContainer: {
        width: "100%",
        borderBottomWidth: 1,
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
}
)