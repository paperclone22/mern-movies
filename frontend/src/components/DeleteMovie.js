import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup
} from 'reactstrap';
import axios from 'axios';

const proxy = require('../../package.json').proxy;

class DeleteMovie extends Component {

    onSubmit = event => {
        event.preventDefault();
        //console.log('prop: '+this.props.movieID)
        axios.delete(proxy+'/movies/'+this.props.movieID)
        .then( res => {
            //console.log(res);
            window.location.reload();
        })
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Button color="dark" onSubmit={ this.onSubmit }>X</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default DeleteMovie;
