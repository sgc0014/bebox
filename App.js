import React from 'react';
import Layout from './components/Layout';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './screens/HomeScreen';
import {SongScreen} from './screens/SongScreen';
import {SearchListScreen} from './screens/SearchListScreen';
import {OpeningScreen} from './screens/OpeningScreen';
import { DownloadedScreen } from './screens/DownloadedScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Downloaded" component={DownloadedScreen} />
      <Stack.Screen name="Opening" component={OpeningScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Song" component={SongScreen} />
      <Stack.Screen name="Search" component={SearchListScreen} />
    </Stack.Navigator>
  );
};

export default App;
