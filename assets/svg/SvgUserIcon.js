import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgUserIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <G
      stroke="gray"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.6}
      clipPath="url(#a)"
    >
      <Path d="M9.5 17.813a8.312 8.312 0 1 0 0-16.625 8.312 8.312 0 0 0 0 16.625Z" />
      <Path d="M9.5 10.688a2.969 2.969 0 1 0 0-5.938 2.969 2.969 0 0 0 0 5.938ZM3.206 14.903C4.275 12.47 6.65 10.747 9.5 10.747c2.85 0 5.284 1.722 6.294 4.156" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h19v19H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgUserIcon
