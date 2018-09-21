import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/myNavbar';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import {
  Container
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
        <MyNavbar></MyNavbar>
          <AddMovie></AddMovie>
          <br></br>
          <MovieList></MovieList>
        </Container>
      </div>
    );
  }
}

export default App;
