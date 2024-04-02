import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgHideIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="gray"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.983 15.95a8.3 8.3 0 0 1-4.917 1.717C5.271 17.667 1.96 11 1.96 11A15.349 15.349 0 0 1 6.15 6.05m3.179-1.517a7.503 7.503 0 0 1 1.738-.2c5.795 0 9.106 6.667 9.106 6.667a15.423 15.423 0 0 1-1.788 2.658m-5.563-.891a2.485 2.485 0 0 1-1.773.795 2.469 2.469 0 0 1-1.8-.732 2.501 2.501 0 0 1-.727-1.812 2.514 2.514 0 0 1 .79-1.785M1.96 1.833l18.212 18.334"
    />
  </Svg>
)
export default SvgHideIcon
