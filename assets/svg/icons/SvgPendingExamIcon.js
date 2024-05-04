import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgPendingExamIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      fill="#BD2626"
      d="M17 0H3a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Zm1 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v22Z"
    />
    <Path
      fill="#BD2626"
      d="M6.61 12.92a.998.998 0 0 0 1.31-.53l.6-1.39h3l.6 1.39A1 1 0 0 0 13 13a.998.998 0 0 0 .926-.625 1 1 0 0 0-.006-.765l-3-7A.89.89 0 0 0 10 4a.91.91 0 0 0-.92.61l-3 7a1 1 0 0 0 .53 1.31ZM9.37 9 10 7.54 10.63 9H9.37ZM4 20h6a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2ZM15 22H4a1 1 0 0 0 0 2h11a1 1 0 0 0 0-2Z"
    />
  </Svg>
)
export default SvgPendingExamIcon
