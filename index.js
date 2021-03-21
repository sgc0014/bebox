/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import trackService from './services/service';
import TrackPlayer from 'react-native-track-player';
import {SongProvider} from './context/songContext';

const index = () => {
  return (
    <NavigationContainer>
      <SongProvider>
        <App />
      </SongProvider>
    </NavigationContainer>
  );
};
AppRegistry.registerComponent(appName, () => index);
TrackPlayer.registerPlaybackService(() => trackService);
