import {NavigatorScreenParams} from '@react-navigation/native';

export type ITravelStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Calendar: undefined;
  Search: undefined;
  Messages: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  HomeStack: undefined;
  Details: undefined;
};
