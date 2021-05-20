import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import PostCard from '../Utilities/PostCard';
import '../CSS/CarouselStyle.css';

const DemoCarousel =({img1,img2,img3,img4,img5})=> {
   
        
    return (
        <div>
            <Carousel showThumbs={true} infiniteLoop={true}>
                    <div className="cardContainer">
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                    </div>
                    <div>
                        <img src="https://i.ytimg.com/vi/brWYAALZes4/maxresdefault.jpg"  alt=""/>
                    </div>
                    <div>
                        <img src="https://i.natgeofe.com/n/f8b59838-5bb9-44c3-b8ac-bc1877683da8/covid-paris-france-daniels-23.jpg" alt="" />
                    </div>
            </Carousel>
        </div>
    );
}

export default DemoCarousel;