import * as React from "react"
import { View } from "react-native"
import Svg, { Rect, Path } from "react-native-svg"
import SvgMathCard from "../../assets/svg/subjects/SvgMathCard"
import SvgBiologyCard from "../../assets/svg/subjects/SvgBiologyCard"
import SvgHistoryCard from "../../assets/svg/subjects/SvgHistoryCard"
import SvgPhysicsCard from "../../assets/svg/subjects/SvgPhysicsCard"
import SvgPortugueseCard from "../../assets/svg/subjects/SvgPortugueseCard"

export default () => {
    return (
    <View>
        <SvgBiologyCard />
        <SvgHistoryCard />
        <SvgMathCard />
        <SvgPhysicsCard />
        <SvgPortugueseCard />
    </View>
    )
}



