import {Button, Body, Container, Content, Footer, Left} from 'native-base';
import React, { useState } from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import img1 from '../assets/1.jpg';
import Icon from 'react-native-vector-icons/AntDesign';

export function Songbar(props) {
  const [Fav, setFav] = useState(false);
  const [Play, setPlay] = useState(true);
  return (
    <Container style={styles.songBarContainer}>
      <Image source={img1} style={styles.songBarImg} />
      <View style={styles.songBarTitleContainer}>
        <Text style={styles.songBarTitle}>Bad Boy</Text>
        <Text style={styles.songBarTitleAuthor}>Niall Horan</Text>
      </View>
      <Body style={styles.songBarIconContainer}>
        <Button transparent  onPress={() => {setFav(!Fav)}}>
          {Fav ? (
            <Icon name="heart" size={25} color="#fff" />
          ) : (
            <Icon name="hearto" size={25} color="#fff" />
          )}
        </Button>
        <Button transparent onPress={() => {setPlay(!Play)}}>
        {Play ? (
            <Icon name="pause" size={25} color="#fff" />
          ) : (
            <Icon name="caretright" size={25} color="#fff" />
          )}
       
        </Button>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  songBarContainer: {
    width: '100%',
    backgroundColor: '#7E36FB',
    maxHeight: 80,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  songBarImg: {
    resizeMode: 'cover',
    width: 97,
    height: '100%',
  },
  songBarTitleContainer: {
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',
  },
  songBarTitle: {
    fontSize: 14,
    color: '#fff',
  },
  songBarTitleAuthor: {
    fontSize: 12,
    color: '#fff',
  },
  songBarIconContainer: {
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center',
  },
});
