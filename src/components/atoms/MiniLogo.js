import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SvgBookIcon from '../../../assets/svg/icons/SvgBookIcon'

export default () => {
  return (
    <View style={style.container}>
      <Text style={style.logoText}>Pi Tesla</Text>
      <SvgBookIcon/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },

    logoText: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 28,
      color: '#F5F5F5'
    }
});
