import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import background from '../../assets/illustration/howItWorksBackground.png';
import magento from '../../assets/illustration/customerLogos/magento.svg';
import shopify from '../../assets/illustration/customerLogos/shopify.svg';
import oracle from '../../assets/illustration/customerLogos/oracle.svg';
import ibm from '../../assets/illustration/customerLogos/ibm.svg';
import yellowCircle from '../../assets/illustration/customerLogos/chart/yellowCircle.png';
import greenCircle from '../../assets/illustration/customerLogos/chart/greenCircle.png';
import purpleCircle from '../../assets/illustration/customerLogos/chart/purpleCircle.png';

const useStyles = makeStyles(theme => ({
    theDiv: {
        //backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0), rgba(235, 233, 238, 0.3))',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        //minHeight: '1000px',
        fontFamily: 'Barlow',
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
        paddingTop: '6em',
        paddingBottom: '6em'
    },
    buttonStyle: {
        backgroundImage: 'linear-gradient(to bottom, #8de1a8, #3cdc7c)',
        height: '48px',
        width: '144px',
        //marginLeft: '-36px',
        boxShadow: '0 7.5px 15px 0 rgba(60, 220, 124, 0.2)',
        color: 'white',
        fontFamily: 'Barlow',
        fontWeight: 600,
        color: 'white',
        border: 'none',
        borderRadius: '25px'
    },
    howItWorksDiv: {
        display: 'grid',
        gridTemplateColumns: '40% 60%'
    },
    howItWorksP: {
        fontWeight: 600,
        lineHeight: 1.25,
        letterSpacing: '-0.1px',
        color: '#11062f',
        fontSize: '2.3em',
        marginBottom: '1em'
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <div className={classes.theDiv}>
            <div></div>
            <div>
                <div className={classes.howItWorksDiv}>
                    <div>
                        <p className={classes.howItWorksP}>Do you want to <br />check how it works?</p>
                        <button className={classes.buttonStyle}>How it works</button>
                    </div>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dolorum vitae vero quae temporibus. Labore nesciunt, dolorem nostrum ex debitis iusto qui earum dicta, veniam alias laudantium in asperiores rem?

                        </p>
                    </div>
                </div>
            </div>

            <div></div>
        </div>
    )
};
