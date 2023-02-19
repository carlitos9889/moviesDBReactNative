import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import CarouselItem from '../components/CarouselItem';
import useMovies from '../hooks/useMovies';

const {width, height} = Dimensions.get('screen');

const HomeScreen = (): JSX.Element => {
  const {top} = useSafeAreaInsets();

  const {isLoading, nowPlaying} = useMovies();

  if (isLoading) {
    return (
      <View style={style.conatinerLoading}>
        <ActivityIndicator size={20} />
      </View>
    );
  }

  return (
    <ScrollView>
      {/* Carousel */}
      <View style={{...style.containerCarousel, marginTop: top + 20}}>
        <Carousel
          data={nowPlaying}
          renderItem={({item}) => <CarouselItem movie={item} />}
          sliderWidth={width}
          itemWidth={350}
        />
      </View>
      {/* Popular */}
      <Text>HomeScreen</Text>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  conatinerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  containerCarousel: {
    height: height * 0.5,
  },
});

export default HomeScreen;
