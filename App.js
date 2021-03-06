import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TopNav from './components/topNav';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import BottomNav from './components/BottomNav';
import {Main} from './components/Main';
import { Songbar } from './components/songBar';
import { MainSong } from './container/MainSong';

const App = () => {
  return (
    <Container>
      {/* <TopNav />
      <Main />
      <Songbar />
      <BottomNav /> */}
      <MainSong />
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    color: '#000',
    fontWeight: '800',
  },
});

export default App;