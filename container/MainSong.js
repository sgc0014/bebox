import {Container, Content} from 'native-base';
import React from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import img2 from '../assets/2.jpg';
import Icon from 'react-native-vector-icons/AntDesign';
import Slider from '@react-native-community/slider';

export function MainSong(props) {
  return (
    <Container style={styles.songContainer}>
      <Container style={styles.songTop}>
      <Icon name="caretdown" size={30} color="#7E36FB"  />
      <Icon name="caretdown" size={30} color="#7E36FB"  />
      </Container>
      <Image style={styles.songImg} source={img2} />
      <Container style={styles.songTitleContainer}>
        <Container>
          <Text style={styles.songTitle}>Love Story</Text>
          <Text style={styles.songAuthor}>Taylor Swift...</Text>
        </Container>
        <Icon name="heart" size={30} color="#7E36FB"  />
      </Container>
      <Container>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#7E36FB"
          maximumTrackTintColor="#000000"
          thumbTintColor="#707070"
        />
         <Container style={styles.mediaController}>
          <Icon name="banckward" size={50} color="#7E36FB"  />
          <Icon name="pausecircle" size={60} color="#7E36FB"  />
          <Icon name="forward" size={50} color="#7E36FB"  />
          </Container>
      </Container>
    </Container>
  );
}

const styles = StyleSheet.create({
  songContainer: {
    height: '100%',
    width: '100%',
    paddingLeft: 20,
    paddingRight:20,
  },
  songTop:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  songImg: {
    maxWidth: 308,
    maxHeight: 308,
    alignSelf: 'center',
    borderRadius: 300,
    borderColor: '#7E36FB',
    borderWidth: 5,
    marginBottom: 50,
  },
  songTitleContainer: {
    flexDirection: 'row',
    marginBottom: -70
  },
  songTitle: {
    color: '#7E36FB',
    fontSize: 23,
    fontWeight: '500',
  },
  songAuthor: {
    color: '#7E36FB',
    fontSize: 18,
  },
  slider: {
    width: "100%",
    color: '#fff',

    alignSelf: 'center',
  },
  mediaController:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop: 30
  }
});
