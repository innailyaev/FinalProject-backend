import React,{useEffect} from "react";
import Card from '../Utilities/Card';
import VideoCard from '../Utilities/VideoCard';
import InfoCard from '../Utilities/InfoCard';
import {Link} from 'react-router-dom';
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
                <div className="titleBlock">
                    <h1>Tell us about your adventure <br></br>around the world</h1>
                    <Link to={`/signup`}><button className="createPostBtn">Create Your Post</button></Link>
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
                    <h2>Best YouTube Travel Vlogs</h2>
                        <div  className="videoContainer">
                            <VideoCard title="MOST BEAUTIFUL DESTINATIONS IN EUROPE" link="https://www.youtube.com/embed/7lvXbfNBIQg" image="https://image.jimcdn.com/app/cms/image/transf/dimension=1190x10000:format=jpg/path/sa6549607c78f5c11/image/i2c81a69087b406ef/version/1456237268/most-beautiful-landscapes-in-europe-hallstatt-copyright-canadastock-european-best-destinations.jpg"/>
                            <VideoCard title="A WEEK IN PARIS" link="https://www.youtube.com/embed/tKXrpRrj7Ow" image="https://i.natgeofe.com/n/f8b59838-5bb9-44c3-b8ac-bc1877683da8/covid-paris-france-daniels-23.jpg"/>
                            <VideoCard title="LUXURY MALDIVES EXPERIENCE" link="https://www.youtube.com/embed/FaeQtn3-h4w" image="https://www.livetraveleatplay.com/domain/0/content/604170007304/604170007304-img1.jpg"/>
                        </div>               
                </div>
                <div data-aos="fade-up" className="cardsContainer">
                    <h2>Best Countries For Food Around The World</h2>
                    <div  className="foodContainer">
                            <InfoCard title="ITALY" image="https://1.bp.blogspot.com/-oN1InZ0dfBs/Xtamd8gXAaI/AAAAAAAAAC4/XU4Ih_Bb0rED6wQvtZnBDNHGU5GfVeAiQCK4BGAsYHg/pizza-3007395_1920.jpg" content="Whenever there’s a discussion on the countries known for their food, Italy never misses on the list. Italian dishes are a favorite for most people. Their diets are a blend of colors that leave an unforgettable taste in the mouth. A simple pasta meal by an Italian chef will be finger licking sweet. And it’s just not the taste that will wow you; it will be good to look at! Italian menu popular dishes include pizza, cheesy risottos, and pasta."/>
                            <InfoCard title="MEXICO" image="https://pixfeeds.com/images/mexico/food/1280-505270190-tacos-with-minced-meat-with-beans.jpg" content="Mexico is definitely a go-to country if you’re in search of delicious cuisines. Like their neighbors the USA, Mexican cuisine has its origins in the European continent with some influence from Indian and African dishes. Almost all of the delicious cuisines come from European countries that have featured on most of the top 10 countries with the best food lists. However, most have some Spanish history."/>
                            <InfoCard title="JAPAN" image="https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/2TW0tmbd-1380x1035.jpeg" content="Japan is meticulous in everything they do include their cooking. They’ve also maintained their indigenous culture and traditions. When the rest of the world uses forks and knives, they are still using chopsticks. What’s even more interesting is that they made the rest of the world follow suit when enjoying foods from their country. You’ve probably had Sake, Ramen, Sushi, Tempura, Unagi or Sashimi – some of their favorites – and you did so with chopsticks."/>
                    </div>
                </div>  
            </div>
        )
}

export default HomePage;
