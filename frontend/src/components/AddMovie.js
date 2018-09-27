import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Row,
    Container
} from 'reactstrap';
import axios from 'axios';

const proxy = require('../../package.json').proxy;

class AddMovie extends Component {
    state = {
        title: '',
        description: '',
        release_date: ''
    }

    onChange = event => {
        this.setState({ [event.target.name]: [event.target.value]});
    }

    onSubmit = event => {
        event.preventDefault();
        const newMovie = {
            title: this.state.title,
            description: this.state.description,
            release_date: this.state.release_date
        }
        if(newMovie.title !== '') {
            axios.post(proxy+'/movies/', newMovie)
            .then( res => {
                // console.log(res);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            // there's no indication that something went wrong ( empty title )
        }
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Container>
                            <Row>
                                <Col sm="12" md={{ size: 8, offset: 2 }}>
                                    <Label for='movie'>Movie</Label>
                                    <Input type='text' name='title' placeholder='title' onChange={this.onChange}></Input>
                                    <Input type='text' name='description' placeholder='description' onChange={this.onChange}></Input>
                                    <Input type='text' name='release_date' placeholder='release date' onChange={this.onChange}></Input>
                                    <Button color="dark" onSubmit={ this.onSubmit }>
                                        Add Movie
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default AddMovie;
