import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import adorama from '../../assets/illustration/customerLogos/adorama.svg';
import pcRichard from '../../assets/illustration/customerLogos/pcrichard.svg';
import ashford from '../../assets/illustration/customerLogos/ashford.svg';
import bh from '../../assets/illustration/customerLogos/bh.svg';
import tigerMedical from '../../assets/illustration/customerLogos/tigerMedical.svg';
import sinisterDiesel from '../../assets/illustration/customerLogos/sinisterDiesel.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import pcAndAdorama from '../../assets/illustration/customerLogos/pcAndAdorama.svg';
import tigerAndSinister from '../../assets/illustration/customerLogos/tigerAndSinister.svg';
import ashfordAndBH from '../../assets/illustration/customerLogos/ashfordAndB&H.svg';

const styles = {
    lineStyle: {
        color: 'white',
        border: 'solid 0.5px rgba(219, 214, 233, 0.1)',
        height: '1px',
        width: "100%",
        alignSelf: 'center'
    },
    p: {
        fontFamily: 'Barlow',
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
        gridTemplateColumns: '25px 1fr 1fr 1fr 1fr 1fr 1fr 25px',
        justifyItems: 'center',
        alignItems: 'center',
        paddingTop: '30px',
        paddingBottom: '50px'
    },
    grid: {
        display: 'grid'
    },
    images: {
        width: '100%',
        maxHeight: '44px'
    },
    adorama: {
        padding: '0 10px'
    },
    smallIcons: {
        textAlign: 'center',
        margin: '0 auto',
        paddingTop:'20px',
        display: 'none'
    }
};

class WelcomeFooter extends Component {
    
    renderIcons = (change) => {
        const { classes } = this.props;
        const icons = [
            { src: pcAndAdorama },
            { src: tigerAndSinister },
            { src: ashfordAndBH }
        ];
        if (change) {
            const firstItem = icons.shift();
            icons.push(firstItem);
        }
        return icons.map((item, index) => {
            return <div key={item.src}><img src={item.src} alt="" className={classes.carouselImage}/></div>;
        })
    }
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.welcomeFooter}>
                <div className={classes.footerGrid + ' footerGrid'}>
                    <p className={classes.p}>Servicing enterprise clients for more than a decade </p>
                    <div className={classes.grid + ' line'}>
                        <div className={classes.lineStyle}></div>
                    </div>
                </div>
                <div className={classes.icon + ' iconsLargeScreen'}>
                    <div></div>
                    <img src={adorama} alt="" className={classes.images + ' ' + classes.adorama} />
                    <img src={pcRichard} alt="" className={classes.images} />
                    <img src={ashford} alt="" className={classes.images} />
                    <img src={bh} alt="" className={classes.images} />
                    <img src={tigerMedical} alt="" className={classes.images} />
                    <img src={sinisterDiesel} alt="" className={classes.images} />
                    <div></div>
                </div>
                <div className={classes.smallIcons + ' smallIconsWelcome'} >
                    <Carousel stopOnHover={true} interval={4000} width="300px" 
                    infiniteLoop={true} 
                    showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} autoPlay={true}
                    emulateTouch={true}>
                        {this.renderIcons(false)}
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(WelcomeFooter);
