import { View } from "react-native";
import { Card, Layout, List, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import data from "../../data/data.json"
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Easing,
  withTiming,
  withSequence,
  withRepeat,
  withDelay,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import HeartRateSvgAnimate from "../../assets/svg/HeartRateSvgAnimate";
import { useEffect, useState } from "react";

export const HeartRateSvgAnimateComponent = (props) => {
  const offsetBlockLeft = useSharedValue(-500);
  const offsetBlockRight = useSharedValue(0);
  const opacity = useSharedValue(1);
  const animation = useSharedValue(0);
  const [pulse, setPulse] = useState(Number(props.item.fcm));

  //  useEffect(() => {
  //   setPulse(Number(props.item.fcm))
  // }, []);

  //  const blockLeftSpringStyles = useAnimatedStyle(() => {
  //  return {
  //   opacity: withSpring(opacity.value),
  //   transform: [
  //     {
  //       translateX: withSpring(offsetBlockLeft.value)
  //     }
  //   ],
  // };
  // });
  
  // offsetBlockLeft.value = withTiming(0, { 
  //   duration: (60 / Number(props.item.fcm)) * 1000  , 
  //   easing: Easing.linear })

  //  const blockRightSpringStyles = useAnimatedStyle(() => {
  //  return {
  //   opacity: withSpring(0),
  //   transform: [
  //     {
  //       translateX: withSpring(offsetBlockRight.value)
  //     },
  //   ],
  // };
  // });

  // offsetBlockRight.value = withTiming(500, { duration: (60 / Number(props.item.fcm)) * 1000  , easing: Easing.linear })
  const Pulse = ({ delay = 0, repeat }) => {
  const animation = useSharedValue(0);
  
  // (60 / Number(props.item.fcm)) * 1000
  useEffect(() => {
    animation.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 1000,
          easing: Easing.linear,
        }),
        0,
        false
      )
    );
  }, []);
  
  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      animation.value,
      [0, 1],
      [0.8, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity: opacity,
      transform: [{ scale: animation.value }],
    };
  });

  return <Animated.View style={[styles.circle, animatedStyles]} />;
};

 
  
   const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      animation.value,
      [0, 1],
      [0, 0.4],
      Extrapolate.CLAMP
    );
    return {
      opacity: opacity,
      transform: [{ scale: animation.value }],
    };
  });
  console.log("pulse", pulse);
  
  return  (
    <>
      {/* <HeartRateSvgAnimate color="#009B9E"/>
      <Animated.View
        style={[styles.headerContainer_contentTop__blockRight, blockRightSpringStyles]}
      />
      <Animated.View
        style={[styles.headerContainer_contentTop__blockLeft, blockLeftSpringStyles]}
      /> */}

      {/* {pulse.map((item, index) => (
      <Pulse.View
        style={[styles.circle, animatedStyles]}
      />
        ))} */}
        
     {/* {pulse.map((item, index) => ( */}
        <Pulse repeat={0} />
      {/* ))} */}
      
    </>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 8,
    borderRadius: 8,
  },
  headerContainer_content: {
    justifyContent: "space-between",
  },
  headerContainer_contentTop: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  circle: {
    marginTop: 12,
    width: 100,
    borderRadius: 50,
    height: 100,
    borderColor: '#009F9F',
    borderWidth: 2,
    backgroundColor: '#00b4b8',
  },
  innerCircle: {
    width: 50,
    borderRadius: 25,
    height: 50,
    zIndex: 100,
    position: 'absolute',
    backgroundColor: 'white',
  },
  headerContainer_contentTop__blockLeft: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "white"
  },
  headerContainer_contentTop__blockRight: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "white"
  },
  headerContainer_contentBottom: {
      marginTop: 12,
      flexDirection: "row",
      justifyContent: "flex-end",
  },
  headerContainer_title: {
    marginLeft: 0,
    textAlign: "center",
  },
  headerContainer_contentBottom_description: {
    textAlign: "left",
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 16,
    borderRadius: 12,
    display: "flex",
  },
});

