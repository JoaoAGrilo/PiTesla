import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgRedMarkIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#C0392B"
      d="M16.667 9.833A8.333 8.333 0 1 1 0 9.833a8.333 8.333 0 0 1 16.667 0Z"
    />
    <Path
      fill="#E74C3C"
      d="M16.667 9A8.333 8.333 0 1 1 0 9a8.333 8.333 0 0 1 16.667 0Z"
    />
    <Path
      fill="#C0392B"
      d="m4.208 6.833 2.947 3-2.947 2.917 1.179 1.167L8.333 11l2.947 2.917 1.178-1.167-2.946-2.917 2.946-3-1.178-1.166-2.947 2.916-2.946-2.916-1.178 1.166Z"
    />
    <Path
      fill="#ECF0F1"
      d="m4.208 6 2.947 3-2.947 2.917 1.179 1.166 2.946-2.916 2.947 2.916 1.178-1.166L9.512 9l2.946-3-1.178-1.167L8.333 7.75 5.387 4.833 4.209 6Z"
    />
  </Svg>
)
export default SvgRedMarkIcon
