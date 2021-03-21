import {Content} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import img1 from '../assets/1.jpg';
import pop from '../assets/genre/pop.jpg';
import rock from '../assets/genre/rock.jpg';
import electronic from '../assets/genre/electronic.jpg';
import classical from '../assets/genre/classical.jpg';
import {SongList} from '../components/SongList';
import {SearchSongList} from '../components/SearchSongList';
import Layout from '../components/Layout';

export function SearchListScreen({navigation}) {
  const trending = [
    {songTitle: 'Title', source: img1},
    {songTitle: 'Title', source: img1},
    {songTitle: 'Title', source: img1},
    {songTitle: 'Title', source: img1},
    {songTitle: 'Title', source: img1},
  ];
  const category = [
    {categoryTitle: 'Pop', source: pop},
    {categoryTitle: 'Rock', source: rock},
    {categoryTitle: 'Electronic', source: electronic},
    {categoryTitle: 'Classical', source: classical},
  ];
  return (
    <Layout>
     
        <SearchSongList
          title="Trending"
          navigation={navigation}
          songList={trending}
        />

    </Layout>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: '700',
  },
  CardContainer: {
    flexDirection: 'row',
  },
  card: {
    width: 210,
    height: 168,
  },

  img: {
    resizeMode: 'cover',
    width: '100%',
    height: 118,
  },
});
