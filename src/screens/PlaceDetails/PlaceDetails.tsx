import React, {useCallback, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Pressable,
  FlatList,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import {Ionicons} from '@expo/vector-icons';
import {IPlaceDetailsProps} from './interface';
import Button from '../../components/Button/Button';
import {PageIndicator} from 'react-native-page-indicator';

const {width, height} = Dimensions.get('window');

function shuffleArray(array: string[]) {
  const shuffledArray = array.slice(1);
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return [array[0], ...shuffledArray];
}

const PlaceDetails: IPlaceDetailsProps = function PlaceDetails({
  route,
  navigation,
}) {
  const {data} = route.params || {};
  const [selectedPage, setSelectedPage] = React.useState(0);
  const pagerRef = useRef<PagerView>(null);
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [shuffledImages, setShuffledImages] = React.useState<string[]>([]);

  const onPageSelected = useCallback((e: any) => {
    setSelectedPage(e.nativeEvent.position);
  }, []);

  const images = [
    // Add image URLs or local paths here
    data.destImage,
    require('../../../assets/images/destinations/place2.jpg'),
    require('../../../assets/images/destinations/place3.jpg'),
    require('../../../assets/images/destinations/place4.jpg'),
    require('../../../assets/images/destinations/place5.jpg'),
  ];

  useEffect(() => {
    setShuffledImages(shuffleArray(images));
  }, []);

  const handleBackPress = useCallback(() => {
    navigation.navigate('HomeScreen', {isBookmarked});
  }, [isBookmarked, navigation]);

  const handleBookmarkPress = () => {
    setIsBookmarked(prev => !prev);
    // Optionally, pass the bookmark state back to the home screen
  };

  const handleThumbnailPress = useCallback((index: number) => {
    setSelectedPage(index);
    pagerRef.current?.setPage(index);
  }, []);

  // Images thumbnail
  const renderThumbnail = ({
    item,
    index,
  }: {
    item: ImageSourcePropType;
    index: number;
  }) => (
    <TouchableOpacity onPress={() => handleThumbnailPress(index)}>
      <Image
        source={item}
        style={[
          styles.thumbnail,
          {borderColor: selectedPage === index ? 'orange' : 'transparent'},
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pagerContainer}>
        <PagerView
          ref={pagerRef}
          style={styles.pagerView}
          initialPage={0}
          onPageSelected={onPageSelected}>
          {shuffledImages.map((image, index) => (
            <View key={index} style={styles.page}>
              <Image source={image} style={styles.image} />
              <View style={styles.header}>
                <Pressable
                  onPress={handleBackPress}
                  style={styles.headerButton}>
                  <Ionicons name="chevron-back" size={16} color="white" />
                </Pressable>
                <Text style={{fontFamily: 'Poppins_700Bold', color: 'white'}}>
                  Details
                </Text>
                <Pressable
                  style={styles.headerButton}
                  onPress={handleBookmarkPress}>
                  <Ionicons
                    name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
                    size={24}
                    color="white"
                  />
                </Pressable>
              </View>
              <View style={styles.pageIndicator}>
                <PageIndicator
                  count={images.length}
                  key={'hor'}
                  current={selectedPage}
                  variant={'morse'}
                  color="white"
                  dashSize={30}
                />
              </View>
            </View>
          ))}
        </PagerView>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.dash} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 16,
          }}>
          <View>
            <Text style={styles.title}>{data.destName}</Text>
            <Text style={styles.location}>{data.destLocation}</Text>
          </View>
          <Image
            source={{
              uri: 'https://mighty.tools/mockmind-api/content/human/44.jpg',
            }}
            style={styles.instructor}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 16,
          }}>
          <View style={styles.locationContainer}>
            <EvilIcons
              name="location"
              size={24}
              color="#929292"
              style={{alignSelf: 'flex-start'}}
            />
            <Text
              style={{
                color: 'gray',
                marginRight: 10,
                fontFamily: 'Poppins_400Regular',
              }}>
              {data.destLocation.split(' ')[0]}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <Ionicons
              name="star"
              color={'#ffff00'}
              size={18}
              style={{alignSelf: 'flex-start'}}
            />
            <Text style={styles.rating}>
              {data.rating} <Text style={styles.ratingCount}>(2045)</Text>{' '}
            </Text>
          </View>
          <Text style={styles.price}>
            $59/
            <Text style={{color: 'gray'}}>Person</Text>
          </Text>
        </View>
        <FlatList
          data={shuffledImages}
          renderItem={renderThumbnail}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          style={styles.thumbnailList}
          contentContainerStyle={styles.thumbnailContainer}
        />
        <Text style={styles.aboutTitle}>About Destination</Text>
        <Text style={styles.aboutText}>
          You will get a complete travel package on the beaches. Packages in the
          form of airline tickets, recommended Hotel rooms, Transportation, Have
          you ever been on holiday to the Greek ETC.{' '}
          <Text style={{color: 'orange'}}>Read More</Text>
        </Text>
        <Button style={styles.button}>Book Now</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  pagerContainer: {
    width: '100%',
    height: height * 0.4, // Adjust the height to leave space for the details container
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 40,
    backgroundColor: 'transparent',
  },
  headerTitle: {
    fontFamily: 'Poppins_700Bold',
    color: 'white',
    fontSize: 18,
  },
  headerButton: {
    padding: 8,
  },
  bookmarkContainer: {
    backgroundColor: 'transparent',
  },
  pagerView: {
    width: '100%',
    height: 400,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
  },
  dash: {
    width: 40,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#e3e3e3',
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  detailsContainer: {
    // Adjust to position the details container above the image
    flex: 1,
    top: -10,
    position: 'relative',
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    elevation: 2, // For Android shadow
    shadowColor: '#ffffff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
  },
  location: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: 'gray',
  },
  instructor: {width: 40, height: 40, borderRadius: 40, right: 8},
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  rating: {
    fontSize: 15,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000000',
  },
  ratingCount: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: 'gray',
  },
  price: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: 'green',
    marginVertical: 8,
  },
  aboutTitle: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',
    marginVertical: 8,
  },
  aboutText: {
    fontSize: 12,
    lineHeight: 22,
    textAlign: 'left',
    color: '##978b8b',
    fontFamily: 'Poppins_400Regular',
    marginVertical: 8,
  },
  pageIndicator: {
    left: 20,
    right: 20,
    bottom: 140,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnailList: {
    flex: 1,
    marginTop: 10,
  },
  thumbnailContainer: {
    backgroundColor: 'white',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 5,
    borderWidth: 3,
  },
  button: {
    zIndex: 10,
    paddingBottom: 100,
  },
});
export default PlaceDetails;
