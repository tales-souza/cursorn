/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  
} from 'react-native';


import CenaPrincipal from './src/components/CenaPrincipal';
export default class app05 extends Component {
  render() {
    return (
      <CenaPrincipal/>
      
    );
  }
}



AppRegistry.registerComponent('app05', () => app05);
