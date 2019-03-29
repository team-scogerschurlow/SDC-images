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
                <h2>It will never be game over</h2>
                <a href="https://imgur.com/RV6dmw0"><img src="https://i.imgur.com/RV6dmw0.jpg" title="source: imgur.com" /></a>
            </div>
        )
    }
}

ReactDOM.render(<Hero />, document.getElementById('hero'));