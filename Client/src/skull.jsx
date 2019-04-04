import React from 'react';
import { props } from 'bluebird';


const Skull = (props) => {
    return (
        <div className="skull" onClick={props.changeView}>
          <i className="fas fa-skull fa-lg"  aria-hidden="true"></i>
        
        </div>


    )
}


export default Skull;
