import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider.jsx';
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
                {/* <h2>It will never be game over</h2> */}
                <Slider />

            </div>
        )
    }
}

ReactDOM.render(<Hero />, document.getElementById('hero'));