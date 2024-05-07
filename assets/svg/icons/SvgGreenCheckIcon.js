import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgGreenCheckIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <Path fill="#27AE60" d="M16.333 8.8a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
    <Path fill="#2ECC71" d="M16.333 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
    <Path
      fill="#27AE60"
      d="m11.533 5.6-4.8 4.8-2-2-1.7 1.68 2 2 1.6 1.6.1.08 6.5-6.48-1.7-1.68Z"
    />
    <Path
      fill="#ECF0F1"
      d="m11.533 4.8-4.8 4.8-2-2-1.7 1.68 2 2 1.6 1.6.1.08 6.5-6.48-1.7-1.68Z"
    />
  </Svg>
)
export default SvgGreenCheckIcon
