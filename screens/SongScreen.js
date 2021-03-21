import {Button, Container, Content} from 'native-base';
import React, {useContext, useState} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import img2 from '../assets/2.jpg';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import TrackPlayer, { TrackPlayerEvents } from 'react-native-track-player';
import track from '../assets/test2.mp4';
import {useEffect} from 'react';
import trackService from '../services/service';
import {SongSlider} from '../components/SongSlider';
import { SongContext } from '../context/songContext';

export function SongScreen({navigation,route}) {
  const {trackPlay,getMusicFromPhone} = useContext(SongContext)
  const { id } = route.params;

  useEffect(() => {

    trackPlay()
//    const test = async () =>{
//      try{
//       await TrackPlayer.play();
//      }
//      catch(err) {
//        console.log(err)
//      }
     
//    }
// test()
  }, []);
  
  const [isPlaying, setisPlaying] = useState(false);
  const playAction = () => {
    if (isPlaying) {
      TrackPlayer.pause();
      setisPlaying(!isPlaying);
    } else {
      TrackPlayer.play();
      setisPlaying(!isPlaying);
    }
  };
  const forward = async () => {
    const position = await TrackPlayer.getPosition();

    await TrackPlayer.seekTo(position + 10);
  };
  const backward = async () => {
    const position = await TrackPlayer.getPosition();

    await TrackPlayer.seekTo(position - 10);
  };
  return (
    <Container style={styles.songContainer}>
      <View style={styles.songTop}>
        <Button
          transparent
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <AntIcon name="back" size={30} color="#7E36FB" />
        </Button>
        <FeatherIcon name="more-vertical" size={30} color="#7E36FB" />
      </View>
      <Image style={styles.songImg} source={img2} />
      <View style={styles.songTitleContainer}>
        <View>
          <Text style={styles.songTitle}>Love Story</Text>
          <Text style={styles.songAuthor}>Taylor Swift...</Text>
        
        </View>
        <Button
          transparent
          onPress={() => {
            TrackPlayer.destroy();
          }}>
          <AntIcon name="heart" size={30} color="#7E36FB" />
        </Button>
      </View>
      <View>
        <SongSlider />
        <View style={styles.mediaController}>
          <Button transparent onPress={backward}>
            <AntIcon name="banckward" size={50} color="#7E36FB" />
          </Button>
          <Button transparent onPress={playAction}>
            <AntIcon
              name={isPlaying ? `pausecircle` : `play`}
              size={60}
              color="#7E36FB"
            />
          </Button>
          <Button transparent onPress={forward}>
            <AntIcon name="forward" size={50} color="#7E36FB" />
          </Button>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  songContainer: {
    height: '100%',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-around',
  },
  songTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  songImg: {
    maxWidth: 308,
    maxHeight: 308,
    alignSelf: 'center',
    borderRadius: 300,
    borderColor: '#7E36FB',
    borderWidth: 5,
  },
  songTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  songTitle: {
    color: '#7E36FB',
    fontSize: 23,
    fontWeight: '500',
  },
  songAuthor: {
    color: '#7E36FB',
    fontSize: 18,
  },

  mediaController: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
