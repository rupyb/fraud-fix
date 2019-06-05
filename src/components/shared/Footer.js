import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, Link } from 'react-router-dom';
import footerLogo from '../../assets/illustration/footerLogo.svg';
import facebook from '../../assets/illustration/social-icons/facebook.svg';
import twitter from '../../assets/illustration/social-icons/twitter.svg';
import instagram from '../../assets/illustration/social-icons/instagram.svg';
import linkedin from '../../assets/illustration/social-icons/linkedin.svg';

const useStyles = makeStyles(theme => ({
    theDiv: {
        backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0), rgba(235, 233, 238, 0.3))',
        fontFamily: 'Barlow',
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
    },
    grid3: {
        display: 'grid',
        gridTemplateColumns: '30% 50% 20%'
    },
    footerP: {
        opacity: 0.75,
        fontSize: '1em',
        lineHeight: 1.76,
        color: '#655c7a'
    },
    gridLogos: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        justifyItems: 'end'
    },
    copyright: {
        display: 'grid',
        gridTemplateColumns: '55% 45%',
        paddingTop: '3em',
        paddingBottom: '2em'
    },
    copyrightP: {
        opacity: 0.75,
        fontSize: '1em',
        color: '#655c7a'
    },
    copyrightFooter: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto auto auto',
        justifyItems: 'end',
       
    },
    copyrightLink: {
        color: '#11062f'
    },
    footerLogo: {
        maxWidth: '100%'
    }
}
));

export default () => {
    const classes = useStyles();
    return (
        <div className={classes.theDiv}>
            <div></div>
            <div>
                <div className={classes.grid3}>
                    <NavLink to="/" ><img src={footerLogo} alt="" className={classes.footerLogo}/></NavLink>
                    <div></div>
                    <div className={classes.gridLogos}>
                        <a href="https://www.facebook.com"><img src={facebook} alt=""/></a>
                        <a href="https://www.twitter.com"><img src={twitter} alt=""/></a>
                        <a href="https://www.instagram.com"><img src={instagram} alt=""/></a>
                        <a href="https://www.linkedin.com"><img src={linkedin} alt=""/></a>
                    </div>
                </div>

                <div className={classes.copyright}>
                    <div>
                        <p className={classes.copyrightP}>Copyright 2019 by FraudFix. All rights reserved</p>
                    </div>
                    <div className={classes.copyrightFooter}>
                        <div><NavLink to="/" className={classes.copyrightLink}>Homepage </NavLink></div>
                        <div><NavLink to="/"  className={classes.copyrightLink}>How it works</NavLink></div>
                        <div><NavLink to="/about"  className={classes.copyrightLink}>About us</NavLink></div>
                        <div><NavLink to="/pricing"  className={classes.copyrightLink}>Pricing</NavLink></div>
                        <div><NavLink to="/blog"  className={classes.copyrightLink}>Blog</NavLink></div>
                        <div><NavLink to="/"  className={classes.copyrightLink}>Contact us</NavLink></div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
};
