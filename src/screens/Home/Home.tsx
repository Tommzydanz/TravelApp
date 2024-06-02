import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {IHomeProps} from './interface';
import BestDestinationCard from '../../components/BestDestinationCard/BestDestinationCard';
import PopularPlaceItem from '../../components/PopularPlacesItem/PopularPlacesItem';

export type bestDestinationProp = {
  id: string;
  destImage: string;
  destName: string;
  destLocation: string;
  rating: number;
};

const bestDestination: bestDestinationProp[] = [
  {
    id: '1',
    destImage: require('../../../assets/images/destinations/place1.jpg'),
    destName: 'Bali shore',
    destLocation: 'Tekergat, Sunamgnji',
    rating: 4.7,
  },
  {
    id: '2',
    destImage: require('../../../assets/images/destinations/place2.jpg'),
    destName: 'Niladri Reservoir',
    destLocation: 'Tekergat, Sunamgnji',
    rating: 4.5,
  },
  {
    id: '3',
    destImage: require('../../../assets/images/destinations/place3.jpg'),
    destName: 'Casa las Tritugas',
    destLocation: 'Av Domero, Mexico',
    rating: 4.2,
  },
  {
    id: '4',
    destImage: require('../../../assets/images/destinations/place4.jpg'),
    destName: 'Aonasng Villa Resort',
    destLocation: 'Bastola, Islampur',
    rating: 4.3,
  },
  {
    id: '5',
    destImage: require('../../../assets/images/destinations/place5.jpg'),
    destName: 'Ranguati Resort',
    destLocation: 'Sylhet, Airport Road',
    rating: 4.8,
  },
];

//Popular Places
const popularPlaces = [
  {
    id: '1',
    destImage: require('../../../assets/images/destinations/place1.jpg'),
    destName: 'Niladri Reservoir',
    destLocation: 'Tekergat, Sunamgnji',
    amountPerPerson: 459,
    rating: 4.7,
  },
  {
    id: '2',
    destImage: require('../../../assets/images/destinations/place2.jpg'),
    destName: 'Casa las Tritugas',
    destLocation: 'Av Domero, Mexico',
    amountPerPerson: 894,
    rating: 4.5,
  },
  {
    id: '3',
    destImage: require('../../../assets/images/destinations/place3.jpg'),
    destName: 'Aonasng Villa Resort',
    destLocation: 'Bastola, Islampur',
    amountPerPerson: 761,
    rating: 4.2,
  },
  {
    id: '4',
    destImage: require('../../../assets/images/destinations/place4.jpg'),
    destName: 'Ranguati Resort',
    destLocation: 'Sylhet, Airport Road',
    amountPerPerson: 857,
    rating: 4.3,
  },
];

const {width, height} = Dimensions.get('window');

const Home: IHomeProps = function Home({navigation}) {
  const [onViewAll, setViewAll] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const handleIconPress = useCallback(() => {
    console.log('Pressed');
  }, []);

  const onPlaceDetails = useCallback(
    (data: bestDestinationProp) => {
      navigation.navigate('Details', {data: data});
    },
    [navigation],
  );

  const toggleViewAll = useCallback(() => {
    setViewAll(!onViewAll);
    Animated.timing(animation, {
      toValue: onViewAll ? 0 : height, // Animate to height if viewAll is true, else to 0
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [animation, onViewAll]);

  const animatedHeight = animation.interpolate({
    inputRange: [0, height],
    outputRange: [200, height], // Start from a smaller height
  });

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={styles.nameContainer}>
          <Image
            source={require('../../../assets/images/avatar.png')}
            style={styles.profileAvatar}
          />

          <Text style={styles.nameText}>Austin Nicolas</Text>
        </View>
        <Pressable
          style={styles.notificationContainer}
          onPress={handleIconPress}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <View style={styles.badge} />
        </Pressable>
      </View>
      {!onViewAll && (
        <View style={{marginTop: 24}}>
          <Text style={styles.headline}>Explore the</Text>
          <Text style={styles.subHeadline}>
            Beautiful <Text style={{color: 'tomato'}}>World!</Text>
          </Text>
        </View>
      )}
      <Animated.View style={{flex: 1, width: '100%', height: animatedHeight}}>
        {onViewAll ? (
          // Grid View
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 24,
              }}>
              <Text style={styles.subHeadText}>Popular Places</Text>
              <Pressable onPress={toggleViewAll}>
                <Text
                  style={{
                    color: '#0073ff',
                    fontSize: 14,
                    fontFamily: 'Poppins_400Regular',
                  }}>
                  View all
                </Text>
              </Pressable>
            </View>
            <FlatList
              data={popularPlaces}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <PopularPlaceItem
                  placeImage={item.destImage}
                  placeName={item.destName}
                  placeLocation={item.destLocation}
                  rating={item.rating}
                  amountPerPerson={item.amountPerPerson}
                />
              )}
              numColumns={2}
            />
          </View>
        ) : (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.subHeadText}>Best Destination</Text>
              <Pressable onPress={toggleViewAll}>
                <Text
                  style={{
                    color: '#0073ff',
                    fontSize: 14,
                    fontFamily: 'Poppins_400Regular',
                  }}>
                  View all
                </Text>
              </Pressable>
            </View>
            <FlatList
              data={bestDestination}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              renderItem={({item, index}) => (
                <BestDestinationCard
                  destImage={item.destImage}
                  destName={item.destName.trimEnd()}
                  destLocation={item.destLocation}
                  rating={item.rating}
                  onPress={() => {
                    onPlaceDetails(item);
                  }}
                />
              )}
              pagingEnabled={true}
            />
          </>
        )}
      </Animated.View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginTop: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileAvatar: {width: 50, height: 50, borderRadius: 40, zIndex: 1, right: 8},
  nameContainer: {
    width: 170,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#eaeaeaff',
  },
  nameText: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    right: 5,
  },
  notificationContainer: {
    backgroundColor: '#eaeaeaff',
    padding: 10,
    borderRadius: 40,
  },
  badge: {
    position: 'absolute',
    top: 15,
    right: 14,
    backgroundColor: 'tomato',
    borderRadius: 7,
    width: 6,
    height: 6,
    shadowColor: 'white',
    shadowOpacity: 0.3,
    overflow: 'hidden',
  },
  headline: {
    fontSize: 40,
    fontFamily: 'Poppins_400Regular',
  },
  subHeadline: {
    fontSize: 40,
    fontFamily: 'Poppins_700Bold',
  },
  subHeadText: {fontSize: 24, fontFamily: 'Poppins_600SemiBold'},
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  gridImage: {
    width: width / 2 - 20,
    height: 150,
    borderRadius: 10,
  },
  gridText: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
});
