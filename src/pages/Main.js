import React from 'react';
import { Footer, Navbar } from '../components';
import Landing from '../components/Landing/Landing';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Landing/>
            <Footer/>
        </div>
    );
};

export default Main;