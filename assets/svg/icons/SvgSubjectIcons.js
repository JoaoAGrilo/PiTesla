import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

export const SvgBiologyIcon = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={62}
    fill="none"
    {...props}
  >
    <Path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M30.029 23.857A15.61 15.61 0 0 0 33 14.714V1M3.971 37.571A15.61 15.61 0 0 0 1 46.714V60.43M12.429 39.857h18.285M7.857 49h22.857M7.857 58.143H33V46.714c0-8.914-7.086-16-16-16M21.571 21.571H3.286M26.143 12.429H1M26.143 3.286H1v11.428c0 8.914 7.086 16 16 16"
    />
  </Svg>
)

export const SvgPhysicsIcon = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={58}
    fill="none"
    {...props}
  >
    <Path
      fill="#F5F5F5"
      fillRule="evenodd"
      d="M19.311 30.49c-.403.836-.754 1.544-1.087 2.26-1.67 3.589-3.052 7.277-3.765 11.184-.397 2.173-.614 4.362-.047 6.543.487 1.875 1.502 2.837 3.237 2.917.76.035 1.554-.126 2.294-.334 1.958-.555 3.662-1.626 5.309-2.786.4-.282.809-.458 1.308-.272.884.329 1.204 1.5.459 2.057-2.691 2.005-5.538 3.733-9.025 3.84-2.855.088-4.922-1.443-5.833-4.165-.68-2.031-.72-4.12-.471-6.216.741-6.24 3.149-11.908 6.04-17.403.249-.472.264-.847.088-1.351a219.411 219.411 0 0 1-2.053-6.26c-.125-.397-.253-.51-.684-.415-2.833.623-5.624 1.383-8.137 2.872a12.572 12.572 0 0 0-2.678 2.104c-1.29 1.355-1.315 2.854-.26 4.401.92 1.35 2.216 2.274 3.584 3.109.428.262.88.485 1.311.742.626.374.841 1.1.52 1.704-.323.605-1.047.844-1.704.506-1.922-.988-3.714-2.16-5.152-3.805-.88-1.008-1.526-2.141-1.74-3.484-.266-1.675.214-3.151 1.22-4.477 1.038-1.367 2.4-2.342 3.888-3.152 2.638-1.436 5.48-2.294 8.4-2.927.2-.043.399-.097.67-.165-.138-.779-.286-1.535-.403-2.296-.479-3.097-.7-6.197.061-9.284.301-1.22.774-2.375 1.595-3.347C17.934.606 20.093.165 22.512.756c2.392.584 4.401 1.909 6.274 3.45.53.436.544 1.224.112 1.731-.442.518-1.128.585-1.729.176-.944-.643-1.862-1.33-2.843-1.91-1.124-.664-2.331-1.136-3.676-1.142-1.111-.006-1.974.446-2.607 1.346-.802 1.142-1.089 2.459-1.24 3.81-.321 2.856.06 5.664.616 8.458.06.297.174.402.486.37 2.255-.224 4.51-.449 6.769-.637.491-.04.811-.218 1.116-.603 2.935-3.708 6.152-7.14 9.938-10.005 2.108-1.596 4.336-2.987 6.9-3.746 1.605-.476 3.231-.652 4.849-.083 2.02.71 3.149 2.245 3.73 4.226.617 2.103.521 4.247.27 6.39-.064.55-.16 1.096-.263 1.639-.141.739-.689 1.13-1.427 1.044-.671-.078-1.109-.617-1.038-1.366.097-1.033.332-2.06.343-3.092.013-1.22-.014-2.471-.267-3.656-.53-2.464-2.235-3.43-4.756-2.875-1.892.417-3.569 1.307-5.166 2.36-3.28 2.161-6.081 4.865-8.681 7.788-.484.543-.949 1.104-1.419 1.659-.028.033-.026.092-.062.232h.68c6.696.068 13.293.864 19.74 2.72 3.07.883 6.033 2.035 8.76 3.732 1.452.902 2.784 1.947 3.837 3.31 2.148 2.78 1.968 5.9-.504 8.39-1.668 1.682-3.724 2.744-5.913 3.569-.62.232-1.302-.11-1.539-.703-.26-.652.022-1.326.685-1.648 1.011-.49 2.063-.914 3.018-1.496a10.54 10.54 0 0 0 2.174-1.75c1.338-1.424 1.388-2.981.253-4.575-.85-1.194-1.992-2.067-3.22-2.83-3.03-1.883-6.355-3.05-9.779-3.96-3.569-.95-7.194-1.612-10.877-1.874-2.934-.209-5.88-.269-8.82-.408-.424-.02-.714.105-.95.469-1.724 2.658-3.466 5.303-5.181 7.967-.125.194-.178.543-.093.749 2.903 6.907 6.579 13.354 11.45 19.077 2.051 2.409 4.282 4.636 6.99 6.322 1.272.79 2.598 1.45 4.137 1.552 1.394.094 2.41-.49 3.102-1.672.652-1.115.914-2.348 1.031-3.615.378-4.088-.43-8.032-1.503-11.935-1.098-3.998-2.651-7.827-4.432-11.568-.143-.3-.261-.658-.245-.982.028-.59.493-1.01 1.075-1.1.51-.08 1.049.2 1.304.749.637 1.364 1.284 2.725 1.867 4.113 1.801 4.285 3.251 8.682 4.017 13.281.535 3.21.79 6.432.048 9.647a11.115 11.115 0 0 1-.72 2.105c-1.263 2.762-3.825 4.01-6.794 3.361-2.413-.528-4.45-1.79-6.35-3.296-3.496-2.77-6.332-6.148-8.897-9.767-2.924-4.123-5.393-8.507-7.462-13.117-.078-.172-.167-.338-.319-.648Zm-1.264-10.976 1.598 5.082 3.706-5.656-5.304.574Zm14.187 13.12c-2.009-.003-3.643-1.631-3.639-3.625.004-2.026 1.636-3.64 3.678-3.64a3.64 3.64 0 0 1 3.64 3.627c0 2.024-1.634 3.64-3.679 3.637Z"
      clipRule="evenodd"
    />
  </Svg>
)

