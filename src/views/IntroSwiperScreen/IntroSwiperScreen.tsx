import styled from 'styled-components/native';
import { AppRegistry, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from '@ui-kitten/components';
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export const SwiperScreen = ({navigation}) => {

  const navigationToListScreen = () => {
    navigation.navigate('ListHeartRate')
  }

  return (
    <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <TouchableOpacity style={styles.slide3} onPress={navigationToListScreen}>
        <Text style={styles.text}>And simple</Text>
      </TouchableOpacity>
    </Swiper>
  )
}

const ContainerScreen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

AppRegistry.registerComponent('swiperScreen', () => SwiperScreen)