import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Col,
    Row,
    Container
} from 'reactstrap';
import axios from 'axios';

const proxy = require('../../package.json').proxy;

class EditMovie extends Component {
    state = {
        _id: this.props.movie._id,
        title: this.props.movie.title,
        description: this.props.movie.description,
        release_date: this.props.movie.release_date
    }

    onChange = event => {
        this.setState({ [event.target.name]: [event.target.value]});
    }

    onSubmit = event => {
        event.preventDefault();
        const newMovie = {
            _id: this.state._id,
            title: this.state.title,
            description: this.state.description,
            release_date: this.state.release_date
        }
        console.log('newMovie: '+newMovie);
        axios.put(proxy+'/movies/', newMovie)
        .then( res => {
            console.log(res);
            window.location.reload();
        })
    }

    render() {
        return(
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <Input type='text' name='title' placeholder='title' onChange={this.onChange} value={this.state.title}></Input>
                                <Input type='text' name='description' placeholder='description' onChange={this.onChange} value={this.state.description}></Input>
                                <Input type='text' name='release_date' placeholder='release date' onChange={this.onChange} value={this.state.release_date}></Input>
                                <Button color="dark" onSubmit={ this.onSubmit }>
                                    Update Movie
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </FormGroup>
            </Form>
        );
    }

}

export default EditMovie;
