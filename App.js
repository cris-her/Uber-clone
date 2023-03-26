// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { Provider } from "react-redux";
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    // ctrl + space to import
    <Provider store={store}> 
      <SafeAreaProvider>
        <HomeScreen/>
        {/* <View style={styles.container}>
          <Text>Lets build uber!</Text>
          <StatusBar style="auto" />
        </View> */}
      </SafeAreaProvider>
    </Provider>
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
