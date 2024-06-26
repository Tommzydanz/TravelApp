import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ITravelTabsParamList} from './interfaces';
import Calendar from '../screens/Calendar/Calendar';
import Search from '../screens/Search/Search';
import Messages from '../screens/Messages/Messages';
import Profile from '../screens/Profile/Profile';
import Home from '../screens/Home/Home';

const TravelTabs = function TravelTabs() {
  const Tab = createBottomTabNavigator<ITravelTabsParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0073ff',
        tabBarStyle: {
          backgroundColor: '#f7f7f7ff',
          position: 'absolute',
          paddingTop: 20,
          paddingHorizontal: 10,
          borderCurve: 'continuous',
          borderTopLeftRadius: 80, //add border top left radius
          borderTopRightRadius: 80,
          shadowOpacity: 0.7,
          shadowOffset: {width: 0, height: 5},
          elevation: 3,
          height: 90,
          overflow: 'hidden',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Poppins_400Regular',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          tabBarItemStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
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
            height: 50,
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
            height: 50,
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
            height: 50,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TravelTabs;

const styles = StyleSheet.create({});
