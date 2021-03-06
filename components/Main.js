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
import {HorizontalSongList} from '../container/HorizontalSongList';

export function Main(props) {
  const trending = [
    {songTitle: 'Title', source: img1},
    {songTitle: 'Title', source: img1},
    {songTitle: 'Title', source: img1},
    {songTitle: 'Title', source: img1},
    {songTitle: 'Title', source: img1},
  ];
  return (
    <Content >
      <HorizontalSongList title="Trending" songList={trending}/>
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
