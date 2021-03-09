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
import {StyleSheet, FlatList, View} from 'react-native';

import {Songcard} from '../components/songCard';

export function HorizontalSongList(props) {
  const {title, songList} = props;
  return (
    <View style={styles.horizontalSongListContainer} >
      <Text style={styles.header}>{title}</Text>
      <FlatList
        horizontal
        data={songList}
        renderItem={({item}) => (
          <Songcard  songTitle={item.songTitle} imgSrc={item.source} />
        )}
         keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalSongListContainer:{
    marginBottom: 5
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
    paddingLeft:5
  },
  CardContainer: {
    flexDirection: 'row',
  },
});
