import React from 'react';

// Components
import Landing from './Landing';
import Posts from './Posts';
import Cities from './Cities';
import Advertisement from './Advertisement';
import Customers from './Customers';
import Blogs from './Blogs';
import Workmates from './Workmates';

const Home = () => {
    return (
        <main>
            <Landing />
            <Posts page={"Home"} />
            <Cities />
            <Advertisement />
            <Customers />
            <Blogs />
            <Workmates />
        </main>
    );
};

export default Home;