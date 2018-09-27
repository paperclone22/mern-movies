import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Col, Row } from 'reactstrap';
import axios from 'axios';
import DeleteMovie from './DeleteMovie';
import EditMovieButton from './EditMovieButton';

const proxy = require('../../package.json').proxy;

class MovieList extends Component {

    state = {
       movies: []
    }

    componentDidMount() {
        axios.get(proxy+'/movies/')
        .then( res => {
            this.setState({movies: res.data});
        })
    }

    render() {
        return (
            <Container>
                <Col xs='12' md={{size: 10, offset: 1}}>
                    <ListGroup>
                        {
                            this.state.movies.map(movie =>
                            <ListGroupItem key={movie._id}>
                                <Row>
                                    <Col xs='1'>
                                        <DeleteMovie movieID={movie._id}></DeleteMovie>
                                    </Col>
                                    <Col xs={{ size: 3, offset: 1}}>
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
                                    <Col xs={{ size: 6 }}>
                                        <EditMovieButton movie={movie}></EditMovieButton>
                                    </Col>
                                </Row>
                            </ListGroupItem>)
                        }
                    </ListGroup>
                </Col>
            </Container>
        );
    }
}

export default MovieList;
