import React from 'react';
import Slider from '@react-native-community/slider';
import {StyleSheet, Text, View} from 'react-native';
import TrackPlayer, {useTrackPlayerProgress} from 'react-native-track-player';
import {useEffect} from 'react';
import {Container} from 'native-base';

export function SongSlider() {
  const {duration, position} = useTrackPlayerProgress(1000, null);

  const bulidTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };

  return (
    <View style={styles.sliderContainer}>
      <View style={styles.songTime}>
        <Text>{bulidTime(position)}</Text>
        <Text>{bulidTime(duration)}</Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onValueChange={(value) => {
          TrackPlayer.seekTo(value);
        }}
        minimumTrackTintColor="#7E36FB"
        maximumTrackTintColor="#000000"
        thumbTintColor="#7E36FB"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    marginBottom: 35,
  },
  slider: {
    width: '100%',
    color: '#fff',
    alignSelf: 'center',
  },
  songTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
