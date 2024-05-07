import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComputerIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M50.625 35.625V11.25H9.375v24.375M56.25 48.75H3.75l3.75-7.5h45l3.75 7.5Z"
    />
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M20.625 20.625 15 26.25l5.625 5.625M39.375 20.625 45 26.25l-5.625 5.625M33.75 18.75l-7.5 15"
    />
  </Svg>
)
export default SvgComputerIcon
