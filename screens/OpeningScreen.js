import React, {useEffect} from 'react';
import {Image, PermissionsAndroid, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../assets/logo2.png';
import bg from '../assets/bg.png';
import bottomBar from '../assets/bottomBar.png';

export function OpeningScreen({navigation}) {
  const requestCameraPermission = async () => {
    try {
      console.log(PermissionsAndroid);
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        navigation.navigate('Home');
      } else {
        requestCameraPermission()
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    requestCameraPermission();
  }, []);
  return (
    <LinearGradient
      locations={[0, 0.6, 0.9]}
      colors={[
        'rgba(219, 68, 204, 0.51)',
        'rgba(90, 38, 232, 0.8)',
        'rgba(126, 54, 251, 1)',
      ]}
      style={styles.linearGradient}>
      <Image style={styles.bg} source={bg}></Image>
      <Image style={styles.logo} source={logo}></Image>
      <Image style={styles.bBar} source={bottomBar}></Image>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
  bg: {
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -11111,
    bottom: 0,
    top: 0,
    left: -400,
  },
  logo: {
    position: 'absolute',
    top: '35%',
    left: '30%',
  },
  bBar: {
    position: 'absolute',
    bottom: 0,
    left: '44%',
  },
});
