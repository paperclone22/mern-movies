import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Input } from 'reactstrap';
import axios from 'axios';

const proxy = require('../../package.json').proxy;

class MovieList extends Component {
    constructor(props){
        super(props);
        console.log( 'proxy: '+proxy+'/movies/');
    }

    state = {
       movies: []
    }

    componentDidMount() {
        axios.get(proxy+'/movies/')
        .then( res => {
            console.log(res);
            this.setState({movies: res.data});
        })
    }

    render() {
        return (
            <Container>
                <ListGroup>
                    {
                        this.state.movies.map(movie =>
                        <ListGroupItem key={movie._id}>
                            <b>{movie.title}</b><br>
                            </br>{movie.description}<br>
                            </br>{movie.release_date}
                        </ListGroupItem>)
                    }
                </ListGroup>
            </Container>
        );
    }
}

export default MovieList;
