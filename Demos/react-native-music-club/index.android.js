// index.android.js

// Import a library to create a conmponent

import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// Create a component

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums!'} />
      <AlbumList />
    </View>
  );
};
// Render it to a device.
AppRegistry.registerComponent('albums', () => App);
