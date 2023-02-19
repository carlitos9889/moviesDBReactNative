import axios from 'axios';
import {useEffect, useState} from 'react';
import {Movie, RespAPI} from '../interfaces/respApi';

type MovieStateInitial = {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
  isLoading: boolean;
  failure: boolean;
};

const useMovies = () => {
  const [movies, setmovies] = useState<MovieStateInitial>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
    isLoading: true,
    failure: false,
  });

  const fecthGetMoviesNowPlaying = async () => {
    const instance = axios.create({
      baseURL: 'https://api.themoviedb.org/3/movie',
      params: {
        api_key: '99332a11f952aa0293b94e9b4b81d15f',
        language: 'en-US',
      },
    });
    const nowPlayingPromise = instance.get<RespAPI>('/now_playing');
    const popularPromise = instance.get<RespAPI>('/popular');
    const topRatedPromise = instance.get<RespAPI>('/top_rated');
    const upComingPromise = instance.get<RespAPI>('/upcoming');
    try {
      const resp = await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upComingPromise,
      ]);
      setmovies({
        ...movies,
        nowPlaying: resp[0].data.results,
        popular: resp[1].data.results,
        topRated: resp[2].data.results,
        upComing: resp[3].data.results,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      setmovies({
        ...movies,
        failure: true,
      });
    }
  };

  useEffect(() => {
    fecthGetMoviesNowPlaying();
  });

  return {
    ...movies,
  };
};

export default useMovies;
