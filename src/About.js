import React from 'react';
import './App.css';

const About = () => {
    return (
        <div id='devs'>
            <div className='team-container'>
                <div className='head-container'>
                    <h2>Meet the Devs</h2>
                </div>
                <div className='person-container'>
                    <img className='mem-img' src={require('./images/sebastian_website.jpg')} />
                    <p>Sebastian Zhao (PL)</p>
                </div>
                <div className='person-container'>
                    <img className='mem-img' src={require('./images/annabelle_website.jpg')} />
                    <p>Annabelle Park</p>
                </div>
                <div className='person-container'>
                    <img className='mem-img' src={require('./images/jade_website.jpg')}></img>
                    <p>Jade Wang</p>
                </div>
                <div className='person-container'>
                    <img className='mem-img' src={require('./images/nikhil_website.jpg')}></img>
                    <p>Nikhil Pitta</p>
                </div>
                <div className='person-container'>
                    <img className='mem-img' src={require('./images/rahul_website.jpg')}></img>
                    <p>Rahul Vijay</p>
                </div>
                <div className='person-container'>
                    <img className='mem-img' src={require('./images/tanush_website.jpg')}></img>
                    <p>Tanush Talati</p>
                </div>
                <div className='person-container'>
                    <img className='mem-img' src={require('./images/tony_website.jpg')}></img>
                    <p>Tony Xin</p>
                </div>
            </div>
        </div>
    )
}

export default About