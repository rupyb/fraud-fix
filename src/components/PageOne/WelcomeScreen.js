import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import hero from '../../assets/illustration/hero.svg';
import './button.css';
import * as emailjs from 'emailjs-com';
import arrowButton from '../../assets/illustration/icon/send.svg';

const styles = {
    gridMaster: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        paddingTop: '41px',
        paddingBottom: '40px',
        gridGap: '20px'
    },
    fontSize: {
        fontFamily: 'Barlow',
        fontSize: '60px',
        lineHeight: 1.07,
        letterSpacing: '-0.1px',
        color: '#ffffff',
        paddingBottom: '35px'
    },
    divForImage: {
        paddingTop: '60px',
        paddingLeft: '40px',
        marginLeft: '40px',
        width: '80%'
    },
    common: {
        color: 'white !important',
        border: 'none',
        borderRadius: '25px 0px 0px 25px',
        outline: 'none !important',
    },
    buttonInput: {
        backgroundColor: 'rgba(47, 34, 85, 0.5) !important',
        height: '50px',
        paddingLeft: '20px',
        zIndex: -1,
        width: '300px',
        paddingRight: '21px'
    },
    buttonStyle: {
        backgroundImage: 'linear-gradient(to bottom, #8de1a8, #3cdc7c)',
        height: '50px',
        width: '118px',
        marginLeft: '-36px',
        color: 'white',
        fontFamily: 'Barlow',
        fontWeight: 600,
        zIndex: 10,
        opacity: 1,
        borderRadius: '25px'
    },
    leftColumn: {
        paddingTop: '193px'
    },
    alignImage: {
        textAlign: 'end'
    },
    imageScreen: {
        width: '100%'
    },
    mobileButton: {
        display: 'none',
        backgroundImage: 'linear-gradient(to bottom, #8de1a8, #3cdc7c)',
        border: 'none',
        borderRadius: '25px',
        outline: 'none !important',
        height: '50px',
        width: '50px',
        marginLeft: '-21px',
        paddingTop: '6px',
        zIndex: 10,
        opacity: 1
    }
};

class WelcomeScreen extends Component {
    state = {
        activeButton: '',
        activeInput: '',
        activeInputMobile: '',
        placeholder: 'Your e-mail',
        email: '',
        activeDrags: 0,
        locked: false,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.locked) {
            emailjs.sendForm('default_service', process.env.REACT_APP_EMAIL_TEMPLATE_ID, '#theInputForm', process.env.REACT_APP_EMAILJS_USER_ID)
                .then((response) => {
                    this.setState({
                        activeButton: 'theSlideButton',
                        activeInput: window.innerWidth < 389 ? 'theMobileSlideInput' : 'theSlideInput',
                    });
                    setTimeout(() => {
                        this.setState({
                            email: this.state.email.slice(0, 15),
                            placeholder: ''
                        });
                    }, 500);
                    setTimeout(() => {
                        this.setState({
                            placeholder: 'Thank you for your interest!',
                            email: 'Thank you for your interest!',
                            locked: true
                        });
                    }, 3000);
                }, (err) => {
                    console.log('FAILED...', err);
                });
        } 
    }

    handleChange = e => {
        this.setState({
            email: e.target.value
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.gridMaster + ' gridMaster'}>
                <div className="">
                    <div className={classes.leftColumn + ' leftColumn'}>
                        <p className={classes.fontSize + ' welcomeHeader'}>We obsess over fraud so you can obsess over your business</p>
                        <form onSubmit={this.handleSubmit} id="theInputForm">
                            <input type="email" className={classes.buttonInput + ' ' + classes.common + ' theInput ' + this.state.activeInput}
                                ref={input => this.inputElement = input} value={this.state.email} name="email"
                                readOnly={this.state.locked}
                                onChange={this.handleChange} placeholder={this.state.placeholder} required />
                            <button
                                className={classes.buttonStyle + ' ' + classes.common + ' ' + this.state.activeButton + ' theButton'}>
                            </button>
                            <button className={classes.mobileButton + ' mobileButton'}>
                                <img src={arrowButton} alt="" />
                            </button>
                        </form>
                    </div>
                </div>
                <div className={classes.alignImage + ' rightSideImage'}>
                    <div className={classes.divForImage + ' divForImage'}>
                        <img src={hero} alt="" className={classes.imageScreen + ' bigImage'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(WelcomeScreen);
