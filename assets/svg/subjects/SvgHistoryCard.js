import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgHistoryCard = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={120}
    fill="none"
    {...props}
  >
    <Rect width={120} height={120} fill="#A68B63" rx={10} />
    <Path
      fill="#F5F5F5"
      d="M60 39.333c3.216 0 8-8.773 8-14.666 0-4.797-3.888-9.334-8-9.334s-8 4.537-8 9.334c0 5.893 4.784 14.666 8 14.666ZM60 18c2.64 0 5.333 3.364 5.333 6.667 0 4.856-3.893 11.304-5.333 11.974-1.44-.67-5.333-7.118-5.333-11.974C54.667 21.364 57.359 18 60 18Z"
    />
    <Path
      fill="#F5F5F5"
      d="M80.878 39.664a1.326 1.326 0 0 0-1.055-.32L66.789 41.08c4-4.393 6.544-11.818 6.544-16.414C73.333 17.742 67.63 10 60 10s-13.333 7.742-13.333 14.667c0 4.596 2.545 12.021 6.544 16.414l-13.034-1.737a1.34 1.34 0 0 0-1.51 1.323v8c0 .372.153.726.427.979.27.252.638.393 1.008.349l15.82-1.216-1.253 23.817c-.02.365.112.724.365.987.25.266.601.417.966.417h8c.365 0 .716-.151.966-.417a1.32 1.32 0 0 0 .365-.987L64.078 48.78l15.82 1.216c.37.047.735-.097 1.008-.35a1.33 1.33 0 0 0 .427-.978v-8c0-.386-.166-.75-.455-1.003ZM60 12.667c6.104 0 10.667 6.336 10.667 12C70.667 31.034 65.396 42 60 42S49.333 31.034 49.333 24.667c0-5.664 4.563-12 10.667-12ZM41.333 42.19l2.667.356v4.476l-2.667.205V42.19Zm16.073 29.143.14-2.666h4.908l.14 2.666h-5.188Zm5.362-25.328c-.367-.052-.758.107-1.034.375-.273.268-.419.64-.398 1.024L62.313 66h-4.627l.978-18.596a1.332 1.332 0 0 0-.398-1.024c-.274-.268-.649-.43-1.034-.375l-10.565.812V42.9l11.614 1.55c.025.003.047-.007.071-.005a6.877 6.877 0 0 0 1.648.22c.562 0 1.11-.088 1.648-.22.023-.002.045.008.068.005l11.617-1.55v3.916l-10.565-.812Zm15.899 1.222L76 47.022v-4.476l2.667-.356v5.037ZM36.571 92.8h2.08V104h-2.08V92.8ZM30.78 104H28.7V92.8h2.08V104Zm5.952-4.8h-6.128v-1.776h6.128V99.2Zm4.73 4.8v-8.544h2V104h-2Zm1.007-9.952c-.373 0-.682-.117-.928-.352a1.156 1.156 0 0 1-.352-.848c0-.341.118-.624.352-.848.246-.235.555-.352.928-.352.374 0 .678.112.912.336.246.213.368.485.368.816 0 .352-.117.65-.352.896-.234.235-.544.352-.928.352Zm6.257 10.064a7.785 7.785 0 0 1-2.064-.272c-.65-.192-1.168-.421-1.552-.688l.768-1.52c.384.245.843.448 1.376.608.534.16 1.067.24 1.6.24.63 0 1.083-.085 1.36-.256.288-.171.432-.4.432-.688a.578.578 0 0 0-.288-.528 2.13 2.13 0 0 0-.752-.288c-.309-.064-.656-.123-1.04-.176a15.05 15.05 0 0 1-1.136-.208 4.342 4.342 0 0 1-1.024-.4 2.209 2.209 0 0 1-.752-.72c-.192-.299-.288-.693-.288-1.184 0-.544.155-1.013.464-1.408.31-.405.742-.715 1.296-.928.566-.224 1.232-.336 2-.336.576 0 1.158.064 1.744.192.587.128 1.072.31 1.456.544l-.768 1.52a3.883 3.883 0 0 0-1.232-.496 5.26 5.26 0 0 0-1.216-.144c-.608 0-1.06.09-1.36.272-.288.181-.432.41-.432.688 0 .256.096.448.288.576.192.128.443.23.752.304.31.075.651.139 1.024.192a8.19 8.19 0 0 1 1.136.208c.374.096.715.23 1.024.4.32.16.576.389.768.688.192.299.288.688.288 1.168 0 .533-.16.997-.48 1.392-.309.395-.752.704-1.328.928-.576.213-1.264.32-2.064.32Zm8.81 0c-.938 0-1.663-.24-2.175-.72-.512-.491-.768-1.211-.768-2.16v-7.664h2v7.616c0 .405.101.72.304.944.213.224.507.336.88.336.448 0 .821-.117 1.12-.352l.56 1.424a2.35 2.35 0 0 1-.864.432 3.881 3.881 0 0 1-1.056.144Zm-4.351-6.992v-1.6h5.696v1.6h-5.696Zm11.476 6.992c-.875 0-1.653-.187-2.336-.56a4.307 4.307 0 0 1-1.616-1.568c-.395-.661-.592-1.413-.592-2.256 0-.853.197-1.605.592-2.256a4.186 4.186 0 0 1 1.616-1.552c.683-.373 1.461-.56 2.336-.56.885 0 1.67.187 2.352.56a4.078 4.078 0 0 1 1.616 1.536c.394.65.592 1.408.592 2.272 0 .843-.198 1.595-.592 2.256a4.158 4.158 0 0 1-1.616 1.568c-.683.373-1.467.56-2.352.56Zm0-1.712c.49 0 .928-.107 1.312-.32.384-.213.683-.523.896-.928.224-.405.336-.88.336-1.424 0-.555-.112-1.03-.336-1.424a2.213 2.213 0 0 0-.896-.928 2.623 2.623 0 0 0-1.296-.32c-.49 0-.928.107-1.312.32a2.348 2.348 0 0 0-.896.928c-.224.395-.336.87-.336 1.424 0 .544.112 1.019.336 1.424.224.405.522.715.896.928.384.213.816.32 1.296.32Zm-1.36-8.112 2.16-2.192h2.352l-2.784 2.192H63.3ZM71.132 104v-8.544h1.904v2.352l-.224-.688a2.712 2.712 0 0 1 1.2-1.312c.555-.299 1.243-.448 2.064-.448v1.904a.993.993 0 0 0-.24-.032 1.577 1.577 0 0 0-.224-.016c-.757 0-1.36.224-1.808.672-.448.437-.672 1.093-.672 1.968V104h-2Zm6.64 0v-8.544h2V104h-2Zm1.009-9.952c-.373 0-.683-.117-.928-.352a1.156 1.156 0 0 1-.352-.848c0-.341.117-.624.352-.848.245-.235.555-.352.928-.352s.677.112.912.336c.245.213.368.485.368.816 0 .352-.117.65-.352.896-.235.235-.544.352-.928.352ZM87.66 104v-1.728l-.111-.368V98.88c0-.587-.176-1.04-.528-1.36-.352-.33-.885-.496-1.6-.496-.48 0-.955.075-1.424.224-.459.15-.848.357-1.168.624l-.784-1.456a4.645 4.645 0 0 1 1.632-.784 7.244 7.244 0 0 1 1.984-.272c1.237 0 2.192.299 2.864.896.683.587 1.024 1.499 1.024 2.736V104h-1.888Zm-2.687.112c-.64 0-1.2-.107-1.68-.32-.48-.224-.853-.528-1.12-.912a2.388 2.388 0 0 1-.384-1.328c0-.48.112-.912.336-1.296.235-.384.613-.688 1.136-.912.523-.224 1.216-.336 2.08-.336h2.48v1.328h-2.336c-.683 0-1.141.112-1.376.336-.235.213-.352.48-.352.8 0 .363.144.651.432.864.288.213.688.32 1.2.32.49 0 .928-.112 1.312-.336.395-.224.677-.555.848-.992l.336 1.2c-.192.501-.539.891-1.04 1.168-.49.277-1.115.416-1.872.416Z"
    />
  </Svg>
)
export default SvgHistoryCard
