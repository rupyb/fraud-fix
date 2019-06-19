import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import aboutUsBottomBackground from '../../assets/illustration/aboutUsBottomBackground.png';

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
    },
    contentSpan: {
        color: '#ffffff',
        fontWeight: 500
    },
    grid3: {
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
        backgroundColor: 'white',
        fontFamily: 'Barlow',
        backgroundImage: `url(${aboutUsBottomBackground})`,
        paddingTop: '7em',
        paddingBottom: '7em'
    },
    grid2: {
        display: 'grid',
        gridTemplateColumns: '1fr 2.2fr',
        gridGap: '20px'
    },
    grid2P: {
        fontSize: '2em',
        fontWeight: 600,
        color: '#11062f',

        lineHeight: 1.25,
        letterSpacing: '-0.1px'
    },
    grid2Column: {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        lineHeight: 1.63,
        color: '#655c7a',
        gridGap: '3em'
    },
    commentHeader: {
        fontWeight: 500,
        lineHeight: 1.58,
        color: '#11062f'
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
};

class About extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div
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
                                <h2 className={classes.contentH2}>About us</h2>
                                <div className={classes.line}></div>
                            </div>
                            <p className={classes.contentP}>E-commerce fraud prevention is not just our business it's our obsession, that's how we're able
                            <br />
                                to give the highest approval ratings in the industry -
                            <span className={classes.contentSpan}>93.5% approvals on average.</span>
                            </p>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className={classes.grid3 + ' aboutPageGrid3'}>
                    <div></div>
                    <div className={classes.grid2 + ' aboutusGrid2'}>
                        <div>
                            <p className={classes.grid2P}>Maximize your revenue today <br/> and join ranks <br/>with our satisfied clients!</p>
                        </div>
                        <div>
                            <p className={classes.commentHeader}>
                            We specialize in high volume B2B and B2C eCommerce merchants, brick and mortar 
                            retailers with a CNP or MOTO (mail order/ telephone order) channel, amongst a wide array 
                            of other industries. We service Credit Card Processors & IT Resellers. For resellers, we offer 
                            discounted pricing and a customized reseller’s portal.</p>
                            <div className={classes.grid2Column + ' aboutusGrid2'}>
                                <div>
                                    <p>At FraudFix, formerly eFraud Security, our primary focus is to offer a 
                                        fully-automated verification service with pricing roughly 30-40% lower than any in-house solution – with a full i
                                        nsurance guarantee! In fact, FraudFix is the pioneer of credit card verification with a guarantee and led the 
                                        industry before competition arose. At rates as low as 5¢ per transaction and only a quarter percent for optional guarantee, 
                                        FraudFix’s pricing is a no-brainer. 
                                        Additionally, FraudFix does not charge any setup fees, monthly fees, or lock merchants into long-term contracts.</p>
                                </div>
                                <div>
                                    <p>FraudFix offers a smooth, automated verification process. 
                                        Not only does it offer high transaction approval rates, 
                                        but it also accepts the risk – preventing 
                                        fraudulent orders, increasing approval rates, and ultimately driving your 
                                        company’s revenue forward. …Because more approvals mean more money!</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(About);