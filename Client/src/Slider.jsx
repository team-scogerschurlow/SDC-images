import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Slide from './Slide.jsx';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';


class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: ["https://i.imgur.com/M4YeUei.jpg",
                     "https://i.imgur.com/BXWwCKd.jpg",
                     "https://i.imgur.com/zstzmyJ.jpg",
                     "https://i.imgur.com/xfNXg6a.jpg",
                     "https://i.imgur.com/cLpJWYR.jpg"
        
                     ],
            currentIndex: 0,
            translateValue: 0
        };
        this.goToNextSlide = this.goToNextSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);

    }
    goToPrevSlide () {
        
        if(this.state.currentIndex === 0) return;
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
          }))

    }

    goToNextSlide () {

        if(this.state.currentIndex === this.state.images.length -1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0

            })
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())


        }))

    }

    slideWidth() {
        return document.querySelector('.slide').clientWidth
    }

    render () {
        return (
            <div className="slider">
              <div className="slider-wrapper"
              style={{
                transform: `translateX(${this.state.translateValue}px)`,
                transition: 'transform ease-out 0.45s'
              }}>
            {
                this.state.images.map((image, i) => (
                    <Slide key={i} image={image}/>

                ))
            
            }
            </div>
            <LeftArrow 
            goToPrevSlide={this.goToPrevSlide} 
            />

            <RightArrow 
            goToNextSlide={this.goToNextSlide} 
            />

            </div>
        );
    }
    
    
}

export default Slider