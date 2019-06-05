import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import hero from '../../assets/illustration/hero.svg';


const useStyles = makeStyles(theme => ({
    gridMaster: {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        paddingTop: '41px',
        paddingBottom: '40px'
    },
    fontSize: {
        fontFamily: 'Barlow',
        fontSize: '3.5em',
        fontWeight: 600,
        lineHeight: 1.07,
        letterSpacing: '-0.1px',
        color: '#ffffff',
        paddingBottom: '35px'
    },
    common: {
        color: 'white',
        border: 'none',
        borderRadius: '25px',
        outline: 'none !important',
    },
    buttonInput: {
        backgroundColor: 'rgba(47, 34, 85, 0.5)',
        height: '50px',
        paddingLeft: '10px'
    },
    buttonStyle: {
        backgroundImage: 'linear-gradient(to bottom, #8de1a8, #3cdc7c)',
        height: '50px',
        width: '118px',
        marginLeft: '-36px',
        color: 'white',
        fontFamily: 'Barlow',
        fontWeight: 600
    },
    leftColumn: {
        paddingTop: '193px'
    },
    alignImage: {
        textAlign: 'end'
    }
}));

export default () => {
    const classes = useStyles();
    return (
    <div className={classes.gridMaster}>
        <div className="">
            <div className={classes.leftColumn}>
                <p className={classes.fontSize}>We obsess over fraud <br /> so you can obsess <br />  over your business</p>
                <input type="text" className={classes.buttonInput + ' ' + classes.common} placeholder="Your e-mail" size="35" />
                <button className={classes.buttonStyle + ' ' + classes.common}>Contact Us</button>
            </div>
            
        </div>
        <div className={classes.alignImage}>
                <img src={hero} alt=""/>
            </div>
    </div>

    )
}