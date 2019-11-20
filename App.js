/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';

const App: () => React$Node = () => {
  return (
    <>
      <HomeScreen />
    </>
  );
};

export default App;
