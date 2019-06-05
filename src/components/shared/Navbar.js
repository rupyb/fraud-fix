import React, { Component } from 'react';
import Button from '../PageOne/ui/Button';
import SmallLine from '../PageOne/ui/smallLine';
import { withStyles } from '@material-ui/styles';
import { NavLink } from 'react-router-dom'
import logo from '../../assets/illustration/landing.png';
import '../PageOne/button.css';

const styles = {
    theLink: {
        //backgroundColor: '#ffffff',
        fontFamily: 'Barlow',
        //fontSize: '8.5px',
        fontWeight: 500,
        color: 'white !important'
    },
    
    gridNav: {
        display: 'grid',
        gridTemplateColumns: '45% 55%',
        paddingTop: '25px'
    },
    navLinkList: {
        // display: 'grid',
        // gridTemplateColumns: '80% 20%'
    },
    navLinkListSecond: {
        display: 'grid',
        gridTemplateColumns: '20% 20% 20% 20% 20%',
        justifyContent: 'space-evenly'
    },
    listStyle: {
        listStyle: 'none',
        color: 'white',
        
    },
    listGrid: {
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navbarUl : {
        paddingLeft: 0,
        marginBottom: 0,
    },
    paddingUl: {
        paddingTop: '8px'
    },
    buttonStyle: {
        backgroundImage: 'linear-gradient(to bottom, rgba(151, 20, 244, 0.2), rgba(96, 0, 164,0.2))',
        height: '50px',
        width: '118px',
        color: 'white',
        fontFamily: 'Barlow',
        fontWeight: 500,
        color: 'white',
        border: 'none',
        borderRadius: '25px',
        fontFamily: 'Barlow',
        backgroundColor: 'rgba(0,0,0,0) !important',
        outline: 'none !important',
    },
};

class Navbar extends Component {
    state = {}
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.gridNav}>


                <ul className={classes.navbarUl}>
                    <NavLink to="/" className={classes.listStyle + ' ' + classes.paddingUl}>
                        <img src={logo} alt="" className={classes.paddingUl}/>
                    </NavLink>
                </ul>
                <nav className={classes.navLinkList + ' ' + classes.listStyle}>
                    <ul className={classes.navLinkListSecond}>
                        <li className={classes.theLink + ' ' + classes.listStyle  + ' ' + classes.listGrid}>
                            <a className=''>How it works</a>
                            <SmallLine />
                        </li>
                        <li className={classes.theLink + ' ' + classes.listStyle   + ' ' + classes.listGrid}>
                            <NavLink to="/about" className={classes.listStyle}>About us</NavLink>
                            <SmallLine />
                        </li>
                        <li className={classes.theLink + ' '+ classes.listStyle  + ' ' + classes.listGrid}>
                        <NavLink to="/pricing" className={classes.listStyle}>Pricing</NavLink>
                            <SmallLine />
                        </li>
                        <li className={classes.theLink + ' '+ classes.listStyle  + ' ' + classes.listGrid}>
                        <NavLink to="/blog" className={classes.listStyle}>Blog</NavLink>
                            <SmallLine />
                        </li>
                   
                        <li className={classes.listStyle  + ' ' + classes.listGrid}>
                        <button className={classes.buttonStyle + ' buttonStyle'}>Contact Us</button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);