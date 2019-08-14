import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import technologybackground from '../../assets/illustration/technologyCirclesBackground.png';
import technologyPlainBackground from '../../assets/illustration/technologyPlainBackground.png';

import purple1 from '../../assets/illustration/bullet/purple1new.svg';
import purple2 from '../../assets/illustration/bullet/border2.svg';
import purple3 from '../../assets/illustration/bullet/border3.svg';
import purple4 from '../../assets/illustration/bullet/border4.svg';
import purple5 from '../../assets/illustration/bullet/border5.svg';
import green1 from '../../assets/illustration/bullet/active1green.svg';
import green2 from '../../assets/illustration/bullet/active2green.svg';
import green3 from '../../assets/illustration/bullet/active3green.svg';
import green4 from '../../assets/illustration/bullet/active4green.svg';
import green5 from '../../assets/illustration/bullet/active5green.svg';

import normal from '../../assets/illustration/dashboard/normal.png';
import hover1 from '../../assets/illustration/dashboard/hover1.png';
import hover2 from '../../assets/illustration/dashboard/hover2.png';
import hover3 from '../../assets/illustration/dashboard/hover3.png';
import hover4 from '../../assets/illustration/dashboard/hover4.png';
import hover5 from '../../assets/illustration/dashboard/hover5.png';

