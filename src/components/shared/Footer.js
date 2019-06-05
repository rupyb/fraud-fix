import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import footerLogo from '../../assets/illustration/footerLogo.svg';

const useStyles = makeStyles(theme => ({
    theDiv: {
        backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0), rgba(235, 233, 238, 0.3))',
        fontFamily: 'Barlow',
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
    },
    grid3: {
        display: 'grid',
        gridTemplateColumns: '35% 40% 25%'
    },
    footerP: {
        opacity: 0.75,
        fontSize: '1em',
        lineHeight: 1.76,
        color: '#655c7a'
    },
    gridLogos: {
        display: 'grid',
        gridTemplateColumns: '20% 20% 20% 20% 20%',
        justifyItems: 'end'
    },
    copyright: {
        display: 'grid',
        gridTemplateColumns: '55% 45%'
    },
    copyrightP: {
        opacity: 0.75,
        fontSize: '1em',
        color: '#655c7a'
    },
    copyrightFooter: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto auto auto',
        justifyItems: 'end'
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
                        <div>F</div>
                        <div>G</div>
                        <div>Bi</div>
                        <div>Ca</div>
                        <div>in</div>
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
