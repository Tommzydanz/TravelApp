import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeStackParamList} from './interfaces';
import PlaceDetails from '../screens/PlaceDetails/PlaceDetails';
import Home from '../screens/Home/Home';
import TravelTabs from './TravelTabs';

const HomeStack = function HomeStack() {
  const Stack = createNativeStackNavigator<HomeStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={TravelTabs} />
      <Stack.Screen name="Details" component={PlaceDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
