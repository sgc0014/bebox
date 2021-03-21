import {Text} from 'native-base';
import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {SearchSongCard} from './SearchSongCard';

export function SearchSongList(props) {
  const {title, songList, navigation, isHorizontal} = props;
  return (
    <View style={styles.horizontalSongListContainer}>
      <Text style={styles.header}>
        Showing result for <Text style={styles.SearchTerm}>'{title}'</Text>
      </Text>
      <FlatList
        horizontal={isHorizontal && isHorizontal}
        data={songList}
        renderItem={({item}) => (
          <SearchSongCard
            songTitle={item.songTitle}
            navigation={navigation}
            imgSrc={item.source}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalSongListContainer: {
    marginBottom: 5,
  },
  header: {
    paddingLeft: 5,
    marginBottom: 10,
  },
  SearchTerm: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
  },
  CardContainer: {
    flexDirection: 'row',
  },
});
