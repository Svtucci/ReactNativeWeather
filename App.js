import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForecastList from './components/ForeCastList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor='blue'
        animated
        barStyle={'default'}
        hidden={false}
      />

      <ForecastList />
      
      <NavigationContainer>
        {/* Similar to a Router in React */}
        <Stack.Navigator initialRouteName="Weekly Forecast">
          {/* Similar to Routes in React */}
          <Stack.Screen name="Weekly Forecast" component={ForecastList} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
