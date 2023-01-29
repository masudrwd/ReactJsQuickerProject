import React, { Component } from 'react';
import './Slider.css';

class Carousel extends Component {
   constructor(props) {
      super(props);
      this.state = {
         currentIndex: 0,
         transitioning: false,
      };
      this.images = [
         'https://images.unsplash.com/photo-1642618042029-df1adb1a88ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80',
         'https://images.unsplash.com/photo-1658516787452-555fc80d8799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1166&q=80',
         'https://images.unsplash.com/photo-1671638738896-787ef80a9f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      ];
   }

   nextImage = () => {
      this.setState({ transitioning: true });
      setTimeout(() => {
         const nextIndex = (this.state.currentIndex + 1) % this.images.length;
         this.setState({ currentIndex: nextIndex, transitioning: false });
      }, 500);
   };

   prevImage = () => {
      this.setState({ transitioning: true });
      setTimeout(() => {
         const prevIndex =
            (this.state.currentIndex - 1 + this.images.length) %
            this.images.length;
         this.setState({ currentIndex: prevIndex, transitioning: false });
      }, 500);
   };

   render() {
      return (
         <div className="carousel-container">
            <button className="prev-button" onClick={this.prevImage}>
               &lt;
            </button>
            <button className="next-button" onClick={this.nextImage}>
               &gt;
            </button>
            <img
               src={this.images[this.state.currentIndex]}
               className={`carousel-image ${
                  this.state.transitioning ? 'fade-out' : 'fade-in'
               }`}
               alt="slideshow"
            />
         </div>
      );
   }
}

export default Carousel;



//Slider Csss

/*


.carousel-image {
   transition: opacity 0.5s ease-in-out;
}

.fade-out {
   opacity: 0;
}

.fade-in {
   opacity: 1;
}


*/