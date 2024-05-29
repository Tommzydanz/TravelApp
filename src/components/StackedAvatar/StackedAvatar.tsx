// StackedAvatar.tsx
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {StackedAvatarProps} from './interface';

const StackedAvatar: StackedAvatarProps = function StackedAvatar({
  avatars,
  size = 50,
  overlap = 10,
}) {
  return (
    <View style={styles.container}>
      {avatars.map((avatar, index) => (
        <Image
          key={index}
          source={avatar?.image}
          style={[
            styles.avatar,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              marginLeft: index === 0 ? 0 : -overlap,
            },
          ]}
        />
      ))}
      {avatars.length > 2 && (
        <View
          style={[
            styles.extraAvatar,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              marginLeft: -overlap,
            },
          ]}>
          <Text style={styles.extraText}>+{avatars.length + 3}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderColor: 'white',
    borderWidth: 2,
  },
  extraAvatar: {
    backgroundColor: '#b7b3b3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  extraText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StackedAvatar;
