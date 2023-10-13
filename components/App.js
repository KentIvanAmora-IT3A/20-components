import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();
import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';
import Screen3 from './screen/Screen3';
import { Appbar } from 'react-native-paper';
export default function App() {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  return (
    
    <SafeAreaProvider>
      <NavigationContainer>
      <Appbar.Header>
      <Appbar.Action icon="menu" onPress={_goBack} />
      <Appbar.Content title="React Native" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
        <Tab.Navigator  screenOptions={{
    tabBarLabelStyle: { fontSize: 12 , fontWeight: 'bold'},
    tabBarStyle: { backgroundColor: '#fffbff' },
    tabBarItemStyleFocused: { borderColor: 'green', borderWidth: 2 },
  }}>
          <Tab.Screen name="Page 1" component={Screen1} />
          <Tab.Screen name="Page 2" component={Screen2} />
          <Tab.Screen name="Page 3" component={Screen3} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
