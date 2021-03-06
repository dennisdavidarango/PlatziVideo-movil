import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list.js';
import Home from './src/screens/containers/Home'
import  Header  from './src/sections/components/Header';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
  }
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(movies);
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    })
  }
  render() {
    return (
      <Home>
         <Header/>
        <Text>buscador</Text>
        <Text>categorías</Text>
        <CategoryList
          list={this.state.categoryList}
        />
        <SuggestionList
          list={this.state.suggestionList}
        />
      </Home>
       
      
    );
  }
}

