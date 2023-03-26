//rnfes
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-white h-full`]}>
      {/* <Text style={[tw`text-red-500 p-10`]}>HomeScreen</Text> */}
      {/* <Text style={styles.text}>HomeScreen</Text> */}
      <View style={tw`p-5`}>
        <Image 
            style={{
                width: 100, 
                height: 100, 
                resizeMode: 'contain'
            }}
            source={{
                uri:"https://raw.githubusercontent.com/cris-her/Portfolio/master/uber-clone/2560px-Uber_logo_2018.svg.png",
            }} 
        />

        <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    },
})