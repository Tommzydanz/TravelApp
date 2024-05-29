import React from 'react';
import {ImageSourcePropType, StyleProp, TextProps} from 'react-native';

export type IBestDestinationCardProps = React.FC<
  StyleProp<any> &
    TextProps & {
      destImage: ImageSourcePropType;
      destName: string;
      destLocation: string;
      rating: number;
      onPress: () => void;
    }
>;
