import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/illustration/landing.png';
import '../PageOne/button.css';

const styles = {
    root: {
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
        position: 'fixed',
        top: 0,
        width: '100%'
    },
    theLink: {
        //backgroundColor: '#ffffff',
        fontFamily: 'Barlow',
        fontWeight: 500,
        color: 'white !important'
    },

    gridNav: {
        display: 'grid',
        gridTemplateColumns: '45% 55%',
        paddingTop: '35px'
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
        outline: 'none'
    },
    listGrid: {
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navbarUl: {
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
        border: 'none',
        borderRadius: '25px',
        backgroundColor: 'rgba(0,0,0,0) !important',
        outline: 'none !important',
    },
    navLinkWords: {
        listStyle: 'none',
        color: 'white',
        outline: 'none',
        //paddingBottom: '1em',
        textDecoration: 'none',
        '&:hover': {
            borderBottom: '1.5px solid #3cdc7c',
            borderRadius: '1.8px',
            listStyle: 'none',
            textDecoration: 'none',
            color: 'white'
        },
        '&:focus': {
            borderBottom: '1.5px solid #3cdc7c',
            borderRadius: '1.8px',
        },
        '&:active': {
            borderBottom: '1.5px solid #3cdc7c',
            borderRadius: '1.8px',
        },
        // focusVisible: {
        //     borderBottom: '1.5px solid #3cdc7c',
        //     borderRadius: '1.8px',
        // }
    },
    dynamicColor: {
        backgroundImage: 'radial-gradient(circle at 67% 52%, #2f2255, #11062f)'
    }
};

class Navbar extends Component {
    state = {
        dynamicBackground: false,
        dynamicClass: this.props.classes.dynamicColor
    }
    componentDidMount() {
        //window.addEventListener('scroll', this.handleScroll);
        window.onscroll = () => {
            if (window.pageYOffset === 0) {
                this.setState({
                    dynamicBackground: false
                })
            } else {
                this.setState({
                    dynamicBackground: true
                })
            }
        }
    }

    componentWillUnmount() {
        window.onscroll = null;
      }
    

    handleClassName = () => {
        return this.state.dynamicBackground ? this.state.dynamicClass : '';
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root + ' ' + this.handleClassName()}>
                <div></div>
                <div className={classes.gridNav}>
                    <ul className={classes.navbarUl}>
                        <Link to="/" className={classes.listStyle + ' ' + classes.paddingUl}>
                            <img src={logo} alt="" className={classes.paddingUl} />
                        </Link>
                    </ul>
                    <nav className={classes.navLinkList + ' ' + classes.listStyle}>
                        <ul className={classes.navLinkListSecond}>
                            <li className={classes.theLink + ' ' + classes.listStyle + ' ' + classes.listGrid}>
                                <Link to="/" className={classes.navLinkWords}>How it works</Link>
                                {/* <SmallLine /> */}
                            </li>
                            <li className={classes.theLink + ' ' + classes.listStyle + ' ' + classes.listGrid}>
                                <Link to="/about" className={classes.listStyle + ' ' + classes.navLinkWords}>About us</Link>
                                {/* <SmallLine /> */}
                            </li>
                            <li className={classes.theLink + ' ' + classes.listStyle + ' ' + classes.listGrid}>
                                <NavLink to="/pricing" className={classes.listStyle + ' ' + classes.navLinkWords}>Pricing</NavLink>
                                {/* <SmallLine /> */}
                            </li>
                            <li className={classes.theLink + ' ' + classes.listStyle + ' ' + classes.listGrid}>
                                <NavLink to="/blog" className={classes.listStyle + ' ' + classes.navLinkWords}>Blog</NavLink>
                                {/* <SmallLine /> */}
                            </li>

                            <li className={classes.listStyle + ' ' + classes.listGrid}>
                                <button className={classes.buttonStyle + ' buttonStyle'}>Contact Us</button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div></div>
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);