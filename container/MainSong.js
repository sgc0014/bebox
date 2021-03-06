import {Container, Content} from 'native-base';
import React from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import img2 from '../assets/2.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

export function MainSong(props) {
  return (
    <Content style={styles.songContainer}>
      <Image style={styles.songImg} source={img2} />
      <Container  style={styles.songTitleContainer} >
        <Container>
          <Text style={styles.songTitle}>Love Story</Text>
          <Text style={styles.songAuthor}>Taylor Swift...</Text>
          </Container>
          <Icon name="rocket" size={30} color="#900" />
      </Container>
    </Content>
  );
}

const styles = StyleSheet.create({
  songContainer: {
    height: '100%',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10
  },
  songImg: {
    maxWidth: 308,
    maxHeight: 308,
    alignSelf: 'center',
    borderRadius: 300,
    borderColor: "#7E36FB",
    borderWidth: 5,
    marginTop: 90,
    marginBottom: 50
  },
  songTitleContainer:{
    flexDirection: "row",
    alignContent: "center"
  },
  songTitle: {
      color: "#7E36FB",
      fontSize: 23,
      fontWeight: "500",
   
  },
  songAuthor:{
    color: "#7E36FB",
    fontSize: 18
  }
});
