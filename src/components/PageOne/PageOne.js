import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import WelcomeScreen from './WelcomeScreen';
import WelcomeFooter from './WelcomeFooter';
import WhatWeDo from './WhatWeDo';
import Technology from './Technology';
import ApiInfo from './ApiInfo';
import Footer from '../shared/Footer';
import bg from '../../assets/illustration/bg.png';
import HowItWorks from './HowItWorks';

export default class PageOne extends Component {


  render() {
    // console.log(this.state);
    // console.log(this.props);
    return (
      <div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '15% 70% 15%',
            backgroundImage: `url(${bg})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh', color: 'white',
            minHeight: '965px'
          }}>
          <div></div>
          <div>
           
            <Navbar />
            <WelcomeScreen />
            <WelcomeFooter />
          </div>
          <div></div>
        </div >
        <div>
          <WhatWeDo />
          <Technology />
          <ApiInfo />
          <HowItWorks />
          <Footer />
        </div>
      </div>
    );
  }
}