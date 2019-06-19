import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import howItWorksPageBackground from '../../assets/illustration/howItWorksPageBackground.png';
import big1 from '../../assets/illustration/bigNumbers/big1.svg';
import big2 from '../../assets/illustration/bigNumbers/big2.svg';
import big3 from '../../assets/illustration/bigNumbers/big3.svg';
import big4 from '../../assets/illustration/bigNumbers/big4.svg';
import pictogram1 from '../../assets/illustration/pictogram/pictogram1.svg';
import pictogram2 from '../../assets/illustration/pictogram/pictogram2.svg';
import pictogram3 from '../../assets/illustration/pictogram/pictogram3.svg';
import pictogram4 from '../../assets/illustration/pictogram/pictogram4.svg';

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
    contentSpan: {
        color: '#ffffff',
        fontWeight: 500
    },
    grid3: {
        display: 'grid',
        gridTemplateColumns: '25% 50% 25%',
        backgroundColor: 'white',
        fontFamily: 'Barlow',
        backgroundImage: `url(${howItWorksPageBackground})`,
        paddingTop: '45px',
        paddingBottom: '7em'
    },
    grid2: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        backgroundColor: 'rgba(219, 214, 233, 0.5)',
        gridGap: '2px'
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
    contentRow: {
        display: 'grid',
        gridTemplateColumns: '25% 75%',
        alignItems: 'baseline',
        backgroundColor: 'white',
        paddingTop: '55px',
        paddingLeft: '30px'
    },
    numberImage: {
        paddingBottom: '16px'
    },
    lightP: {
        fontSize: '12px',
        lineHeight: 1.63,
        color: '#7c768a'
    }
};

class HowItWorks extends Component {


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
                                <h2 className={classes.contentH2}>How it works</h2>
                                <div className={classes.line}></div>
                            </div>
                            <p className={classes.contentP}>We use customized and automated solutions for eCommerce and MOTO fraud prevention, 
                            with smooth integration for any platform.
                            </p>
                        </div>

                    </div>
                    <div></div>
                </div>
                <div className={classes.grid3 + ' howItWorksPageGrid3'}>
                    <div></div>
                    <div className={classes.grid2 + ' gridHowItWorksPage'}>
                        <div className={classes.contentRow}>

                            <img src={big1} alt="" className={classes.numberImage} />
                            <img src={pictogram1} alt="" className={classes.pictogram} />

                            <div></div>
                            <p>Snippet of code placed on page</p>

                        </div>
                        <div className={classes.contentRow}>
                            <img src={big2} alt="" className={classes.numberImage} />
                            <img src={pictogram2} alt="" className={classes.pictogram} />
                            <div></div>
                            <p>Over 100 points of data is captured about every customer</p>
                        </div>
                        <div className={classes.contentRow}>
                            <img src={big3} alt="" className={classes.numberImage} />
                            <img src={pictogram3} alt="" className={classes.pictogram} />
                            <div></div>
                            <div>
                                <p>Once order is placed, FraudFix returns a score of either:</p>
                                <p className={classes.lightP}>Safe, Allowed, Unsafe, Fraud</p>
                            </div>

                        </div>
                        <div className={classes.contentRow}>
                            <img src={big4} alt="" className={classes.numberImage} />
                            <img src={pictogram4} alt="" className={classes.pictogram} />
                            <div></div>
                            <p>Automatic rejections or acceptance covers most levels, some may be flagged for manual review by customer</p>
                        </div>
                    </div>
                    <div></div>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(HowItWorks);