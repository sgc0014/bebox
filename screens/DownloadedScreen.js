import {Card, CardItem, List, ListItem, Right} from 'native-base';
import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  PermissionsAndroid,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Layout from '../components/Layout';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {SongContext} from '../context/songContext';

export function DownloadedScreen({navigation}) {
  const {SongList, getMusicFromPhone, trackPlay} = useContext(SongContext);
  useEffect(() => {
  
    getMusicFromPhone();
 
  }, []);

  return (
    <Layout>
      <List style={styles.SongListContainer}>{console.log(SongList)}
        <FlatList
          data={SongList}
          renderItem={({item}) => (
            <DownloadedSong style={styles.song} song={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </List>
    </Layout>
  );
}
const DownloadedSong = ({song, navigation}) => {
  const formatName = (word) => {
    const arr = word.slice(0, 30);

    return arr;
  };
  return (
    <ListItem
      style={styles.SongContainer}
      button
      onPress={() => {
        navigation.navigate('Song', {
          id: song.id,
        });
      }}>
      <View style={styles.SongTitle}>
        <View style={styles.songIcon}>
          <AntIcon size={25} color="#fff" name="pausecircle" />
          {/* <EntIcon size={25} color="#fff" name="play"/> */}
        </View>
        <Text>
          {formatName(song.filename)}
          {song.filename.length > 30 ? '...' : ''}
        </Text>
      </View>
      <FeatherIcon name="more-vertical" />
    </ListItem>
  );
};

const styles = StyleSheet.create({
  SongListContainer: {
    flex: 1,
  },
  SongContainer: {
    justifyContent: 'space-between',
  },
  SongTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songIcon: {
    borderRadius: 400,
    width: 50,
    height: 50,
    backgroundColor: '#7E36FB',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    marginRight: 5,
  },
  song: {
    flex: 1,
  },
});
