import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {HomeStackParamList} from '../../navigation/interfaces';

export type IPlaceDetailsProps = React.FC<
  NativeStackScreenProps<HomeStackParamList, 'Details'> & {}
>;
