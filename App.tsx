import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button, Text } from '@ui-kitten/components';
import { default as theme } from './theme.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListHeartScreen } from './src/views/ListHeartScreen/ListHeartScreen';

const InitScreen = ({navigation}) => (
  <>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>InitScreen</Text>
        <Button
          onPress={() =>
            navigation.navigate('ListHeartRate')
          }
      />
    </View>
  </>
);


function DetailHeartRateScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DetailHeartRateScreen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="InitScreen">
        <Stack.Screen name="InitScreen" component={InitScreen} />
        <Stack.Screen name="ListHeartRate" component={ListHeartScreen} />
        <Stack.Screen name="Details" component={DetailHeartRateScreen} />
      </Stack.Navigator>
     </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