export const SvgGeographyIcon = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={63}
    fill="none"
    {...props}
  >
    <Path
      fill="#F5F5F5"
      d="M45.182 41.978a1.573 1.573 0 0 0-2.353-2.087A22.697 22.697 0 1 1 12.505 6.473l.007-.005.009-.006a22.61 22.61 0 0 1 3.943-2.298 1.574 1.574 0 0 0-.098-2.905 1.573 1.573 0 0 0-1.203.04 25.883 25.883 0 0 0-3.2 1.735L10.234.649a1.573 1.573 0 1 0-2.546 1.848l1.731 2.386A25.835 25.835 0 0 0 0 24.839a25.844 25.844 0 0 0 23.867 25.767v3.732H15.99a1.302 1.302 0 0 0-1.26.972l-1.417 5.408a1.302 1.302 0 0 0 1.26 1.632H37.11a1.302 1.302 0 0 0 1.26-1.632l-1.419-5.408a1.301 1.301 0 0 0-1.259-.972h-7.875v-3.734a25.867 25.867 0 0 0 11.898-3.968l1.815 2.502a1.573 1.573 0 0 0 2.547-1.847l-1.815-2.501c1.045-.86 2.022-1.8 2.92-2.812Z"
    />
    <Path
      fill="#F5F5F5"
      d="M14.322 9.478a19.181 19.181 0 0 0 .845 31.25 19.174 19.174 0 0 0 21.988-.435l.228-.168A19.18 19.18 0 0 0 35.61 8.292a19.174 19.174 0 0 0-21.06 1.016l-.228.17ZM9.46 26.904a16.481 16.481 0 0 1 1.554-9.387l.505-1.028.108 1.14c.035.368.085.75.147 1.136.322 1.892.872 3.74 1.637 5.501l.1.235-3.981 2.95-.07-.547Zm6.468 11.118a16.56 16.56 0 0 1-5.61-7.568l-.083-.227 4.457-3.304.18.322a35.725 35.725 0 0 0 5.45 7.352l.256.265-4.457 3.304-.193-.144ZM27.73 29.56l-4.995 3.703-.197-.198a32.346 32.346 0 0 1-5.557-7.495l-.131-.247 4.994-3.702 5.886 7.94Zm-3.757-9.517 4.994-3.702.197.197a32.354 32.354 0 0 1 5.557 7.496l.131.246-4.994 3.703-5.885-7.94Zm4.534 21.073c-3.198.522-6.479.09-9.432-1.242l-.504-.226 3.98-2.951.196.163a23.92 23.92 0 0 0 4.788 3.166c.352.172.703.33 1.043.47l1.057.436-1.128.184Zm5.473-2.333a5.417 5.417 0 0 1-.892.07c-2.252-.003-5.108-1.25-8.006-3.523l-.334-.262 4.56-3.38 5.195 7.009-.523.086Zm2.886-2.14-.235.476-5.195-7.009 4.559-3.38.154.396c1.515 3.905 1.776 7.374.717 9.518ZM42.244 22.7a16.495 16.495 0 0 1-1.555 9.386l-.503 1.026-.11-1.137c-.035-.368-.084-.75-.147-1.135a23.832 23.832 0 0 0-1.637-5.502l-.1-.235 3.982-2.952.07.549Zm-6.468-11.117a16.572 16.572 0 0 1 5.61 7.567l.082.227-4.457 3.305-.18-.323a35.685 35.685 0 0 0-5.449-7.352l-.256-.265 4.457-3.304.193.145ZM23.195 8.488a16.489 16.489 0 0 1 9.434 1.24l.504.227-3.982 2.951-.195-.163a23.81 23.81 0 0 0-4.788-3.165c-.351-.172-.702-.33-1.044-.47l-1.058-.436 1.129-.184Zm-5.472 2.332c2.359-.39 5.602.868 8.898 3.453l.334.262-4.56 3.38-5.195-7.009.523-.086Zm-2.65 1.664 5.194 7.008-4.56 3.38-.153-.395c-1.514-3.905-1.776-7.373-.716-9.517l.234-.476Z"
    />
  </Svg>
)

