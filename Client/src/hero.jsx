import React from 'react'

const Hero = ({ image }) => {
    const styles = {
        // display: 'flex',
        // flexwrap: 'wrap',
        // flexdirection: 'row',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '25%'
    }
    return <div className="hero" style={styles}></div>
}


export default Hero