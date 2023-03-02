
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
  interpolate,
} from "react-native-reanimated";

export const HeartRateSvgAnimateComponent = ({ delay, duration }) => {
  const ring = useSharedValue(0.6);

  const ringStyle = useAnimatedStyle(() => {
    return {
      opacity: 1 - ring.value,
      transform: [
        {
          scale: interpolate(ring.value, [0, 1], [0, 6]),
        },
      ],
    };
  });
  useEffect(() => {
    ring.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: duration,
        }),
        -1,
        false
      )
    );
  }, []);
  return <Animated.View style={[styles.ring, ringStyle]} />;
};

const styles = StyleSheet.create({
  ring: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f48327",
  },
});