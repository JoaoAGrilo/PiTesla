import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgCheckIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#006BFF"
      d="M5.888 11.79a.942.942 0 0 1-.656-.265L.272 6.71a.883.883 0 0 1 0-1.274.948.948 0 0 1 1.312 0l4.266 4.14L14.38.301a.948.948 0 0 1 1.31-.072.883.883 0 0 1 .074 1.272l-9.183 9.987a.941.941 0 0 1-.667.3l-.026.001Z"
    />
  </Svg>
)
export default SvgCheckIcon
