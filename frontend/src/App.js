import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/myNavbar';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar></MyNavbar>
        <AddMovie></AddMovie>
        <br></br>
        <MovieList></MovieList>
      </div>
    );
  }
}

export default App;
