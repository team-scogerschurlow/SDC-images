import React from 'react'

const Hero = ({ image, left }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%'
    }
    return <div className={left ? 'hero-left' : 'hero'} style={styles}></div>
}


export default Hero