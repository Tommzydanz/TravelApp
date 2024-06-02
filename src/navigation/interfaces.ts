import {NavigatorScreenParams} from '@react-navigation/native';
import {bestDestinationProp} from '../screens/Home/Home';

export type ITravelTabsParamList = {
  Home: {isBookmarked?: boolean};
  Calendar: undefined;
  Search: undefined;
  Messages: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  HomeScreen: {isBookmarked?: boolean};
  Details: {data: bestDestinationProp};
};
