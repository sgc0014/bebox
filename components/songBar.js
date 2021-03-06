import {Container, Content, Footer, Left} from 'native-base';
import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import img1 from '../assets/1.jpg';

export function Songbar(props) {
  return (
    <Container style={styles.songBarContainer}>
      <Image source={img1} style={styles.songBarImg} />
      <View style={styles.songBarTitleContainer}>
        <Text style={styles.songBarTitle}>Bad Boy</Text>
        <Text style={styles.songBarTitleAuthor}>Niall Horan</Text>
      </View>
      <View style={styles.songBarIconContainer}>
        <Text>A</Text>
        <Text>B</Text>
      </View>
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
    borderBottomColor: "black"
    
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
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
});
