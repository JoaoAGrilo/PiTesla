import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgEyeOffIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="gray"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.445 16.445A9.23 9.23 0 0 1 11 18.333C4.583 18.333.917 11 .917 11a16.912 16.912 0 0 1 4.638-5.445m3.52-1.668A8.36 8.36 0 0 1 11 3.667C17.417 3.667 21.083 11 21.083 11a16.962 16.962 0 0 1-1.98 2.924m-6.16-.98a2.75 2.75 0 1 1-3.886-3.887M.917.917l20.166 20.166"
    />
  </Svg>
)
export default SvgEyeOffIcon
