import * as React from "react"
import { StyleSheet, View, Dimensions } from "react-native"
import Svg, { Path } from "react-native-svg"

const deviceWidth = Dimensions.get('window').width;

const SvgHeaderWave1 = (props) => (
  <View style={style.container}>
    <View style={style.headerSquare}/>
      <Svg style={style.headerWave}
      xmlns="http://www.w3.org/2000/svg"
      width={deviceWidth+4}
      height={301}
      fill="none"
      {...props}
    >
      <Path
        fill="#006BFF"
        fillRule="evenodd"
        d="m-162 77.165 32.591 25.085c31.539 26.48 95.669 76.652 159.799 83.62 64.13 6.969 128.26-32.054 192.389-39.022 64.13-5.575 129.312 19.511 193.442 58.534 64.129 37.629 128.259 89.194 192.389 94.769 64.13 6.968 128.26-30.661 159.799-50.172L801 230.468V.513h-963v76.651Z"
        clipRule="evenodd"
      />
    </Svg>
  </View>
  
)

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    width: "100%"
  },
  
  headerSquare: {
    backgroundColor: "#006BFF",
    width: {deviceWidth},
    height: "14%",
  },

  headerWave: {
    width: "100%"
  },
})

export default SvgHeaderWave1
