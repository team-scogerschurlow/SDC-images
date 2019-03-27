import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pics: ''
        }
    }

    render() {
        return (
            <div>
                <h1>It will never be game over</h1>
            </div>
        )
    }
}

ReactDOM.render(<Hero />, document.getElementById('hero'));