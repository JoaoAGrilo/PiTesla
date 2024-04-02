import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgLockIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="gray"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.729 9.167H4.139c-.914 0-1.656.746-1.656 1.666v5.834c0 .92.742 1.666 1.656 1.666h11.59c.914 0 1.655-.746 1.655-1.666v-5.834c0-.92-.741-1.666-1.655-1.666ZM5.795 9.167V5.833a4.18 4.18 0 0 1 1.212-2.946 4.125 4.125 0 0 1 2.927-1.22c1.098 0 2.15.439 2.927 1.22a4.18 4.18 0 0 1 1.212 2.946v3.334"
    />
  </Svg>
)
export default SvgLockIcon
