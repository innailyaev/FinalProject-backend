import React,{useEffect} from "react";
import Card from '../Utilities/Card';
import VideoCard from '../Utilities/VideoCard';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../CSS/HomepageStyle.css';


const HomePage = () => {

    useEffect(()=>{
        Aos.init({duration:2000});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
        return(
            <div className="homepage">
                <div className="imageContainer"></div>
                <div class="titleBlock">
                    <h1>Tell us about your adventure <br></br>around the world</h1>
                </div>
                <div data-aos="fade-up" className="cardsContainer">
                    <h2>Featured Topics & Articles</h2>
                    <div className="articleCards">
                        <Card title="The capsule travel wardrobe you all needed" link="https://www.tourradar.com/days-to-come/what-to-pack-for-two-weeks-in-europe/" content="What to Pack for Two Weeks in Europe" image="https://www.tourradar.com/days-to-come/wp-content/uploads/2020/01/capsule-wardrobe.jpeg"/>
                        <Card title="The year to plan a trip with friends" link="https://www.tourradar.com/days-to-come/awesome-trip-with-friends-quotes/" content="99 Awesome Trip with Friends Quotes" image="https://www.tourradar.com/days-to-come/wp-content/uploads/2020/01/friends-on-a-beach.jpeg"/>
                        <Card title="The world’s most interesting journeys" link="https://www.tourradar.com/days-to-come/interesting-journeys-overland-adventures-tours/" content="These Are the World’s Most Interesting Journeys" image="https://www.tourradar.com/days-to-come/wp-content/uploads/2020/01/Nepal-.jpeg"/>
                    </div>
                    <div className="articleCards">
                        <Card title="The future of solo female travel" link="https://www.tourradar.com/days-to-come/what-solo-travel-looks-like-for-women-in-2019" content="What Solo Travel Looks Like for Women" image="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f709d82fa4f131fa2114a74%2F0x0.jpg"/>
                        <Card title="24/7 in Europe" link="https://www.tourradar.com/days-to-come/one-week-in-europe/" content="One Week in Europe: How to Get the Most out of Your Trip" image="https://www.tourradar.com/days-to-come/wp-content/uploads/2019/02/Europe1.jpg"/>
                        <Card title="The least-visited countries in Europe" link="https://www.tourradar.com/days-to-come/least-visited-countries-in-europe/" content="The Least-Visited Countries in Europe" image="https://www.tourradar.com/days-to-come/wp-content/uploads/2019/03/LV4.jpg"/>
                    </div>
                </div>
                <div className="videoSection" data-aos="fade-up">
                    <h2>Best YouTube Travel Channels</h2>
                        <div  className="videoContainer">
                            <VideoCard title="Most Beautiful Destinations in Europe" link="https://www.youtube.com/watch?v=7lvXbfNBIQg" image="https://image.jimcdn.com/app/cms/image/transf/dimension=1190x10000:format=jpg/path/sa6549607c78f5c11/image/i2c81a69087b406ef/version/1456237268/most-beautiful-landscapes-in-europe-hallstatt-copyright-canadastock-european-best-destinations.jpg"/>
                            <VideoCard/>
                            <VideoCard/>
                        </div>


                       
                        
        </div>  
            </div>
        )
}

export default HomePage;
