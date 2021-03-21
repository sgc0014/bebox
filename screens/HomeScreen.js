import {Content} from 'native-base';
import React,{ useEffect} from 'react';
import {Button, StyleSheet,PermissionsAndroid} from 'react-native';
import img1 from '../assets/1.jpg';
import pop from '../assets/genre/pop.jpg';
import rock from '../assets/genre/rock.jpg';
import electronic from '../assets/genre/electronic.jpg';
import classical from '../assets/genre/classical.jpg';
import {SongList} from '../components/SongList';
import {HorizontalCategoryList} from '../components/HorizontalCategoryList';
import Layout from '../components/Layout';


export function HomeScreen({navigation}) {
 
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
      <Content>
        <SongList
          isHorizontal={true}
          title="Trending"
          navigation={navigation}
          songList={trending}
          
        />
    
        <HorizontalCategoryList title="Genre" categoryList={category} />
        <SongList
          isHorizontal={true}
          title="Latest"
          navigation={navigation}
          songList={trending}
        />
      </Content>
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
