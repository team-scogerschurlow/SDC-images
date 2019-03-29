import React from 'react';
import { props } from 'bluebird';


const RightArrow = (props) => {
    return (
        <div className="nextArrow" onClick={props.goToNextSlide}>
          <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        
        </div>
    )
}


export default RightArrow;
