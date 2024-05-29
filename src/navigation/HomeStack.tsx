import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeStackParamList} from './interfaces';
import PlaceDetails from '../screens/PlaceDetails/PlaceDetails';
import Home from '../screens/Home/Home';

const HomeStack = function HomeStack() {
  const Stack = createNativeStackNavigator<HomeStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={PlaceDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
