import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Container, Content, Footer, Text} from 'native-base';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';
import FeatIcon from 'react-native-vector-icons/Feather';

const BottomNav = () => {
  return (
    <Footer style={styles.Footer}>
      <Button transparent style={styles.navBtn} >
        <EntIcon name="home" size={30} color="#fff" />
        <Text style={styles.btnText}>Home</Text>
      </Button>
      <Button transparent style={styles.navBtn} >
        <AntIcon name="hearto" size={30} color="#fff" />
        <Text style={styles.btnText}>Favourites</Text>
      </Button>
      <Button transparent style={styles.navBtn} >
        <AntIcon name="download" size={30} color="#fff" />
        <Text style={styles.btnText}>Donwloads</Text>
      </Button>
      <Button transparent style={styles.navBtn} >
        <FeatIcon name="user" size={30} color="#fff" />
        <Text style={styles.btnText}>Profile</Text>
      </Button>
    </Footer>
  );
};

const styles = StyleSheet.create({
  Footer: {
    backgroundColor: '#7E36FB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  navBtn:{
    flexDirection: "column"
  },
  btnText:{
    color:"#fff",
    fontSize: 12,
    textTransform:"capitalize"
  }
});

export default BottomNav;
