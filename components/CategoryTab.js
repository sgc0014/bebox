import {Card, CardItem, Text, Button} from 'native-base';
import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

export function CategoryTab(props) {
  const {categoryTitle, imgSrc} = props;
  return (
    <Card style={styles.card}>
      <CardItem
        button
        cardBody
        style={styles.cardOverlay}
        onPress={() => {
          alert('hrlo');
        }}>
        <Image source={imgSrc} style={styles.img} />
      </CardItem>
      <Text style={styles.cardTitle}>{categoryTitle}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: '100%',
    position: 'relative',
  },
  cardOverlay: {
    backgroundColor: '#000',
  },
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: 118,
    opacity: 0.4,
  },
  cardTitle: {
    position: 'absolute',
    color: '#fff',
    alignSelf: 'center',
    top: '42%',
  },
});
