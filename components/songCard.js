import {Card, CardItem, Text} from 'native-base';
import React from 'react';
import {StyleSheet, Image} from 'react-native';

export function Songcard(props) {
  const {songTitle, imgSrc} = props;
  return (
    <Card style={styles.card}>
      <CardItem cardBody>
        <Image source={imgSrc} style={styles.img} />
      </CardItem>
      <CardItem>
        <Text style={styles.cardTitle}>{songTitle}</Text>
      </CardItem>
    </Card>
  );
}

const styles = StyleSheet.create({
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
