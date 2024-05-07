import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgReturnIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={27}
    fill="none"
    {...props}
  >
    <Path
      fill="#F5F5F5"
      fillRule="evenodd"
      d="M14.482 1.35a1.704 1.704 0 0 0-2.414 0L.736 12.682a1.358 1.358 0 0 0 0 1.923l11.332 11.331a1.704 1.704 0 0 0 2.414 0 1.704 1.704 0 0 0 0-2.413l-9.873-9.887 9.886-9.886a1.7 1.7 0 0 0-.013-2.4Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgReturnIcon
