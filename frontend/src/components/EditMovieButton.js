import React, { Component } from 'react';
import { Button } from 'reactstrap';
import EditMovie from './EditMovie';

class EditMovieButton extends Component {
    state = {
        isHidden: true
    }

    onToggle = () => {
        // toggle by edit button (need): toggles the below form (needs editing)
        this.setState({
            isHidden: !this.state.isHidden
        })
        // console.log(this.props.movie);
    }

    render() {
        return(
            <div>
                <Button onClick={this.onToggle.bind(this)}>
                    Edit
                </Button>
                {!this.state.isHidden && <EditMovie movie={this.props.movie}/>}
            </div>
        );
    }

}

export default EditMovieButton;
