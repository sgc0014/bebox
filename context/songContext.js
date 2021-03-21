import React, {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import TrackPlayer, { STATE_PLAYING } from 'react-native-track-player';
import * as MediaLibrary from 'expo-media-library';
import track from '../assets/test.wav'
export const SongContext = React.createContext();
export function SongProvider(props) {
  const [SongList, setSongList] = useState([]);
  const getMusicFromPhone = async () => {
    try {
      const {status} = await MediaLibrary.requestPermissionsAsync();
      if (status === 'granted') {
        let media = await MediaLibrary.getAssetsAsync({mediaType: 'audio'});
        setSongList(...SongList, media.assets);
        trackPlay()
      }
    } catch (Err) {
      console.log(Err);
    }
  };
  async function trackPlay() {
    TrackPlayer.setupPlayer();

    TrackPlayer.updateOptions({
      jumpInterval: 10,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
    });
try {
   

    await TrackPlayer.add([{"albumId": "1389444597", "creationTime": 0, "duration": 212.846, "filename": "Selena Gomez Marshmello - Wolves.mp3", "height": 0, id: "118667", "mediaType": "audio", "modificationTime": 1573193553000, "url": "file:///storage/emulated/0/test.wav", "width": 0}]);
  await  TrackPlayer.play()
  
  const currentTrack = await TrackPlayer.getCurrentTrack();
    console.log("currentTrack",currentTrack)
    await  TrackPlayer.play()
} catch (error) {
    console.log(error)
}
 
  }

  return (
    <SongContext.Provider value={{SongList, getMusicFromPhone, trackPlay}}>
      {props.children}
    </SongContext.Provider>
  );
}
