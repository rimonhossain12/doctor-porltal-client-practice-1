import React from 'react';
import DentalCare from '../../DentalCare/DentalCare';
import OurBlog from '../../OurBlog/OurBlog';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppointmentBanner></AppointmentBanner>
            <OurBlog></OurBlog>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;