export const SvgHistoryIcon = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={64}
    fill="none"
    {...props}
  >
    <Path
      fill="#F5F5F5"
      d="M22 29.333c3.216 0 8-8.773 8-14.666 0-4.797-3.888-9.334-8-9.334s-8 4.537-8 9.334c0 5.893 4.784 14.666 8 14.666ZM22 8c2.64 0 5.333 3.365 5.333 6.667 0 4.856-3.893 11.304-5.333 11.974-1.44-.67-5.333-7.117-5.333-11.974C16.667 11.365 19.359 8 22 8Z"
    />
    <Path
      fill="#F5F5F5"
      d="M42.878 29.664a1.326 1.326 0 0 0-1.055-.32L28.789 31.08c4-4.393 6.544-11.818 6.544-16.414C35.333 7.742 29.63 0 22 0S8.667 7.742 8.667 14.667c0 4.596 2.545 12.021 6.544 16.415L2.177 29.343a1.34 1.34 0 0 0-1.51 1.323v8c0 .372.153.726.427.979.27.252.638.393 1.008.349l15.82-1.216-1.253 23.817c-.02.365.112.724.365.987.25.266.601.417.966.417h8c.365 0 .716-.151.966-.417a1.32 1.32 0 0 0 .365-.987L26.078 38.78l15.82 1.216c.37.047.735-.097 1.008-.35a1.33 1.33 0 0 0 .427-.978v-8c0-.386-.166-.75-.455-1.003ZM22 2.667c6.104 0 10.667 6.336 10.667 12C32.667 21.034 27.396 32 22 32S11.333 21.034 11.333 14.667c0-5.664 4.563-12 10.667-12ZM3.333 32.19 6 32.546v4.476l-2.667.205V32.19Zm16.073 29.143.14-2.666h4.908l.14 2.666h-5.188Zm5.362-25.328c-.367-.052-.758.107-1.034.375-.273.268-.419.64-.398 1.024L24.314 56h-4.628l.978-18.596a1.332 1.332 0 0 0-.398-1.024c-.274-.268-.649-.43-1.034-.375l-10.565.812V32.9l11.614 1.55c.025.003.047-.007.071-.005a6.877 6.877 0 0 0 1.648.22c.562 0 1.11-.088 1.648-.22.023-.002.045.008.068.005l11.617-1.55v3.916l-10.565-.812Zm15.899 1.222L38 37.022v-4.476l2.667-.356v5.037Z"
    />
  </Svg>
)

