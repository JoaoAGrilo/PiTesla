import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgMathIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <Path
      fill="#F5F5F5"
      d="M54 .5H6A5.51 5.51 0 0 0 .5 6v48A5.51 5.51 0 0 0 6 59.5h48a5.51 5.51 0 0 0 5.5-5.5V6A5.51 5.51 0 0 0 54 .5Zm-25.5 56H6A2.5 2.5 0 0 1 3.5 54V31.5h25v25Zm0-28h-25V6A2.5 2.5 0 0 1 6 3.5h22.5v25Zm28 25.5a2.5 2.5 0 0 1-2.5 2.5H31.5v-25h25V54Zm0-25.5h-25v-25H54A2.5 2.5 0 0 1 56.5 6v22.5Z"
    />
    <Path
      fill="#F5F5F5"
      d="M10.4 17.5h4.1v4.1a1.5 1.5 0 0 0 3 0v-4.1h4.1a1.5 1.5 0 1 0 0-3h-4.1v-4.1a1.5 1.5 0 1 0-3 0v4.1h-4.1a1.5 1.5 0 1 0 0 3ZM49.69 10.31a1.52 1.52 0 0 0-2.13 0L44 13.88l-3.56-3.57a1.51 1.51 0 0 0-2.13 2.13L41.88 16l-3.57 3.56a1.51 1.51 0 0 0 2.13 2.13L44 18.12l3.56 3.57a1.511 1.511 0 1 0 2.13-2.13L46.12 16l3.57-3.56a1.52 1.52 0 0 0 0-2.13ZM10.4 45.5h11.2a1.5 1.5 0 1 0 0-3H10.4a1.5 1.5 0 1 0 0 3ZM38.4 45.5h11.2a1.5 1.5 0 1 0 0-3H38.4a1.5 1.5 0 1 0 0 3ZM44 41.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM44 49.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </Svg>
)
export default SvgMathIcon
