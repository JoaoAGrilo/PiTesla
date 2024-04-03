import * as React from "react"
import { StyleSheet, View, Dimensions } from "react-native"
import Svg, { Path } from "react-native-svg"

const deviceWidth = Dimensions.get('window').width;

const SvgHeaderWave2 = (props) => (
  <View style={style.container}>
    <View style={style.headerSquare}/>
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={deviceWidth+4}
    height={314}
    fill="none"
    {...props}
  >
    <Path
      fill="#006BFF"
      fillRule="evenodd"
      d="m-175 107.873 26.895 17.979c27.71 17.979 81.5 53.937 136.105 53.937 54.605 0 108.395-35.958 163-41.951 54.605-5.993 108.395 17.979 163 41.951 54.605 23.972 108.395 47.944 163 77.909 54.605 29.964 108.395 65.922 163 53.936 54.605-11.986 108.395-71.915 136.105-101.88L803 179.789V0h-978v107.873Z"
      clipRule="evenodd"
    />
  </Svg>
  </View>
  
)

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -1,
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

export default SvgHeaderWave2
