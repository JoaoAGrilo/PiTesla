import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgBookIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.9}
      d="M24.375 2.813H8.437c-1.593 0-2.812 1.218-2.812 2.812 0 1.594 1.219 2.813 2.813 2.813h15.937v18.75"
    />
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.9}
      d="M24.375 27.188H8.437c-1.593 0-2.812-1.22-2.812-2.813V5.625M24.375 5.625H8.437"
    />
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.9}
      d="M10.313 8.438v11.25l2.812-.938 2.813.938V8.438"
    />
  </Svg>
)
export default SvgBookIcon
