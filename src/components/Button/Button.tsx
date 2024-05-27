import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {IButtonProps} from './interfaces';

const Button: IButtonProps = function Button({children, onPress, style}) {
  return (
    <View style={[styles.rootContainer, style]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) =>
          pressed
            ? [
                styles.pressed,
                styles.buttonContainer,
                {backgroundColor: '#D0D5DD'},
              ]
            : [styles.buttonContainer, {backgroundColor: '#'}]
        }
        android_ripple={{color: '#83ff83'}}>
        <Text style={[styles.buttonText, {color: '#FFFFFF'}]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    borderRadius: 10,
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    textAlign: 'center',
    alignSelf: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
