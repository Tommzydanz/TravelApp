import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  HomeStackParamList,
  ITravelTabsParamList,
} from '../../navigation/interfaces';

export type IHomeProps = React.FC<
  NativeStackScreenProps<HomeStackParamList, 'HomeScreen'> & {}
>;
