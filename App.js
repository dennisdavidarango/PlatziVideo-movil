import React, { Component } from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/Home'
import Header from './src/sections/components/Header'
import SuggestionList from './src/videos/containers/suggestion-list'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header>
          <Text>Close Session</Text>
        </Header>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <SuggestionList/>

      </Home>
    );
  }
}
