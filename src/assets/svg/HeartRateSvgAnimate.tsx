



import * as React from "react"
import Svg, { Polyline } from 'react-native-svg';

const HeartRateSvgAnimate = (props) => (
 <Svg 
   x="0px" 
   y="0px" width="240px" height="120px" viewBox="0 0 150 73">
    <Polyline fill="none" stroke={props.color} strokeWidth={2} strokeMiterlimit={10} points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486" />
 </Svg>
)

export default HeartRateSvgAnimate
