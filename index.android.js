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

import { Navigator } from 'react-native-deprecated-custom-components'

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaServicos from './src/components/CenaServicos';
import CenaEmpresa from './src/components/CenaEmpresa';
export default class app05 extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{ id: 'a' }}
          renderScene={(route, navigator) =>{
            if (route.id === 'a') {
              return (<CenaPrincipal navigator={navigator} />);

            }

            if (route.id === 'b') {
              return (<CenaClientes navigator={navigator} />);
              
            }


            if (route.id === 'contato') {
              return (<CenaContatos navigator={navigator} />);
              
            }

            if (route.id === 'servico') {
              return (<CenaServicos navigator={navigator} />);
              
            }


            if (route.id === 'empresa') {
              return (<CenaEmpresa navigator={navigator} />);
              
            }
          
          }
        }
          />

      
    );
  }
}



AppRegistry.registerComponent('app05', () => app05);
