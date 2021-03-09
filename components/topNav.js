import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Header, Button, Left, Right, Body, Text, Input} from 'native-base';
import logo from '../assets/logo.png';
import Icon from 'react-native-vector-icons/AntDesign';

const TopNav = () => {
  const [searchState, setsearchState] = useState(true);
  return (
    <Header style={styles.Header}>
      <Left>
        {/* <Button transparent>
          {searchState ? (
            <Icon name="back" size={30} color="#fff" />
          ) : (
            <Icon name="search1" size={30} color="#fff" />
          )}
        </Button> */}
        <Image source={logo} style={styles.logoImg} />
      </Left>
      {searchState && (
        <Body>
          <Input style={styles.inputStyle} placeholder="Search" />
        </Body>
      )}
      <Right>
        <Button
          transparent
          onPress={() => {
            setsearchState(!searchState);
          }}>
          <Icon name="search1" size={30} color="#fff" />
        </Button>
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#7E36FB',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
   
  },
  logoImg:{
    resizeMode:"contain"
  },
  inputStyle: {
    backgroundColor: '#fff',
    width: 230,
    maxHeight: 35,
    borderRadius: 5,
    marginLeft: 20,
    paddingLeft: 5,
    fontSize: 14
  },
});

export default TopNav;
