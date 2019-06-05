import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import smallGreenCircle from '../../assets/illustration/oval/smallGreenCircle.svg';
import smallPurpleCircle from '../../assets/illustration/oval/smallPurpleCircle.svg';
import smallYellowCircle from '../../assets/illustration/oval/smallYellowCircle.svg';
import padlock from '../../assets/illustration/padlock.svg';
import target from '../../assets/illustration/target.svg';
import fingerprint from '../../assets/illustration/fingerprint.svg';
import desktop from '../../assets/illustration/desktop.svg';
import shield from '../../assets/illustration/shield.svg';
import Group2 from '../../assets/illustration/Group2.png';


const useStyles = makeStyles(theme => ({
    div: {
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
        paddingTop: '6em',
        justifyItems: 'center',
        paddingBottom: '6em',
        backgroundImage: `url(${Group2})`
    },
    centerDiv: {
        display: 'grid',
        justifyItems: 'center',
        //marginBottom: '1em'
    },
    p: {
        fontFamily: 'Barlow',
        fontSize: '3.1em',
        fontWeight: 600,
        lineHeight: 0.93,
        letterSpacing: '-0.1px',
        color: '#11062f',
        paddingBottom:'15px'
    },
    smallLine: {
        height: '3.5px',
        width: '44px',
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(to left, #95ebb1, #3cdc7c)',
        borderImageSlice: 1,
        borderBottom: '1px'

    },
    divTwoColumns: {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        paddingTop: '5em'
    },
    chargeBack: {
        fontFamily: 'Barlow',
        lineHeight: 1.11,
        color: '#11062f',
        fontWeight: 600,
        fontSize: '2em'
    },
    chargeBackP: {
        fontFamily: 'Barlow',
        lineHeight: 1.53,
        color: '#7c768a'
    },
    greenCircle: {
        width: '15px',
        height: '15px',
        backgroundImage: 'linear-gradient(225deg, #95ebb1, #3cdc7c)'
    }
}));
export default () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.div}>
                <div></div>
                <div >
                    <div className={classes.centerDiv}>
                        <p className={classes.p}>What we do</p>
                        <div className={classes.smallLine}></div>
                    </div>

                    <div className={classes.divTwoColumns}>
                    <img src={padlock} alt=""/>
                        <div>
                            <img src={smallGreenCircle} alt=""/>
                            <h3 className={classes.chargeBack}>Chargeback protection</h3>
                            <p className={classes.chargeBackP}>Chargebacks are bleeding your business dry. What if you
                                 <br />
                                could predict a future chargeback before
                                even accepting
                                 <br />
                                the order? What if, it was all taken care of behind the
                                 <br />
                                scenes. Hang out the open
                                sign on your business, we'll
                                 <br />
                                guard the door.
                             </p>
                        </div>
                    </div>

                    <div className={classes.divTwoColumns}>
                        <div>
                        <img src={smallPurpleCircle} alt=""/>
                            <div >
                                <h3 className={classes.chargeBack}>Highest Approval rates</h3>
                                <p className={classes.chargeBackP}>
                                    Stop choosing between declining good orders and
                                <br />
                                    preventing fraud. FraudFix can help you automate your
                                <br />
                                    approvals by as much as 98%, maximize profits without
                                <br />
                                    the cost of fraud.
                            </p>
                            </div>
                        </div>
                        <img src={target} alt=""/>
                    </div>

                    <div className={classes.divTwoColumns}>
                    <img src={fingerprint} alt=""/>
                        <div>
                        <img src={smallYellowCircle} alt=""/>
                            <h3 className={classes.chargeBack}>Fastest approval</h3>
                            <p className={classes.chargeBackP}>
                                Look, your customers aren't goinng to wait around while their
                                 <br />
                                orders get checked, and your business can't run on a delay,
                                 <br />
                                Don't settle for less than a one second fraud check.
                                 <br />
                                Guaranteed.
                             </p>
                        </div>
                    </div>

                    <div className={classes.divTwoColumns}>
                        <div>
                        <img src={smallGreenCircle} alt=""/>
                            <div >
                                <h3 className={classes.chargeBack}>
                                    All fraud prevention 
                                    <br/>
                                    rules are managed by us
                                </h3>
                                <p className={classes.chargeBackP}>
                                    Fraud is our obsession, not yours. While some tools make
                                <br />
                                    you do the work, we manage all the fraud and customize
                                <br />
                                    a solution for your business. Customized solutions without
                                <br />
                                    the hassle? Now that's fraud done right.
                            </p>
                            </div>
                        </div>
                        <img src={desktop} alt=""/>
                    </div>

                    <div className={classes.divTwoColumns}>
                    <img src={shield} alt=""/>
                        <div>
                        <img src={smallPurpleCircle} alt=""/>
                            <h3 className={classes.chargeBack}>
                            Chargeback
                            <br/>
                            Prevention Guarantee
                            </h3>
                            <p className={classes.chargeBackP}>
                                Why should you pay us if we aren't stopping your fraud?
                                 <br />
                                any chargebacks you experience are deducted from our fee
                                 <br />
                                with our optional chargeback guarantee.
                             </p>
                        </div>
                    </div>

                </div>
                <div></div>
            </div>

        </div>
    );

}

