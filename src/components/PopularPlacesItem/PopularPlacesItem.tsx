import React from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import {useIsFocused} from '@react-navigation/native';
import StackedAvatar from '../StackedAvatar/StackedAvatar';
import {IPopularPlaceItemProps} from './interface';

const PopularPlaceItem: IPopularPlaceItemProps = function PlaceItem({
  placeName,
  placeLocation,
  placeImage,
  amountPerPerson,
  rating,
  onPress,
}) {
  const isFocused = useIsFocused();

  return (
    <View style={styles.rootContainer}>
      <Pressable
        onPress={onPress}
        style={({pressed}) =>
          pressed
            ? [
                styles.pressed,
                styles.itemContainer,
                {backgroundColor: 'transparent'},
              ]
            : [styles.itemContainer, {backgroundColor: '#ffffff'}]
        }
        android_ripple={{color: '#ffffff'}}>
        <View>
          <Image source={placeImage} style={styles.placeImage} />
          <Ionicons
            name={isFocused ? 'heart-outline' : 'heart'}
            color={'#ffffff'}
            size={16}
            style={styles.favorite}
          />
        </View>
        <Text style={styles.placeName}>{placeName}</Text>
        <View style={styles.locationContainer}>
          <EvilIcons name="location" size={24} color="#929292" />
          <Text
            style={{
              color: 'gray',
              marginRight: 10,
              fontSize: 12,
              fontFamily: 'Poppins_400Regular',
            }}>
            {placeLocation}
          </Text>
        </View>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" color={'#ffff00'} size={16} />
          <Ionicons name="star" color={'#ffff00'} size={16} />
          <Ionicons name="star" color={'#ffff00'} size={16} />
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <Text
          style={{
            fontWeight: '500',
            color: '#0073ff',
            fontFamily: 'Poppins_400Regular',
          }}>
          {'$' + amountPerPerson + '/'}
          <Text style={{color: 'gray'}}>Person</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default PopularPlaceItem;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 16,
    marginBottom: 2,
    marginRight: 16,
  },
  pressed: {
    opacity: 0.75,
  },
  itemContainer: {
    padding: 12,
    borderRadius: 20,
    width: 170,
    height: 240,
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#FFFFFF',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
  placeImage: {
    width: 150,
    height: 130,
    borderRadius: 20,
    alignItems: 'center',
  },
  favorite: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#0000002c',
    borderRadius: 20,
    padding: 4,
    overflow: 'hidden',
  },
  placeName: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    flex: 1,
    marginLeft: 5,
    marginRight: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rating: {
    fontSize: 14,
    marginLeft: 5,
    fontFamily: 'Poppins_400Regular',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
