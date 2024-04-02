import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgHeaderWave2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={360}
    height={458}
    fill="none"
    {...props}
  >
    <Path
      fill="#006BFF"
      fillRule="evenodd"
      d="m-175 251.873 26.895 17.979c27.71 17.979 81.5 53.937 136.105 53.937 54.605 0 108.395-35.958 163-41.951 54.605-5.993 108.395 17.979 163 41.951 54.605 23.972 108.395 47.944 163 77.909 54.605 29.964 108.395 65.922 163 53.936 54.605-11.986 108.395-71.915 136.105-101.88L803 323.789V144h-978v107.873Z"
      clipRule="evenodd"
    />
    <Path fill="#006BFF" d="M0 0h360v178.539H0z" />
  </Svg>
)
export default SvgHeaderWave2
