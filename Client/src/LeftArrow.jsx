import React from 'react';
import { props } from 'bluebird'

const LeftArrow = (props) => {
    return (
        <div className='backarrow' onClick={props.goToPrevSlide}>
            <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
        </div>
    )
}

export default LeftArrow;