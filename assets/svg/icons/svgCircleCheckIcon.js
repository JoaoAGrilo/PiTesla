import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgCircleCheckIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      fill="#27AE60"
      d="M24 13.2c0 6.628-5.372 12-12 12-6.627 0-12-5.372-12-12 0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12Z"
    />
    <Path
      fill="#2ECC71"
      d="M24 12c0 6.628-5.372 12-12 12-6.627 0-12-5.372-12-12C0 5.373 5.373 0 12 0c6.628 0 12 5.373 12 12Z"
    />
    <Path
      fill="#27AE60"
      d="m16.8 8.4-7.2 7.2-3-3-2.55 2.52 3 3 2.4 2.4.15.12 9.75-9.72L16.8 8.4Z"
    />
    <Path
      fill="#ECF0F1"
      d="m16.8 7.2-7.2 7.2-3-3-2.55 2.52 3 3 2.4 2.4.15.12 9.75-9.72L16.8 7.2Z"
    />
  </Svg>
)
export default SvgCircleCheckIcon
