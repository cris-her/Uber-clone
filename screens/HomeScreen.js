//rnfes
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch();

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
        <GooglePlacesAutocomplete
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            placeholder="Where from?"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              // console.log(data, details);
              dispatch(
                setOrigin({
                  location: details.geometry.location,
                  description: data.description,
                })
              );

              dispatch(setDestination(null));
            }}
            styles={{
                container: {
                    flex: 0,
                },
                textInput: {
                    fontSize: 18,
                },
            }}
            minLength={2}
            query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'en',
            }}
            fetchDetails = {true}
            returnKeyType={"search"}
            enablePoweredByContainer={false}
        />

        <NavOptions/>
        <NavFavourites/>
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