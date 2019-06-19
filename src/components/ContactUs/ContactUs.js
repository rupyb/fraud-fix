import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import howItWorksPageBackground from '../../assets/illustration/howItWorksPageBackground.png';
import phoneIcon from '../../assets/illustration/icon/phone.svg';
import * as emailjs from 'emailjs-com';
import checkSymbol from '../../assets/illustration/icon/check-symbol.svg';


const styles = {
    content: {
        textAlign: 'center',
        fontFamily: 'Barlow',
    },
    contentH2: {
        fontWeight: 600,
        lineHeight: 1.19,
        letterSpacing: '-0.1px',
        fontSize: '3em',
        paddingBottom: '.5em'
    },
    contentP: {
        lineHeight: 1.6,
        color: '#e1dbf1',
        fontSize: '1.2em',
        fontWeight: 'normal',
        paddingTop: '2em',
        width: '80%',
        margin: '0 auto'
    },
    grid3: {
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
        backgroundColor: 'white',
        fontFamily: 'Barlow',
        backgroundImage: `url(${howItWorksPageBackground})`,
        paddingTop: '7em',
        paddingBottom: '7em'
    },
    grid2: {
        display: 'grid',
        gridTemplateColumns: '35% 65%',
    },
    line: {
        height: '3.5px',
        width: '44px',
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(to left, #95ebb1, #3cdc7c)',
        borderImageSlice: 1,
        borderBottom: '1px',
        justifySelf: 'center'
    },
    gridLine: {
        display: 'grid',
        justifyContent: 'center'
    },
    smallLine: {
        height: '2.7px',
        width: '40px',
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(to left, #95ebb1, #3cdc7c)',
        borderImageSlice: 1,
        borderBottom: '1px'
    },
    formDiv: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '15px',
        color: '#afa6c5',
        fontSize: '14px'
    },
    textArea: {
        gridColumn: '1 / span 2',
        width: '100%',
        height: '113px',
        borderRadius: '40px',
        backgroundColor: 'rgba(219, 214, 233, 0.2)',
        border: 'none',
        paddingLeft: '18px',
        paddingTop: '15px',
        outline: 'none'
    },
    input: {
        height: '50px',
        borderRadius: '40px',
        backgroundColor: 'rgba(219, 214, 233, 0.2)',
        border: 'none',
        paddingLeft: '18px',
        outline: 'none',
        width: '100%'
    },
    buttonStyle: {
        backgroundImage: 'linear-gradient(to bottom, #8de1a8, #3cdc7c)',
        height: '48px',
        width: '144px',
        boxShadow: '0 7.5px 15px 0 rgba(60, 220, 124, 0.2)',
        color: 'white',
        fontFamily: 'Barlow',
        fontWeight: 600,
        border: 'none',
        borderRadius: '25px',
        outline: 'none !important',
    },
    questionDiv: {
        color: '#11062f'
    },
    questionP: {
        fontSize: '30px',
        fontWeight: 600,
        letterSpacing: '-0.1px',
        margin: 0,
        paddingBottom: '10px'
    },
    lineDiv: {
        paddingTop: '26px',
        paddingBottom: '40px'
    },
    callP: {
        fontWeight: 500
    },
    numberSpan: {
        fontSize: '30px',
        fontWeight: 500,
        verticalAlign: 'middle',
        paddingLeft: '13px'
    },
    successEmail: {
        borderRadius: '24px',
        backgroundColor: 'rgba(60, 220, 124, 0.1)',
        height: '50px',
        marginBottom: '30px',
        alignItems: 'center',
        color: '#3cdc7c',
        fontSize: '16px',
        fontWeight: 500,
    },
    successImg: {
        maxWidth: '23px',
        marginRight: '12px'
    },
    successInnerDiv: {
        paddingLeft: '18px',
        width: '100%'
    },
    phoneDiv: {

    }
};

class ContactUs extends Component {
    state = {
        from_name: '',
        phone: '',
        company_name: '',
        email: '',
        message: '',
        display: 'none'
    }
    handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('default_service', process.env.REACT_APP_EMAIL_TEMPLATE_ID, '#theForm', process.env.REACT_APP_EMAILJS_USER_ID)
            .then((response) => {
                this.setState({
                    from_name: '',
                    phone: '',
                    company_name: '',
                    email: '',
                    message: '',
                    display: 'grid'
                });
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className="contactusMainGrid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '15% 70% 15%',
                        backgroundImage: `url('bg.png')`, color: 'white',
                        paddingTop: '10em',
                        paddingBottom: '6em'
                    }}>
                    <div></div>
                    <div>
                        <div className={classes.content}>
                            <div className={classes.gridLine}>
                                <h2 className={classes.contentH2}>Contact Us</h2>
                                <div className={classes.line}></div>
                            </div>
                            <p className={classes.contentP + ' contactUsContentP'}>We are super responsive to your requests and value your questions. You can expect us to respond within the same business day, and would love to talk with you.</p>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className={classes.grid3 + ' contactUsGrid3'}>
                    <div></div>
                    <div className={classes.grid2 + ' contactUsGrid2'}>
                        <div className={classes.questionDiv}>
                            <div >
                                <p className={classes.questionP}>Questions?</p>
                                <p className={classes.questionP}>We have answers</p>
                            </div>
                            <div className={classes.lineDiv}>
                                <div className={classes.smallLine + ' smallLineContactUs'}></div>
                            </div>

                            <p className={classes.callP}>Give us a call today or shoot us your questions here.</p>
                            <div className={classes.phoneDiv + ' phoneDiv'}>
                                <img src={phoneIcon} alt="" />
                                <span className={classes.numberSpan}>888.470.1933</span>
                            </div>
                        </div>
                        <div>
                            <div className={classes.successEmail  + ' successEmail'} style={{ display: this.state.display }}>
                                <div className={classes.successInnerDiv}>
                                    <img src={checkSymbol} alt="" className={classes.successImg} />
                                    <span>Your email has been sent</span>
                                </div>

                            </div>
                            <form onSubmit={this.handleSubmit} id="theForm">
                                <div className={classes.formDiv + ' contactUsFormDiv'}>
                                    <div className="inputItem">
                                        <input type="text" placeholder="Name" name="from_name" className={classes.input + ' inputForMobile'}
                                            value={this.state.from_name} onChange={this.handleChange} required />
                                    </div>
                                    <div className="inputItem">
                                        <input type="email" placeholder="E-mail" name="email" className={classes.input + ' inputForMobile'}
                                            value={this.state.email} onChange={this.handleChange} required />
                                    </div>
                                    <div className="inputItem">
                                        <input type="text" placeholder="Phone" name="phone" className={classes.input + ' inputForMobile'}
                                            value={this.state.phone} onChange={this.handleChange} required />
                                    </div>
                                    <div className="inputItem">
                                        <input type="text" placeholder="Company site" name="company_name" className={classes.input + ' inputForMobile'}
                                            value={this.state.company_name} onChange={this.handleChange} required />
                                    </div>
                                   
                                        <textarea className={classes.textArea + ' inputForMobile inputTextarea'}
                                            name="message" cols="30" rows="10" placeholder="Your e-mail"
                                            value={this.state.message} onChange={this.handleChange} required></textarea>
                                    
                                    <div className="inputItem">
                                        <button className={classes.buttonStyle}>Send message</button>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                    <div></div>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(ContactUs);