import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import description from '../../assets/illustration/description.svg';
import technologybackground from '../../assets/illustration/technologybackground.jpg';
import dashboardImage from '../../assets/illustration/dashboardImage.png';
import purple1 from '../../assets/illustration/bullet/purple1new.svg';
import purple2 from '../../assets/illustration/bullet/purple2.svg';
import purple3 from '../../assets/illustration/bullet/purple3.svg';
import purple4 from '../../assets/illustration/bullet/purple4.svg';

import green3 from '../../assets/illustration/bullet/green3new.svg';


const useStyles = makeStyles(theme => ({
    theDiv: {
        //backgroundImage: 'radial-gradient(circle at 50% 46%, #2f2255, #11062f)'
        backgroundImage: `url(${technologybackground}) `,
        backgroundSize: 'contain',
        minHeight: '1715px',
        textAlign: 'center',
        paddingTop: '6em',
        display: 'grid',
        gridTemplateColumns: '10% 80% 10%'
    },
    h3: {
        fontFamily: 'Barlow',
        fontSize: '2.7em',
        fontWeight: 600,
        lineHeight: 0.93,
        letterSpacing: '-0.1px',
        textAlign: 'center',
        color: '#ffffff',
        paddingBottom: '.6em'
    },
    firstP: {
        fontFamily: 'Barlow',
        fontSize: '1.1em',
        lineHeight: 1.6,
        textAlign: 'center',
        color: '#e1dbf1',
        paddingTop: '2em'
    },
    line: {
        height: '3.5px',
        width: '44px',
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(to left, #95ebb1, #3cdc7c)',
        borderImageSlice: 1,
        borderBottom: '1px',

    },
    centerDiv: {
        display: 'grid',
        justifyItems: 'center'
    },
    graph: {
        textAlign: 'center',
        color: 'white',
        backgroundImage: `url(${dashboardImage}) `,
        backgroundRepeat: 'no-repeat',
        minHeight: '990px',
        backgroundSize: 'contain'
    },
    grid3: {
        display: 'grid',
        gridTemplateColumns: '12.5% 25% 25% 25% 12.5%',
    },
    divRow: {
        fontFamily: 'Barlow',
        display: 'grid',
        gridTemplateColumns: '20% 80%',
        textAlign: 'left',
        margin: 0
    },
    divRowHeader: {
        color: 'white',
        fontSize: '1.4em',
        lineHeight: 1.25
    },
    divRowP: {
        lineHeight: 1.5,
        color: '#7c768a'
    },
    grid2: {
        display: 'grid',
        gridTemplateColumns: '27% 23% 23% 27%',
    },
    colorNumber: {
        // color: 'pink',
        // minHeight: '10px'
    },
    purpleBackGround1: {
        backgroundImage: `url(${purple1})`,
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'contain'
    },
    purpleBackGround2: {
        backgroundImage: `url(${purple2})`,
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'contain'
    },
    purpleBackGround4: {
        backgroundImage: `url(${purple3})`,
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'contain'
    },
    purpleBackGround5: {
        backgroundImage: `url(${purple4})`,
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'contain'
    },
    greenBackGround3: {
        backgroundImage: `url(${green3})`,
        backgroundRepeat: 'no-repeat',
    },
    padding: {
        paddingTop: '4px',
    },
    imageSizerPurple: {
        height: 'auto',
        width: '40px'
    },
    imageTag: {
        width: '100%'
    },
    imageSizerGreen: {
        width: '75px',
        height: 'auto',
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <div className={classes.theDiv}>
            <div></div>
            <div>
                <div className={classes.centerDiv}>
                    <h3 className={classes.h3}>Technology</h3>
                    <div className={classes.line}></div>
                    <p className={classes.firstP}>
                        Our advanced AI Algorithms and Machine learning create and improve custom fraud
            <br />
                        rules tailored for your business including Device Fingerprinting technology,
            <br />
                        proxy piercing & detection.
            </p>
                </div>

                <div className={classes.graph}>
                </div>

                <div className={classes.grid3}>
                    <div></div>
                    <div>
                        <div className={classes.divRow}>
                            <div className={classes.imageSizerPurple}>
                                <img src={purple1} alt="" className={classes.imageTag} />
                            </div>
                            <div className={classes.padding}>
                                <p className={classes.divRowHeader}>Filter</p>
                                <p className={classes.divRowP}>
                                    You can easily export your data and quickly export the results to Excel. 
                                    Filter by specific SiteNames, Chargeback Entry Date vs Order Submission Date, 
                                    Domestic vs International, MOTO (phone orders) vs Internet Orders
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={classes.divRow}>
                            <div className={classes.imageSizerPurple}>
                                <img src={purple1} alt="" className={classes.imageTag} />
                            </div>
                            <div className={classes.padding}>
                                <p className={classes.divRowHeader}>Site Performance</p>
                                <p className={classes.divRowP}>
                                Site Performance: A quick snapshot of a website’s performance including 
                                Friendly Fraud Chargeback Data, Unique Customers Data, Repeat Customers Data & more
                        </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={classes.divRow}>
                            <div className={classes.imageSizerGreen}>
                                <img src={green3} alt="" className={classes.imageTag} />
                            </div>
                            <div className={classes.padding}>
                                <p className={classes.divRowHeader}>Statuses</p>
                                <p className={classes.divRowP}>
                                Snapshot and graphs of all resolution statuses
                        </p>
                            </div>
                        </div>
                    </div>

                    <div></div>
                </div>

                <div className={classes.grid2}>
                    <div></div>

                    <div>
                        <div className={classes.divRow}>
                            <div className={classes.imageSizerPurple}>
                                <img src={purple1} alt="" className={classes.imageTag} />
                            </div>
                            <div className={classes.padding}>
                                <p className={classes.divRowHeader}>Totals submitted</p>
                                <p className={classes.divRowP}>
                                Total Number Of Orders submitted With its yearly sales comparisons, the information is also a great tool for CFOs and marketing departments.
                        </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={classes.divRow}>
                            <div className={classes.imageSizerPurple}>
                                <img src={purple1} alt="" className={classes.imageTag} />
                            </div>
                            <div className={classes.padding}>
                                <p className={classes.divRowHeader}>Declined vs Fraud</p>
                                <p className={classes.divRowP}>
                                Helps the merchants monitor the decline rate while observing the relative fraud attempts rate
                        </p>
                            </div>
                        </div>
                    </div>

                    <div></div>
                </div>
            </div>
            <div></div>
        </div>
    )
};
