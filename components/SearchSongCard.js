import {Card, CardItem, Text,Button} from 'native-base';
import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

export function SearchSongCard(props) {
  const {songTitle, imgSrc,navigation} = props;
  return (
   
    <Card style={styles.card}>
      <CardItem button cardBody onPress={() => {alert("hrlo")}}>
        <Image source={imgSrc} style={styles.img} />
      </CardItem>
      <CardItem button cardBody onPress={() => {navigation.navigate('Song')}}>
        <Text style={styles.cardTitle}>{songTitle}</Text>
      </CardItem>
    </Card>

  );
}




const styles =  StyleSheet.create({
  card: {
    width: "100%",
    height: 230,
  },

  img: {
    resizeMode: 'cover',
    width: '100%',
    height: 190,
  },
 
});
