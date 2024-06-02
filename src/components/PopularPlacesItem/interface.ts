import React from 'react';
import {ImageSourcePropType, StyleProp, TextProps} from 'react-native';

export type IPopularPlaceItemProps = React.FC<
  StyleProp<any> &
    TextProps & {
      placeImage: ImageSourcePropType;
      placeName: string;
      placeLocation: string;
      amountPerPerson: number;
      rating: number;
      onPress: () => void;
    }
>;
