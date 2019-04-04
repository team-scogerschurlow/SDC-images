// import React from 'react';
// import Slider from './Slider.jsx';
// import axios from 'axios';

// class Lander extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             pics: []

//         }
//         this.loadPics = this.loadPics.bind(this)
//     }

//     componentDidMount () {
//         this.loadPics(61);

//     }
    
//     loadPics (listingId) {

//         axios.get(`/heroes/${listingId}`)
//         .then( res => this.setState({pics: res.data})
//          )
//         .catch(
//          (err) => {console.log(err)}
//         ) 
    
//     }

//     render() {
//         return (
//             <div className="lander">
//               <div className="exterior">

//               {this.state.}
             
//               <img alt="Exterior Photo" src={this.state.pics.url}></img>
//               </div>



//             </div>
             
//         )
//     }


// }


// export default Lander