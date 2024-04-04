import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgHashIcon
 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="gray"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 6.25h14M1 11.5h14M6.25 1 4.5 16.75M11.5 1 9.75 16.75"
    />
  </Svg>
)
export default SvgHashIcon

