import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import smallGreenCircle from '../../assets/illustration/oval/smallGreenCircle.svg';
import smallPurpleCircle from '../../assets/illustration/oval/smallPurpleCircle.svg';
import smallYellowCircle from '../../assets/illustration/oval/smallYellowCircle.svg';
import padlock from '../../assets/illustration/padlock.svg';
import target from '../../assets/illustration/target.svg';
import fingerprint from '../../assets/illustration/fingerprint.svg';
import desktop from '../../assets/illustration/desktop.svg';
import shield from '../../assets/illustration/shield.svg';
import Group2 from '../../assets/illustration/Group2.png';


const styles = {
    div: {
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
        paddingTop: '6em',
        justifyItems: 'center',
        paddingBottom: '115px',
        backgroundImage: `url(${Group2})`
    },
    centerDiv: {
        display: 'grid',
        justifyItems: 'center',
    },
    p: {
        fontFamily: 'Barlow',
        fontSize: '54px',
        lineHeight: 0.93,
        letterSpacing: '-0.1px',
        color: '#11062f',
        paddingBottom: '15px'
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
        gridTemplateColumns: '1fr 4fr 4fr 1fr',
        paddingTop: '5em',
        justifyItems: 'center',
        gridGap: '10px'
    },
    chargeBack: {
        fontFamily: 'Barlow',
        lineHeight: 1.11,
        color: '#11062f',
        fontSize: '36px',
        paddingTop: '25px',
        paddingBottom: '25px'
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
    },
    mobileArrayDiv: {
        display: 'none',
        textAlign: 'center',
    },
    centerImage: {
        textAlign: 'center',
        marginTop: '45px'
    }
};

const infoArray = [
    {
        text: "Chargebacks are bleeding your business dry. What if you could predict a future chargeback before even accepting the order? What if, it was all taken care of behind the scenes. Hang out the open sign on your business, we'll guard the door.",
        title: 'Chargeback protection',
        image: padlock,
        circle: smallGreenCircle
    },
    {
        text: 'Stop choosing between declining good orders and preventing fraud. FraudFix can help you automate your approvals by as much as 98%, maximize profits without the cost of fraud.',
        title: 'Highest Approval rates',
        image: target,
        circle: smallPurpleCircle
    },
    {
        text: "Look, your customers aren't goinng to wait around while their orders get checked, and your business can't run on a delay, Don't settle for less than a one second fraud check. Guaranteed.",
        title: 'Fastest approval',
        image: fingerprint,
        circle: smallYellowCircle
    },
    {
        text: "Fraud is our obsession, not yours. While some tools make you do the work, we manage all the fraud and customize a solution for your business. Customized solutions without the hassle? Now that's fraud done right.",
        title: 'All fraud prevention rules are managed by us',
        image: desktop,
        circle: smallGreenCircle
    },
    {
        text: "Why should you pay us if we aren't stopping your fraud? any chargebacks you experience are deducted from our fee with our optional chargeback guarantee.",
        title: 'Chargeback Prevention Guarantee',
        image: shield,
        circle: smallPurpleCircle
    }
];


class WhatWeDo extends Component {
    
    render () {
    const { classes } = this.props;
    return (
        <div>
            <div className={classes.div}>
                <div></div>
                <div >
                    <div className={classes.centerDiv}>
                        <p className={classes.p}>What we do</p>
                        <div className={classes.smallLine}></div>
                    </div>
                    <div className={classes.mobileArrayDiv + ' mobileArrayDiv'}>
                        {infoArray.map(item => (
                            <div key={item.title}>
                                <div className={classes.centerImage}>
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className={classes.centerImage}>
                                    <img src={item.circle} alt=""/>
                                </div>
                               <h3 className={classes.chargeBack}>{item.title}</h3>
                                <p className={classes.chargeBackP}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className={classes.divTwoColumns + ' twoColumnDivWhatWeDo'}>
                        <div></div>
                        <div className="theDivForWhatWeDoImage">
                        <img src={padlock} alt="" className="theImagesWhatWeDo"/>
                        </div>
                       
                        <div>
                            <img src={smallGreenCircle} alt="" />
                            <h3 className={classes.chargeBack}>Chargeback protection</h3>
                            <p className={classes.chargeBackP}>Chargebacks are bleeding your business dry. What if you
                                could predict a future chargeback before
                                even accepting
                                the order? What if, it was all taken care of behind the
                                scenes. Hang out the open
                                sign on your business, we'll
                                guard the door.
                             </p>
                        </div>
                        <div></div>
                    </div>

                    <div className={classes.divTwoColumns + ' twoColumnDivWhatWeDo'}>
                        <div></div>
                        <div>
                            <img src={smallPurpleCircle} alt="" />
                            <div >
                                <h3 className={classes.chargeBack}>Highest Approval rates</h3>
                                <p className={classes.chargeBackP}>
                                    Stop choosing between declining good orders and
                                
                                    preventing fraud. FraudFix can help you automate your
                            
                                    approvals by as much as 98%, maximize profits without
                               
                                    the cost of fraud.
                            </p>
                            </div>
                        </div>
                        <img src={target} alt="" className="theImagesWhatWeDo"/>
                        <div></div>
                    </div>

                    <div className={classes.divTwoColumns + ' twoColumnDivWhatWeDo'}>
                    <div></div>
                        <img src={fingerprint} alt="" className="theImagesWhatWeDo"/>
                        <div>
                            <img src={smallYellowCircle} alt="" />
                            <h3 className={classes.chargeBack}>Fastest approval</h3>
                            <p className={classes.chargeBackP}>
                                Look, your customers aren't goinng to wait around while their
                     
                                orders get checked, and your business can't run on a delay,
                           
                                Don't settle for less than a one second fraud check.
                       
                                Guaranteed.
                             </p>
                        </div>
                        <div></div>
                    </div>

                    <div className={classes.divTwoColumns + ' twoColumnDivWhatWeDo'}>
                    <div></div>
                        <div>
                            <img src={smallGreenCircle} alt="" />
                            <div >
                                <h3 className={classes.chargeBack}>
                                    All fraud prevention
                             
                                    rules are managed by us
                                </h3>
                                <p className={classes.chargeBackP}>
                                    Fraud is our obsession, not yours. While some tools make
                            
                                    you do the work, we manage all the fraud and customize
                          
                                    a solution for your business. Customized solutions without
                          
                                    the hassle? Now that's fraud done right.
                            </p>
                            </div>
                        </div>
                        <img src={desktop} alt="" className="theImagesWhatWeDo"/>
                        <div></div>
                    </div>

                    <div className={classes.divTwoColumns + ' twoColumnDivWhatWeDo'}>
                    <div></div>
                        <img src={shield} alt="" className="theImagesWhatWeDo"/>
                        <div>
                            <img src={smallPurpleCircle} alt="" />
                            <h3 className={classes.chargeBack}>
                                Chargeback
                           
                                Prevention Guarantee
                            </h3>
                            <p className={classes.chargeBackP}>
                                Why should you pay us if we aren't stopping your fraud?
                          
                                any chargebacks you experience are deducted from our fee
                            
                                with our optional chargeback guarantee.
                             </p>
                        </div>
                        <div></div>
                    </div>

                </div>
                <div></div>
            </div>

        </div>
    );

}
}

export default withStyles(styles)(WhatWeDo);
