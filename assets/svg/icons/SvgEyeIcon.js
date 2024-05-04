import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgEyeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      stroke="gray"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 8.273S4.636 1 11 1s10 7.273 10 7.273-3.636 7.273-10 7.273S1 8.273 1 8.273Z"
    />
    <Path
      stroke="gray"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 11a2.727 2.727 0 1 0 0-5.455A2.727 2.727 0 0 0 11 11Z"
    />
  </Svg>
)
export default SvgEyeIcon
