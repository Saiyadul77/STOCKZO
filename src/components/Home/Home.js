import React from 'react';
import Banner from './Banner';
import Login from './Login';
import Mission from './Mission';
import Services from './Services';
import Team from './Team';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Mission></Mission>
           <Services></Services>
           <Team></Team>
           <Login></Login>
        </div>
    );
};

export default Home;