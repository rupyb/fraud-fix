import React, { Component } from 'react';
import WelcomeScreen from './WelcomeScreen';
import WelcomeFooter from './WelcomeFooter';
import WhatWeDo from './WhatWeDo';
import Technology from './Technology';
import ApiInfo from './ApiInfo';
import HowItWorks from './HowItWorks';

export default class PageOne extends Component {
 
  render() {
    return (
      <div >
        
            <div className="pageOneMainDiv"
              style={{
                display: 'grid',
                gridTemplateColumns: '15% 70% 15%',
                backgroundColor: '#2f2255',
               backgroundImage: `url('bg.png')`,
                backgroundSize: 'cover',
                color: 'white',
                paddingTop: '5em',
              }}>
              <div></div>
              <div>
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
            </div>
        
        }
      </div>
    );
  }
}