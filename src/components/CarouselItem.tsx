import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Movie} from '../interfaces/respApi';

type Props = {
  movie: Movie;
};

const CarouselItem = ({movie}: Props): JSX.Element => {
  return (
    <View style={style.containerPoster}>
      <Image
        style={style.poster}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  containerPoster: {
    flex: 1,
    paddingBottom: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  poster: {
    flex: 1,
    borderRadius: 20,
  },
});

export default CarouselItem;
