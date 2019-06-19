import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import footerLogo from '../../assets/illustration/footerLogo.svg';
import facebook from '../../assets/illustration/social-icons/facebook.svg';
import twitter from '../../assets/illustration/social-icons/twitter.svg';
import instagram from '../../assets/illustration/social-icons/instagram.svg';
import linkedin from '../../assets/illustration/social-icons/linkedin.svg';
import mobileFooter from '../../assets/illustration/logo-footer-mobile.svg';

const useStyles = makeStyles(theme => ({
    theDiv: {
        backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0), rgba(235, 233, 238, 0.3))',
        fontFamily: 'Barlow',
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
        paddingTop: '45px',
    paddingBottom: '15px'
    },
    grid3: {
        display: 'grid',
        gridTemplateColumns: '30% 50% 20%'
    },
    footerP: {
        opacity: 0.75,
        // fontSize: '1em',
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
        gridTemplateColumns: '50% 50%',
        paddingTop: '3em',
        paddingBottom: '2em',
        alignItems: 'baseline'
    },
    copyrightP: {
        opacity: 0.75,
        // fontSize: '1em',
        color: '#655c7a'
    },
    copyrightFooter: {
        display: 'grid',
        gridGap: '15px',
        gridTemplateColumns: 'auto auto auto auto auto auto',
        justifyItems: 'end',
       fontSize: '14px'
    },
    copyrightLink: {
        color: '#11062f'
    },
    footerLogo: {
        maxWidth: '100%'
    },
    mobileLogo: {
        display: 'none'
    }
}
));
 const renderDate = () => {
    return new Date().getFullYear();
}
export default () => {
    const classes = useStyles();
    return (
        <div className={classes.theDiv + ' footerMain'}>
            <div></div>
            <div>
                <div className={classes.grid3 + ' footerGrid3'}>
                    <div>
                    <NavLink to="/" ><img src={footerLogo} alt="" className={classes.footerLogo + ' largeScreenFooterLogo'}/></NavLink>
                    <NavLink to="/" ><img src={mobileFooter} alt="" className={classes.mobileLogo + ' mobileFooterLogo'}/></NavLink>
                    </div>
                    <div></div>
                    <div className={classes.gridLogos + ' footerGridLogos'}>
                        <a className="socialLogos" href="https://www.facebook.com/FraudFix-514485039382925/?modal=admin_todo_tour"><img src={facebook} alt=""/></a>
                        <a className="socialLogos" href="https://twitter.com/RealFraudFix"><img src={twitter} alt=""/></a>
                        <a className="socialLogos" href="https://www.instagram.com/realfraudfix/"><img src={instagram} alt=""/></a>
                        <a className="socialLogos" href="https://www.linkedin.com/company/fraudfix-com/"><img src={linkedin} alt=""/></a>
                    </div>
                </div>

                <div className={classes.copyright + ' copyright'}>
                    <div>
                        <p className={classes.copyrightP + ' copyrightP'}>Copyright &copy; {renderDate()} by FraudFix. All rights reserved</p>
                    </div>
                    <div className={classes.copyrightFooter + ' copyrightFooter'}>
                        <div><NavLink to="/" className={classes.copyrightLink}>Homepage </NavLink></div>
                        <div><NavLink to="/howitworks"  className={classes.copyrightLink}>How it works</NavLink></div>
                        <div><NavLink to="/about"  className={classes.copyrightLink}>About us</NavLink></div>
                        <div><NavLink to="/pricing"  className={classes.copyrightLink}>Pricing</NavLink></div>
                        <div><NavLink to="/blog"  className={classes.copyrightLink}>Blog</NavLink></div>
                        <div><NavLink to="/contact"  className={classes.copyrightLink}>Contact us</NavLink></div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
};
