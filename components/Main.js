import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Left,
  Text,
} from 'native-base';
import React from 'react';
import {StyleSheet, Image, View, ScrollView} from 'react-native';
import img1 from '../assets/1.jpg';
import { HorizontalCategoryList } from '../container/HorizontalCategoryList';
import {HorizontalSongList} from '../container/HorizontalSongList';
import pop from '../assets/genre/pop.jpg';
import rock from '../assets/genre/rock.jpg';
import electronic from '../assets/genre/electronic.jpg';
import classical from '../assets/genre/classical.jpg';

export function Main(props) {
  const trending = [
    {songTitle: 'Title', source: img1},
    {songTitle: 'Title', source: img1},
    {songTitle: 'Title', source: img1},
    {songTitle: 'Title', source: img1},
    {songTitle: 'Title', source: img1},
  ];
  const category = [
    {categoryTitle: 'Pop',source: pop},
    {categoryTitle: 'Rock',source: rock},
    {categoryTitle: 'Electronic',source: electronic},
    {categoryTitle: 'Classical',source: classical},
  ]
  return (
    <Content >
      <HorizontalSongList title="Trending" songList={trending}/>
      <HorizontalCategoryList title="Genre" categoryList= {category} />
      <HorizontalSongList title="Latest" songList={trending}/>
    </Content>
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
