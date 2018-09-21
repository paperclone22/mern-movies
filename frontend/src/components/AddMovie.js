import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import axios from 'axios';
import MovieList from './MovieList';

const proxy = require('../../package.json').proxy;

class AddMovie extends Component {
    state = {
        title: '',
        description: '',
        release_date: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: [e.target.value]});
    }

    onSubmit = e => {
        e.preventDefault();
        const newMovie = {
            title: this.state.title,
            description: this.state.description,
            release_date: this.state.release_date
        }
        axios.post(proxy+'/movies/', newMovie)
        .then( res => {
            console.log(res);
            window.location.reload();
        })
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for='movie'>Movie</Label>
                        <Input type='text' name='title' placeholder='title' onChange={this.onChange}></Input>
                        <Input type='text' name='description' placeholder='description' onChange={this.onChange}></Input>
                        <Input type='text' name='release_date' placeholder='release date' onChange={this.onChange}></Input>
                        <Button color="dark" onSubmit={ this.onSubmit }>
                            Add Movie
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default AddMovie;
