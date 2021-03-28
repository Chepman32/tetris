import React from 'react';
import { View } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import Main from './src/main';

class AppContainer extends React.Component {
  state = {
    assetsLoaded: false,
  }
  render() {

    return (
      <View style={{flex: 1}}>
        <Main />

        <Video
          source={require('./assets/sounds/tetris.mp3')}
          repeat={true}
          style={{position: 'absolute', width: 0, height: 0}}
        />
      </View>
    );
  }
}

export default AppContainer
