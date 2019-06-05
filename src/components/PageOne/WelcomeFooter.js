import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import adorama from '../../assets/illustration/customerLogos/adorama.svg';
import pcRichard from '../../assets/illustration/customerLogos/pcRichard.svg';
import ashford from '../../assets/illustration/customerLogos/ashford.svg';
import bh from '../../assets/illustration/customerLogos/bh.svg';
import tigerMedical from '../../assets/illustration/customerLogos/tigerMedical.svg';
import sinisterDiesel from '../../assets/illustration/customerLogos/sinisterDiesel.svg';

const useStyles = makeStyles(theme => ({
    lineStyle: {
        color: 'white',
        border: 'solid 0.5px rgba(219, 214, 233, 0.1)',
        height: '1px',
        width: "100%",
        alignSelf: 'center'
    },
    p: {
        //backgroundColor: '#3cdc7c',
        fontFamily: 'Barlow',
        fontSize: '1.1em',
        fontWeight: 500,
        lineHeight: 1.52,
        color: '#3cdc7c'
    },
    footerGrid: {
        display: 'grid',
        gridTemplateColumns: '40% 60%'
    },
    icon: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
        justifyItems: 'center',
        alignItems: 'center',
        gridGap: '4em'
    },
    grid: {
        display: 'grid'
    },
    images: {
        width: '100%'
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.welcomeFooter}>
            <div className={classes.footerGrid}>
                <p className={classes.p}>Servicing enterprise clients for more than a decade </p>
                <div className={classes.grid}>
                <div className={classes.lineStyle}></div>
                </div>
              
            </div>
        <div className={classes.icon}>
            <img src={adorama} alt="" className={classes.images} />
            <img src={pcRichard} alt="" className={classes.images} />
            <img src={ashford} alt="" className={classes.images} />
            <img src={bh} alt="" className={classes.images} />
            <img src={tigerMedical} alt="" className={classes.images} />
            <img src={sinisterDiesel} alt="" className={classes.images} />
        </div>
        </div>
    )
}