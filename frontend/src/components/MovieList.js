import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Col, Row } from 'reactstrap';
import axios from 'axios';
import DeleteMovie from './DeleteMovie';
import EditMovieButton from './EditMovieButton';

const proxy = require('../../package.json').proxy;

class MovieList extends Component {
    // constructor(props){
    //     super(props);
    //     // console.log( 'proxy: '+proxy+'/movies/');
    // }

    state = {
       movies: []
    }

    componentDidMount() {
        axios.get(proxy+'/movies/')
        .then( res => {
            // console.log(res);
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
                            <Row>
                                <Col xs='1'>
                                    <DeleteMovie movieID={movie._id}></DeleteMovie>
                                </Col>
                                <Col>
                                    <Row>
                                        <b>{movie.title}</b>
                                    </Row>
                                    <Row>
                                        {movie.description}
                                    </Row>
                                    <Row>
                                        {movie.release_date}
                                    </Row>
                                </Col>
                                <Col>
                                    <EditMovieButton movie={movie}></EditMovieButton>
                                </Col>
                            </Row>
                        </ListGroupItem>)
                    }
                </ListGroup>
            </Container>
        );
    }
}

export default MovieList;
