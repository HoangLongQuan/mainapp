import './styles.css';

import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';

const HomePage = () => {

    return (
        <div>
            <Header />
            <div className='container'>
                <div className='cards-container'>
                    <Card 
                        title={"Education"} 
                        image={require("../../images/Education.png")} 
                        alt={"Education"} 
                        link={"https://google.com"}
                    />
                    <Card 
                        title={"Feedback"}  
                        image={require("../../images/Education.png")} 
                        alt={"Education"}
                        link={"https://docs.google.com/forms/d/e/1FAIpQLSfm8cnZ9mz293SFCby6gkp1UpbQR53YN6S8pILFLxpj_XrfZA/viewform"}
                    />
                </div>
                
                <div className='cards-container'>
                    <Card 
                        title={"Driving"} 
                        image={require("../../images/Driving.png")} 
                        alt={"Driving"}
                        link={"https://www.dps.texas.gov/"}
                    />
                    <Card 
                        title={"Temp 4"} 
                        image={require("../../images/Education.png")} 
                        alt={"Education"}
                        link={"https://google.com"}
                    />
                </div>

                <div className='cards-container'>
                    <Card 
                        title={"Texas Jobs"} 
                        image={require("../../images/Jobs.png")} 
                        alt={"Jobs"}
                        link={"https://www.workintexas.com/vosnet/Default.aspx"}
                    />
                    <Card 
                        title={"Training Resources"} 
                        image={require("../../images/Training.png")} 
                        alt={"Training"}
                        link={"https://google.com"}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;