export const SvgMathIcon = (props) => (
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

export const SvgPortugueseIcon = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={62}
    fill="none"
    {...props}
  >
    <Path
      fill="#F5F5F5"
      d="M24.095 40.579a39.96 39.96 0 0 0 4.878 8.273 40.056 40.056 0 0 0 4.892-8.273 106.39 106.39 0 0 0-9.77 0ZM12.59 41.716a20.149 20.149 0 0 0 11.326 7.87 41.562 41.562 0 0 1-4.578-8.678c-2.26.194-4.519.464-6.748.808ZM10.301 22.865a19.891 19.891 0 0 0 0 14.617 118.99 118.99 0 0 1 7.72-1.032 29.186 29.186 0 0 1 0-12.568c-2.543-.24-5.132-.583-7.72-1.017ZM22.6 36.105a113.182 113.182 0 0 1 12.76 0 24.92 24.92 0 0 0 0-11.879c-4.25.255-8.51.255-12.76 0a24.922 24.922 0 0 0 0 11.88ZM47.66 37.482a20.092 20.092 0 0 0 0-14.617c-2.59.434-5.192.778-7.72 1.017.912 4.14.912 8.428 0 12.567 2.528.255 5.13.599 7.72 1.033ZM34.03 10.761a40.962 40.962 0 0 1 4.593 8.678c2.259-.195 4.518-.479 6.747-.808a20.183 20.183 0 0 0-11.34-7.87ZM33.865 19.768a39.672 39.672 0 0 0-4.893-8.274 39.583 39.583 0 0 0-4.877 8.274c3.247.15 6.523.15 9.77 0ZM3.528 19.617a1.758 1.758 0 0 0 2.039-.119c.584-.493.843-1.41 1.1-2.099l.928-2.494h7.907l.928 2.441c.343.898.76 2.232 1.818 2.485a1.954 1.954 0 0 0 2.387-1.755 6.308 6.308 0 0 0-.596-2.083L14.958 3.444a12.282 12.282 0 0 0-1.133-2.52C13.1-.13 11.7-.176 10.505.257c-1.438.52-1.863 2.265-2.366 3.54L3.165 16.1c-.477 1.182-.991 2.704.363 3.518Zm7.98-15.369 2.933 7.7H8.63l2.878-7.7ZM53.103 47.485a1.51 1.51 0 0 0 0-3.021H43.012l.171-1.91a1.51 1.51 0 0 0-3.01-.27l-.195 2.18h-3.445a1.51 1.51 0 0 0 0 3.021h3.173l-.476 5.31a1.51 1.51 0 0 0 .335 1.09c.74.848 1.565 1.618 2.46 2.299a13.85 13.85 0 0 1-6.288 2.07 1.511 1.511 0 0 0 .27 3.01 16.476 16.476 0 0 0 8.74-3.282c2.121 1.182 4.866 2.568 8.213 2.884a1.511 1.511 0 0 0 .285-3.008c-2.414-.228-4.456-1.252-6.134-2.072a20.505 20.505 0 0 0 4.257-8.3h1.735Zm-8.65 6.722a17.214 17.214 0 0 1-2.154-1.81l.441-4.912h5.509a16.506 16.506 0 0 1-3.796 6.722Z"
    />
    <Path
      fill="#F5F5F5"
      d="M28.983 1.185a28.852 28.852 0 0 0-9.7 1.673L20.681 6.3a25.26 25.26 0 0 1 31.482 33.928h.943c.97 0 1.925.249 2.774.72a28.74 28.74 0 0 0 2.086-10.78c0-15.108-13.003-28.983-28.983-28.983ZM3.706 30.495a24.84 24.84 0 0 1 .742-6.057A5.926 5.926 0 0 1 .91 23.273a28.995 28.995 0 0 0 28.072 36.205c.392 0 .794-.01 1.186-.032a5.661 5.661 0 0 1 1.292-3.04c.27-.326.58-.617.921-.867a24.01 24.01 0 0 1-3.399.233A25.3 25.3 0 0 1 3.706 30.495Z"
    />
  </Svg>
)

export const SvgChemistryIcon = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={58}
    fill="none"
    {...props}
  >
    <Path
      fill="#F5F5F5"
      d="m43.562 38.892-10.72-13.918c-.52-.68-.8-1.51-.8-2.365V8.096A3.866 3.866 0 0 0 30.75.583h-15.5a3.866 3.866 0 0 0-1.292 7.513v14.513a3.895 3.895 0 0 1-.804 2.365L2.433 38.892a11.506 11.506 0 0 0 9.122 18.525h22.89a11.506 11.506 0 0 0 9.117-18.525ZM15.25 3.167h15.5a1.291 1.291 0 1 1 0 2.583h-1.292a1.292 1.292 0 0 0 0 2.583V22.61a6.502 6.502 0 0 0 1.341 3.937l.904 1.173H14.297l.904-1.173a6.497 6.497 0 0 0 1.212-2.713h2.712a1.291 1.291 0 0 0 0-2.583h-2.583v-2.583h2.583a1.291 1.291 0 1 0 0-2.584h-2.583V13.5h2.583a1.291 1.291 0 1 0 0-2.583h-2.583V8.333H23a1.291 1.291 0 1 0 0-2.583h-7.75a1.292 1.292 0 0 1 0-2.583Zm27.35 46.37a8.932 8.932 0 0 1-8.154 5.296H11.555a8.922 8.922 0 0 1-7.07-14.366l7.823-10.161h21.384l7.823 10.161a8.914 8.914 0 0 1 1.085 9.07Z"
    />
  </Svg>
)

