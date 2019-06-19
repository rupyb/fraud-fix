import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/illustration/customerLogos/logo/landing.svg';
import smallLogo from '../../assets/illustration/logo-landing-mobile.svg';
import Drawer from '@material-ui/core/Drawer';
import './mediaStyles.css';
import { TiThMenu } from "react-icons/ti";

const styles = {
    root: {
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 200
    },
    theLink: {
        fontFamily: 'Barlow',
        fontWeight: 500,
        color: 'white !important'
    },
    gridNav: {
        display: 'grid',
        gridTemplateColumns: '45% 55%',
        paddingTop: '35px'
    },
    navLinkListSecond: {
        display: 'grid',
        gridTemplateColumns: '0.8fr 1.3fr 1fr 1fr 0.7fr 1.4fr',
        justifyContent: 'space-evenly',
        gridGap: '5px'
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
        paddingTop: '2px'
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
        textDecoration: 'none',
        paddingBottom: '15px',
        paddingTop: '15px',
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

            borderRadius: '1.8px',
        },
    },
    dynamicColor: {
        backgroundColor: '#11062f'
    },
    mobileLogo: {
        display: 'none',
    },
    mobileDrawer: {
        display: 'none'
    },
    mobileButton: {
        backgroundColor: 'transparent',
        color: 'white',
        height: '42px',
        width: '42px',
        border: 0,
        outline: 'none !important'
    },
    paper: {
        width: '60%',
        height: '400px',
        textAlign: 'left',
        backgroundColor: '#11062f',
        borderRadius: '25px 0px 0px 25px',
        color: 'white',
        paddingTop: '20px'
    },
    fullList: {
        margin: '0 auto',
        paddingTop: '30px',

    },
    linkColor: {
        color: 'white',

        fontWeight: 600,
        lineHeight: 1.75,
        letterSpacing: '-0.1px',
        '&:hover': {
            textDecoration: 'none !important',
            listStyle: 'none',
            color:'#3cdc7c'
        },
        '&:visited': {
            textDecoration: 'none',
            listStyle: 'none',
            // color: 'rgba(219, 214, 233, 0.5)'
        },
        '&:active': {
            textDecoration: 'none',
            listStyle: 'none',
            //color: 'red'
        }
    },
    activeLinkMobile: {
        color: '#3cdc7c',

    },
    visitedLink: {
        color: 'rgba(219, 214, 233, 0.5)'
    },
    icon: {
        width: '100%'
    },
    aLink: {
        paddingLeft: '16px',
        '&:hover': {
            //color: 'green'
        }
    },
    listClass: {
        textDecoration: 'none',
        listStyle: 'none',
        paddingBottom: '20px',
    }
};

class Navbar extends Component {
    state = {
        dynamicBackground: false,
        dynamicClass: this.props.classes.dynamicColor,
        openMenu: false,
        active: '',
        visitedLink: []
    }
    componentDidMount() {
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

    toggleDrawer = (open) => {
        this.setState({
            openMenu: open,
        })
    }

    fullList = () => {
        const { classes } = this.props;
        const menu = [
            { text: 'Home', link: '/', active: false },
            { text: 'How it works', link: '/howitworks', active: false },
            { text: 'About us', link: '/about', active: false },
            { text: 'Pricing', link: 'pricing', active: false },
            { text: 'Blog', link: '/blog', active: false },
            { text: 'Contact us', link: '/contact', active: false }
        ];
        return (
            <div
                className={classes.fullList}
                role="presentation"
                onClick={() => this.toggleDrawer(false)}
                onKeyDown={() => this.toggleDrawer(false)}>
                <ul className={classes.linkColor}>
                    <li className={classes.listClass}>
                        <a style={{display: 'none'}}  
                        className={classes.linkColor + ' linkMobile ' + classes.aLink}
                            href="https://cardprober.net/Portal/Account/Login.aspx?ReturnUrl=%2fportal">Login</a>
                    </li>
                    {menu.map((item, index) => {
                        let dynamoColor = 'white';
                        if (this.state.active === item.text) {
                            dynamoColor = classes.activeLinkMobile;
                        } else if (this.state.visitedLink.includes(item.text)) {
                            dynamoColor = classes.visitedLink;
                        }
                        return (
                            <li className={classes.listClass} key={item.text}>
                                <RouterLink className={classes.linkColor + ' linkMobile ' + classes.aLink + ' ' + dynamoColor}
                                    key={item.link}
                                    onClick={() => this.handleClick(item.text)}
                                    to={item.link}>{item.text}
                                </RouterLink>
                                </li>)
                    }
                    )}
                </ul>
            </div>
        )
    }

    handleClick = (data) => {
        this.setState({
            active: window.innerWidth < 723 ? data : '',
            visitedLink: [...this.state.visitedLink, data]
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root + ' navroot ' + this.handleClassName()}>
                <div></div>
                <div className={classes.gridNav + ' navbar-grid'}>
                    <ul className={classes.navbarUl + ' navbarLogo'}>
                        <RouterLink to="/" className={classes.listStyle + ' ' + classes.paddingUl}>
                            <img src={logo} alt="" className={classes.paddingUl + ' bigFraudFixLogo'} />
                            <img src={smallLogo} alt="" className={classes.paddingUl + ' ' + classes.mobileLogo + ' smallFraudFixLogo'} />
                        </RouterLink>
                    </ul>
                    <nav className={classes.navLinkList + ' ' + classes.listStyle + ' navbarMenuList'}>
                        <ul className={classes.navLinkListSecond + ' navbarUl'}>
                            <li className={classes.theLink + ' ' + classes.listStyle + ' ' + classes.listGrid}>
                                <a style={{visibility: 'hidden'}} 
                                href="https://cardprober.net/Portal/Account/Login.aspx?ReturnUrl=%2fportal" className={classes.navLinkWords}>Login</a>
                            </li>
                            <li className={classes.theLink + ' ' + classes.listStyle + ' ' + classes.listGrid}>
                                <RouterLink to="/howitworks" className={classes.navLinkWords}>How it works</RouterLink>
                            </li>
                            <li className={classes.theLink + ' ' + classes.listStyle + ' ' + classes.listGrid}>
                                <RouterLink to="/about" className={classes.listStyle + ' ' + classes.navLinkWords}>About us</RouterLink>
                            </li>
                            <li className={classes.theLink + ' ' + classes.listStyle + ' ' + classes.listGrid}>
                                <NavLink to="/pricing" className={classes.listStyle + ' ' + classes.navLinkWords}>Pricing</NavLink>
                            </li>
                            <li className={classes.theLink + ' ' + classes.listStyle + ' ' + classes.listGrid}>
                                <NavLink to="/blog" className={classes.listStyle + ' ' + classes.navLinkWords}>Blog</NavLink>
                            </li>
                            <li className={classes.listStyle + ' ' + classes.listGrid}>
                                <NavLink to="/contact"><button className={classes.buttonStyle}>Contact Us</button></NavLink>
                            </li>
                        </ul>

                        <div className={classes.mobileDrawer + ' mobileDrawer'}>
                            <button className={classes.mobileButton}
                                onClick={() => this.toggleDrawer(true)}><TiThMenu size={30} /></button>
                            <Drawer
                                classes={{ paper: classes.paper }} anchor="right"
                                open={this.state.openMenu} onClose={() => this.toggleDrawer(false)}>
                                {this.fullList()}
                            </Drawer>
                        </div>
                    </nav>
                </div>
                <div></div>
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);