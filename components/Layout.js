import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  Container,
} from 'native-base';
import BottomNav from './BottomNav';
import { Songbar } from './songBar';
import TopNav from './topNav';


const Layout = ({children}) => {
  return (
    <Container style={styles.container}>
      <TopNav />
      {children}
      {/* <Songbar /> */}
      <BottomNav />
      {/* <MainSong /> */}
    </Container>
  );
};

const styles = StyleSheet.create({
  container:{
  },
  header: {
    color: '#000',
    fontWeight: '800',
    backgroundColor:"#fff"
  },
});

export default Layout;
