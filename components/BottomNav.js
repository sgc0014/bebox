import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Footer,
} from 'native-base';

const BottomNav = () => {
  return <Footer style={styles.Footer}></Footer>;
};

const styles = StyleSheet.create({
  Footer: {
    backgroundColor: '#7E36FB',
  },
});

export default BottomNav;
