import React from 'react';
import Banner from '../Banner/Banner';
import Map from '../Map/Map';
import SpecialOffers from '../SpecialOffers/SpecialOffers';
import NewsletterSignUp from '../NewsLetterSignUp/NewsletterSignup';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpecialOffers></SpecialOffers>
            <Map></Map>
            <NewsletterSignUp></NewsletterSignUp>
        </div>
    );
};

export default Home;