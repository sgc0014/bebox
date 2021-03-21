import {
  Text,
} from 'native-base';
import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import {Songcard} from './songCard';

export function SongList(props) {
  const {title, songList,navigation,isHorizontal} = props;
  return (
    <View style={styles.horizontalSongListContainer} >
      <Text style={styles.header}>{title}</Text>
      <FlatList
      horizontal={isHorizontal && isHorizontal}
        data={songList}
        renderItem={({item}) => (
          <Songcard altCard={true}  songTitle={item.songTitle} navigation={navigation} imgSrc={item.source} />
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
