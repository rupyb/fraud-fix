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
        gridTemplateColumns: '20% 60% 20%',
        backgroundColor: 'white',
        fontFamily: 'Barlow',
        backgroundImage: `url(${aboutUsBottomBackground})`,
        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
        paddingTop: '7em',
        paddingBottom: '7em'
    },
    grid2: {
        display: 'grid',
        gridTemplateColumns: '0.5fr 2.2fr',
        gridGap: '70px'
    },
    grid2P: {
        fontSize: '2em',
        fontWeight: 600,
        color: '#11062f',
        maxWidth: '150px',
        lineHeight: 1.25,
        letterSpacing: '-0.1px'
    },
    grid2Column: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        lineHeight: 1.63,
        color: '#655c7a',
        gridGap: '3em',
        paddingTop: '20px'
    },
    commentHeader: {
        fontWeight: 600,
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
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
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
                            <p className={classes.contentP}>
                                E-commerce fraud prevention is not just our business it's our obsession, 
                                that's how we are able to approve up to 
                      98.5%.
                      
                            </p>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className={classes.grid3 + ' aboutPageGrid3'}>
                    <div></div>
                    <div className={classes.grid2 + ' aboutusGrid2'}>
                        <div className="hideMobile">
                            <p className={classes.grid2P}>Maximize your <span style={{color: '#3CDC7C'}}>revenue</span>  today</p>
                            <div className={classes.line}></div>
                        </div>
                        <div>
                            <p className={classes.commentHeader}>
                            FraudFix, formerly eFraud Security, was founded over a decade ago. 
                            Our primary focus is to offer a fully-automated verification service with pricing 
                            roughly 30-40% lower than any in-house solution. 
                            </p>
                            <div className={classes.grid2Column + ' aboutusGrid2'}>
                                <div>
                                    <p>In fact, we were the pioneers of credit card verification services, and continue to lead the industry over 
                            a decade later. With rates as low as 5¢ per transaction and only a quarter percent for our optional guarantee, 
                            FraudFix’s pricing is a no-brainer. Additionally, FraudFix does not charge any setup fees, monthly fees, or 
                            lock merchants into long-term contracts.</p>
                                </div>
                                <div>
                                    <p>We specialize in high volume B2B and B2C eCommerce merchants, brick and mortar retailers with a CNP or MOTO (mail order/ telephone order) 
                                        channel, amongst a wide array of other industries. We service Credit Card Processors & IT Resellers.</p>

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