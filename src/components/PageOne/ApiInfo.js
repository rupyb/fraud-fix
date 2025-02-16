import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import background from '../../assets/illustration/platforms.png';
import magento from '../../assets/illustration/customerLogos/magento.svg';
import shopify from '../../assets/illustration/customerLogos/shopify.svg';
import oracle from '../../assets/illustration/customerLogos/oracle.svg';
import ibm from '../../assets/illustration/customerLogos/ibm.svg';
import yellowCircle from '../../assets/illustration/customerLogos/chart/yellowCircle.svg';
import greenCircle from '../../assets/illustration/customerLogos/chart/greenCircle.png';
import purpleCircle from '../../assets/illustration/customerLogos/chart/purpleCircle.png';

const useStyles = makeStyles(theme => ({
    theDiv: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        fontFamily: 'Barlow',
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
        paddingBottom: '8em'
    },
    h3: {
        fontSize: '2em',
        fontWeight: 600,
        lineHeight: 1.25,
        letterSpacing: '-0.1px',
        textAlign: 'center',
        color: '#11062f',
        paddingBottom: '1em',
        width: '50%',
        margin: '0 auto'
    },
    grid4: {
        display: 'grid',
        width: '58%',
        margin: '0 auto',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        justifyItems: 'center',
        alignItems: 'center',
        gridGap: '5px',
        paddingBottom: '3em'
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
        outline: 'none !important'
    },
    grid3: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '10px',
        width: '80%',
        margin: '0 auto',
    },
    grid2: {
        display: 'grid',
        gridTemplateColumns: '30% 60%',
        gridGap: '10px'
    },
    line: {
        width: '75%',
        height: '1px',
        border: 'solid 0.5px rgba(219, 214, 233, 0.5)',
        textAlign: 'center'
    },
    centerDiv: {
        display: 'grid',
        justifyItems: 'center',
        paddingTop: '4em',
        paddingBottom: '4em'
    },
    apiP: {
        fontSize: '1.4em',
        lineHeight: '1.25',
        color: '#11062f',
        fontWeight: 500
    },
    howItWorksDiv: {
        display: 'grid',
        gridTemplateColumns: '40% 60%'
    },
    howItWorksP: {
        fontWeight: 600,
        lineHeight: 1.25,
        letterSpacing: '-0.1px',
        color: '#11062f',
        fontSize: '2.3em'
    },
    firstInnerDiv: {
        paddingTop: '5em'
    },
    images: {
        maxWidth: '100%'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <div className={classes.theDiv + ' pageOneApiInfo'}>
            <div></div>
            <div>
                <div className={classes.firstInnerDiv}>
                    <h3 className={classes.h3 + ' pageOneH3Apis'}>We use customized APIs for
                    
                        smooth integration with any platform, including:
                </h3>

                    <div className={classes.grid4 + ' iconGrid'}>
                        <div className={classes.images}>
                            <img src={magento} alt="" className={classes.images} />
                        </div>
                        <div className={classes.images}>
                            <img src={shopify} alt="" className={classes.images} />
                        </div>
                        <div className={classes.images}>
                            <img src={oracle} alt="" className={classes.images} />
                        </div>
                        <div className={classes.images}>
                            <img src={ibm} alt="" className={classes.images} />
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                       <Link to="/howitworks"><button className={classes.buttonStyle}>How it works</button></Link> 
                    </div>
                    <div className={classes.centerDiv}>
                        <div className={classes.line}></div>
                    </div>


                    <div className={classes.grid3 + ' apiInfoGrid3'}>
                        <div className={classes.grid2 + ' apiInfoGrid2'}>
                            <img src={purpleCircle} alt="" className={classes.images} />
                            <div>
                                <p className={classes.apiP + ' apiP'}>
                                    Under 1 second 
                                    response time
                            </p>
                            </div>
                        </div>

                        <div className={classes.grid2  + ' apiInfoGrid2'}>
                            <img src={greenCircle} alt="" className={classes.images} />
                            <div>
                                <p className={classes.apiP  + ' apiP'}>
                                    Up to 98%
                              
                                    Approvals
                            </p>
                            </div>
                        </div>

                        <div className={classes.grid2  + ' apiInfoGrid2'}>
                            <img src={yellowCircle} alt="" className={classes.images} />
                            <div>
                                <p className={classes.apiP  + ' apiP'}>
                                 100's of data points captured on every order
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div></div>
        </div>
    )
};
