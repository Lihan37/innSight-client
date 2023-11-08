import React from 'react';
import Banner from '../Banner/Banner';
import Map from '../Map/Map';
import SpecialOffers from '../SpecialOffers/SpecialOffers';
import NewsletterSignUp from '../NewsLetterSignUp/NewsletterSignup';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home Page Title</title>
                <meta name="description" content="Description for the home page" />
                
            </Helmet>
            <Banner></Banner>
            <SpecialOffers></SpecialOffers>
            <Map></Map>
            <NewsletterSignUp></NewsletterSignUp>
        </div>
    );
};

export default Home;