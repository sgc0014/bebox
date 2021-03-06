import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Header, Button, Left, Right, Body, Text} from 'native-base';
import logo from '../assets/logo.svg';



const TopNav = () => {
  return (
    <Header style={styles.Header}>
      <Left></Left>
      <Body></Body>
      <Right>
        <Button transparent>
      
        </Button>
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#7E36FB',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});

export default TopNav;
