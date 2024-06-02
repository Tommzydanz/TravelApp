import React from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import {IBestDestinationCardProps} from './interface';
import {useIsFocused} from '@react-navigation/native';
import StackedAvatar from '../StackedAvatar/StackedAvatar';

const avatars = [
  {image: require('../../../assets/images/avatar1.jpg')},
  {image: require('../../../assets/images/avatar2.jpg')},
  {image: require('../../../assets/images/avatar3.jpg')},
];

const BestDestinationCard: IBestDestinationCardProps =
  function BestDestinationCard({
    destImage,
    destName,
    destLocation,
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
                  styles.cardContainer,
                  {backgroundColor: '#D0D5DD'},
                ]
              : [styles.cardContainer, {backgroundColor: '#ffffff'}]
          }
          android_ripple={{color: '#ffffff'}}>
          <View>
            <Image source={destImage} style={styles.destImage} />
            <Ionicons
              name={isFocused ? 'bookmark-outline' : 'bookmark'}
              color={'#ffffff'}
              size={14}
              style={styles.bookmark}
            />
          </View>
          <View style={styles.destRateContainer}>
            <Text style={styles.destName} numberOfLines={1}>
              {destName}
            </Text>
            <View style={styles.ratingContainer}>
              <Ionicons
                name="star"
                color={'#ffff00'}
                size={18}
                style={{alignSelf: 'center', bottom: 3}}
              />
              <Text style={styles.rating}>{rating}</Text>
            </View>
          </View>
          <View style={styles.locationAndVisitorsContainer}>
            <EvilIcons name="location" size={24} color="#929292" />
            <Text
              style={{
                color: 'gray',
                fontFamily: 'Poppins_400Regular',
              }}>
              {destLocation}
            </Text>
            <StackedAvatar avatars={avatars} size={24} overlap={10} />
          </View>
        </Pressable>
      </View>
    );
  };

export default BestDestinationCard;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 16,
    marginHorizontal: 5,
  },
  pressed: {
    opacity: 0.75,
  },
  cardContainer: {
    padding: 12,
    borderRadius: 20,
    width: 250,
    height: 340,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    overflow: 'hidden',
  },
  destImage: {
    width: 220,
    height: 230,
    borderRadius: 20,
    alignItems: 'center',
  },
  bookmark: {
    position: 'absolute',
    top: 15,
    right: 14,
    borderRadius: 7,
    overflow: 'hidden',
  },
  destName: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    flex: 1,
    marginLeft: 5,
    marginRight: 20,
  },
  destRateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  rating: {
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 5,
    fontFamily: 'Poppins_400Regular',
  },
  locationAndVisitorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
