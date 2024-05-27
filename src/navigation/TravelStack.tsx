import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ITravelStackParamList} from './interfaces';
import HomeStack from './HomeStack';
import Calendar from '../screens/Calendar/Calendar';
import Search from '../screens/Search/Search';
import Messages from '../screens/Messages/Messages';
import Profile from '../screens/Profile/Profile';

const TravelStack = function TravelStack() {
  const Tab = createBottomTabNavigator<ITravelStackParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0073ff',
        tabBarStyle: {
          backgroundColor: '#efefef',
          position: 'absolute',
          paddingTop: 16,
          borderTopLeftRadius: 100,
          borderTopRightRadius: 100,
          shadowOpacity: 0.1,
          shadowOffset: {width: 0, height: 7},
          elevation: 5,
          height: 122, //add border top left radius
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          header: () => null,
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          tabBarItemStyle: {
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
          },
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          header: () => null,
          tabBarIcon: ({color}) => (
            <AntDesign name="calendar" size={24} color={color} />
          ),
          tabBarItemStyle: {
            borderRadius: 8,
            width: '70%',
            height: 60,
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          header: () => null,
          title: '',
          tabBarIcon: ({color}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 56,
                width: 56,
                borderRadius: 999,
                backgroundColor: '#0073ff',
              }}>
              <AntDesign name="search1" size={24} color={'white'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          header: () => null,
          tabBarIcon: ({color}) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
          tabBarItemStyle: {
            borderRadius: 8,
            width: '20%',
            height: 60,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          header: () => null,
          tabBarIcon: ({color}) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
          tabBarItemStyle: {
            borderRadius: 8,
            width: '20%',
            height: 60,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TravelStack;

const styles = StyleSheet.create({});
