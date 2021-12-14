import React from 'react'
import Features from '../containers/features/Features'
import Header from '../containers/header/Header'
import SlantedDiv from '../containers/slantedDiv/SlantedDiv'
import Footer from '../containers/footer/Footer'
const Home = () => {
    return (
        <div>
            <Header/>
            <Features/>
            <SlantedDiv/>
            <Footer/>
        </div>
    )
}

export default Home
