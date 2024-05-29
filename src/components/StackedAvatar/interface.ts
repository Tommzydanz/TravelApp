import React from 'react';
import {ImageSourcePropType, StyleProp} from 'react-native';

type AvatarProps = {
  image: ImageSourcePropType;
};
export type StackedAvatarProps = React.FC<
  StyleProp<any> & {
    avatars: AvatarProps[];
    size?: number;
    overlap?: number;
  }
>;
