import React, {useCallback} from 'react';
import {View, Text, StyleSheet, Image, Pressable, FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {IHomeProps} from './interface';
import BestDestinationCard from '../../components/BestDestinationCard/BestDestinationCard';

const bestDestination = [
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
    destName: 'Aonang Villa Resort',
    destLocation: 'Tekergat, Sunamgnji',
    rating: 4.3,
  },
  {
    id: '5',
    destImage: require('../../../assets/images/destinations/place5.jpg'),
    destName: 'Rangauti Resort',
    destLocation: 'Sylhet, Airport Road',
    rating: 4.5,
  },
];

const Home: IHomeProps = function Home() {
  const handleIconPress = useCallback(() => {
    console.log('Pressed');
  }, []);

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
      <View style={{marginTop: 24}}>
        <Text style={styles.headline}>Explore the</Text>
        <Text style={styles.subHeadline}>
          Beautiful <Text style={{color: 'tomato'}}>World!</Text>
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 24,
        }}>
        <Text style={{fontSize: 24}}>Best Destination</Text>
        <Text style={{color: '#0073ff', fontSize: 18}}>View all</Text>
      </View>
      <FlatList
        data={bestDestination}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <BestDestinationCard
            destImage={item.destImage}
            destName={item.destName.trimEnd()}
            destLocation={item.destLocation}
            rating={item.rating}
          />
        )}
        pagingEnabled={true}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
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
    fontWeight: '500',
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
    fontSize: 45,
  },
  subHeadline: {
    fontSize: 45,
    fontWeight: 'bold',
  },
});