const styles = {
    outerDiv: {
        backgroundImage: `url(${technologyPlainBackground})`,
        paddingTop: '130px'
    },
    theDiv: {
        backgroundImage: `url(${technologybackground}) `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        paddingBottom: '50px',
        textAlign: 'center',
        marginTop: '107px',
        display: 'grid',
        gridTemplateColumns: '10% 80% 10%'
    },
    h3: {
        fontFamily: 'Barlow',
        fontSize: '54px',
        lineHeight: 0.93,
        letterSpacing: '-0.1px',
        textAlign: 'center',
        color: '#ffffff',
        paddingBottom: '.6em'
    },
    firstP: {
        fontFamily: 'Barlow',
        lineHeight: 1.6,
        textAlign: 'center',
        color: '#e1dbf1',
        paddingTop: '2em',
        width: '40%'
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
    grid3: {
        display: 'grid',
        gridTemplateColumns: '12.5% 25% 25% 25% 12.5%',
    },
    divRow: {
        fontFamily: 'Barlow',
        display: 'grid',
        gridTemplateColumns: '20% 80%',
        textAlign: 'left',
        margin: 0,
        cursor: 'pointer'
    },
    divRowHeader: {
        color: 'white',
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
    purpleBackGround1: {
        backgroundImage: `url(${purple1})`,
        backgroundRepeat: 'no-repeat',
    },
    border2: {
        backgroundImage: `url(${purple2})`,
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
    },
    content: {
        display: 'grid',
        gridTemplateColumns: '12.5% 25% 25% 25% 12.5%',
    },
    mainDiv: {
        paddingBottom: '50px',
        marginTop: '-111px'
    },
    gridOfImages: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '0.5fr 1.5fr 1.5fr 2fr 1fr'
    },
    graph: {
        textAlign: 'center',
        color: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        overflow: 'hidden',
        width: '100%'
    },
    graphDiv: {
        gridRow: '1 / 6',
        gridColumn: '1 / 4',
    },
    togglerForMobileDiv: {
        display: 'none'
    },
    mobileGraphImage: {
        imageSize: 'contain'
    }
};

class Technology extends Component {
    state = {
        currentSelected: 0,
        dashboardBackground: normal,
        itemArray: [
            {
                id: 1,
                header: 'Filter',
                text: 'You can easily filter by specific SiteNames, Chargeback Entry Date, Order Submission Date, Domestic and International, MOTO (phone orders) and Internet Orders.',
                dashboard: hover1,
                green: green1,
                purple: purple1,
            },
            {
                id: 2,
                header: 'Site Performance',
                text: 'Site Performance: A quick snapshot of your website’s performance, including Friendly Fraud Chargeback Data, Unique Customers Data, Repeat Customers Data & more.',
                dashboard: hover2,
                green: green2,
                purple: purple2
            },
            {
                id: 3,
                header: 'Statuses',
                text: 'Snapshot view of all your orders, broken down by order statuses, including approved, declined, and fraud.',
                dashboard: hover3,
                green: green3,
                purple: purple3
            },
            {
                id: 4,
                header: 'Totals submitted',
                text: 'Track your total number of orders submitted with year by year sales comparisons.',
                dashboard: hover4,
                green: green4,
                purple: purple4
            },
            {
                id: 5,
                header: 'Declined vs Fraud',
                text: "Graphical overview to help you monitor the declined orders relative to the fraud attempts.",
                dashboard: hover5,
                green: green5,
                purple: purple5
            },
        ]
    }

    handleDashboard = (item) => {
        this.setState({
            currentSelected: item.id,
            dashboardBackground: item.dashboard
        })
    }

    renderNumberArray = (rowOne) => {
        const { classes } = this.props;

        return (this.state.itemArray.map(item => {
            const image = this.state.currentSelected === item.id ? item.green : item.purple;
            const theFunction = window.innerWidth > 722 ? this.handleDashboard : () => { };
            if (rowOne) {
                if (item.id < 4) {
                    return (
                        <div className={classes.divRow + ' innerDivRowTechnology'} key={item.id}
                            onClick={() => theFunction(item)}>
                            <div className={classes.imageSizerPurple + ' arrayOfTagsTechnology'}>
                                <img src={image} alt="" className={classes.imageTag} />
                            </div>
                            <div className={classes.padding}>
                                <p className={classes.divRowHeader}>{item.header}</p>
                                <p className={classes.divRowP}>{item.text}</p>
                            </div>
                        </div>
                    )
                } else {
                    return null;
                }
            } else {
                if (item.id > 3) {
                    return (
                        <div className={classes.divRow + ' innerDivRowTechnology'} key={item.id}
                            onClick={() => theFunction(item)}>
                            <div className={classes.imageSizerPurple + ' arrayOfTagsTechnology'}>
                                <img src={image} alt="" className={classes.imageTag} />
                            </div>
                            <div className={classes.padding}>
                                <p className={classes.divRowHeader}>{item.header}</p>
                                <p className={classes.divRowP}>{item.text}</p>
                            </div>
                        </div>
                    )
                } else {
                    return null;
                }
            }
        }));
    }

    hoverImage = (image) => {
        this.setState({
            dashboardBackground: image
        });
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.outerDiv + ' outerDivTechnology'}>
                <div className={classes.theDiv + ' innerDivTechnology'}>
                    <div></div>
                    <div className={classes.mainDiv + ' mainDivTechnology'}>
                        <div className={classes.centerDiv}>
                            <div style={{ display: 'none' }}>
                                <img src={hover1} alt="" />
                                <img src={hover2} alt="" />
                                <img src={hover3} alt="" />
                                <img src={hover4} alt="" />
                                <img src={hover5} alt="" />
                            </div>
                            <h3 className={classes.h3 + ' technologyH3'}>Technology</h3>
                            <div className={classes.line}></div>
                            <p className={classes.firstP + ' pageOneTechnologyP'}>
                                Our advanced AI algorithms and machine learning create and improve custom fraud

                                rules tailored for your business, including device fingerprinting technology,

                                proxy piercing & detection.
                            </p>
                        </div>
                        <div>
                            <div className={classes.togglerForMobileDiv + ' togglerForMobileDiv'}>
                                <img className={classes.mobileGraphImage + ' mobileGraphImage'} src={hover3} alt="" />
                            </div>
                            <div className={classes.gridOfImages + ' gridOfImagesTechnology'}>
                                <div className={classes.graphDiv}>
                                    <img className={classes.graph} src={this.state.dashboardBackground} alt="" />
                                </div>

                                <div onMouseEnter={() => this.hoverImage(hover1)} onMouseLeave={() => this.hoverImage(normal)}
                                    style={{ gridColumn: '1 / 2', gridRow: '2 /3', zIndex: 100 }}></div>
                                <div onMouseEnter={() => this.hoverImage(hover4)} onMouseLeave={() => this.hoverImage(normal)}
                                    style={{ gridColumn: '2 / 3', gridRow: '2 /5', zIndex: 100 }}></div>
                                <div onMouseEnter={() => this.hoverImage(hover5)} onMouseLeave={() => this.hoverImage(normal)}
                                    style={{ gridColumn: '3 / 4', gridRow: '2 /5', zIndex: 100 }}></div>
                                <div onMouseEnter={() => this.hoverImage(hover2)} onMouseLeave={() => this.hoverImage(normal)}
                                    style={{ gridColumn: '1 / 2', gridRow: '3 /4', zIndex: 100 }}></div>
                                <div onMouseEnter={() => this.hoverImage(hover3)} onMouseLeave={() => this.hoverImage(normal)}
                                    style={{ gridColumn: '1 / 2', gridRow: '4 /5', zIndex: 100 }}></div>
                            </div>
                        </div>

                        <div className={classes.content + ' techologyGridThree'}>
                            <div className={classes.largeScreen + ' largeScreeen'}></div>
                            {this.renderNumberArray(true)}
                            <div></div>
                        </div>
                        <div className={classes.grid2 + ' techologyGridTwo'}>
                            <div className={classes.largeScreen + ' largeScreen'}></div>
                            {this.renderNumberArray(false)}
                            <div></div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    };
}

export default withStyles(styles)(Technology);