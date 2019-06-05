import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import { withStyles } from '@material-ui/styles';
import Footer from '../shared/Footer';

const styles = {
    content: {
        textAlign: 'center',
        fontFamily: 'Barlow',
        justifyItems: 'center',
        display: 'grid'
    },
    contentH2: {
        fontWeight: 600,
        lineHeight: 1.19,
        letterSpacing: '-0.1px',
        fontSize: '3em'
    },
    smallLine: {
        height: '3.5px',
        width: '44px',
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(to left, #95ebb1, #3cdc7c)',
        borderImageSlice: 1,
        borderBottom: '1px'

    },
    
};

class Blog extends Component {


    render() {
        const { classes } = this.props;
        return (
            <div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '15% 70% 15%',
                        backgroundImage: 'radial-gradient(circle at 67% 52%, #2f2255, #11062f)', color: 'white'
                    }}>
                    <div></div>
                    <div>
                        <Navbar />
                        <div className={classes.content}>
                            <h2 className={classes.contentH2}>Blog</h2>
                            <div className={classes.smallLine}></div>
                        </div>
                        <div className={classes.blog}>

                        </div>
                    </div>
                    <div></div>
                </div>


                <Footer />
            </div>
        );
    }
}

export default withStyles(styles)(Blog);