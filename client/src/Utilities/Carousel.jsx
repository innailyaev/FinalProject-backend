import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel =()=> {
   
        
    return (
            <Carousel>
                <div>
                    <img src="https://i.ytimg.com/vi/brWYAALZes4/maxresdefault.jpg" alt="barcelona" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg"  alt=""/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" alt="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default DemoCarousel;