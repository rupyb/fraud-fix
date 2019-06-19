// import React, { Component } from 'react';
// import { withStyles } from '@material-ui/styles';
// import howItWorksPageBackground from '../../assets/illustration/howItWorksPageBackground.png';

// const styles = {
//     content: {
//         textAlign: 'center',
//         fontFamily: 'Barlow',
//     },
//     contentH2: {
//         fontWeight: 600,
//         lineHeight: 1.19,
//         letterSpacing: '-0.1px',
//         fontSize: '3em',
//         paddingBottom: '.5em'
//     },
//     contentP: {
//         lineHeight: 1.6,
//         color: '#e1dbf1',
//         fontSize: '1.2em',
//         fontWeight: 'normal',
//         paddingTop: '2em',
//     },
//     grid3: {
//         display: 'grid',
//         gridTemplateColumns: '15% 70% 15%',
//         backgroundColor: 'white',
//         fontFamily: 'Barlow',
//         backgroundImage: `url(${howItWorksPageBackground})`,
//         paddingTop: '7em',
//         paddingBottom: '7em',
//         textAlign: 'center'
//     },
   
//     line: {
//         height: '3.5px',
//         width: '44px',
//         borderRadius: '10px',
//         backgroundImage: 'linear-gradient(to left, #95ebb1, #3cdc7c)',
//         borderImageSlice: 1,
//         borderBottom: '1px',
//         justifySelf: 'center'
//     },
//     gridLine: {
//         display: 'grid',
//         justifyContent: 'center'
//     },
// };

// class ReceivedContact extends Component {
//     render() {
//         const { classes } = this.props;
//         return (
//             <div>
//                 <div
//                     style={{
//                         display: 'grid',
//                         gridTemplateColumns: '15% 70% 15%',
//                         backgroundImage: `url('bg.png')`, color: 'white',
//                         paddingTop: '10em',
//                         paddingBottom: '6em'
//                     }}>
//                     <div></div>
//                     <div>

//                         <div className={classes.content}>
//                             <div className={classes.gridLine}>
//                                 <h2 className={classes.contentH2}>Thank You</h2>
//                                 <div className={classes.line}></div>
//                             </div>
//                         </div>

//                     </div>
//                     <div></div>
//                 </div>
//                 <div className={classes.grid3}>
//                     <div></div>
//                     <div>
//                     <p>Thank you for your interest. One of our agents will contact you shortly.</p>
//                     </div>
//                     <div></div>
//                 </div>

//             </div>
//         );
//     }
// }

// export default withStyles(styles)(ReceivedContact);








import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import technologybackground from '../../assets/illustration/technologybackground.jpg';
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
    theDiv: {
        backgroundImage: `url(${technologybackground}) `,
        backgroundSize: 'contain',
        minHeight: '1715px',
        textAlign: 'center',
        paddingTop: '115px',
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
    imageNormal: {
        backgroundImage: `url(${normal})`
    },
    image1: {
        backgroundImage: `url(${hover1})`
    },
    image2: {
        backgroundImage: `url(${hover2})`
    },
    image3: {
        backgroundImage: `url(${hover3})`
    },
    image4: {
        backgroundImage: `url(${hover4})`
    },
    image5: {
        backgroundImage: `url(${hover5})`
    },
};

class Technology extends Component {
    state = {
        currentSelected: 0,
        dashboardBackground: normal,
        itemArray: [
            {
                id: 1,
                header: 'Filter',
                text: 'You can easily export your data and quickly export the results to Excel. Filter by specific SiteNames, Chargeback Entry Date vs Order Submission Date, Domestic vs International, MOTO (phone orders) vs Internet Orders',
                dashboard: hover1,
                green: green1,
                purple: purple1,
            },
            {
                id: 2,
                header: 'Site Performance',
                text: 'Site Performance: A quick snapshot of a website’s performance including Friendly Fraud Chargeback Data, Unique Customers Data, Repeat Customers Data & more',
                dashboard: hover2,
                green: green2,
                purple: purple2
            },
            {
                id: 3,
                header: 'Statuses',
                text: 'Snapshot and graphs of all resolution statuses',
                dashboard: hover3,
                green: green3,
                purple: purple3
            },
            {
                id: 4,
                header: 'Totals submitted',
                text: 'Total Number Of Orders submitted With its yearly sales comparisons, the information is also a great tool for CFOs and marketing departments.',
                dashboard: hover4,
                green: green4,
                purple: purple4
            },
            {
                id: 5,
                header: 'Declined vs Fraud',
                text: 'Helps the merchants monitor the decline rate while observing the relative fraud attempts rate',
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
            if (rowOne) {
                if (item.id < 4) {
                    return (
                        <div className={classes.divRow} key={item.id}
                            onClick={() => this.handleDashboard(item)}>
                            <div className={classes.imageSizerPurple}>
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
                        <div className={classes.divRow} key={item.id}
                            onClick={() => this.handleDashboard(item)}>
                            <div className={classes.imageSizerPurple}>
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

    render() {
        const { classes } = this.props;
        let image = '';
        switch (this.state.currentSelected) {
            case 0:
                image = classes.imageNormal
                break;
            case 1:
                image = classes.image1
                break;
            case 2:
                image = classes.image2
                break;
            case 3:
                image = classes.image3
                break;
            case 4:
                image = classes.image4
                break;
            case 5:
                image = classes.image5
                break;
            default:
                break;
        }
        return (
            <div className={classes.theDiv}>
                <div></div>
                <div>
                    <div className={classes.centerDiv}>
                        <div style={{display: 'none'}}>
                            <img src={hover1} alt=""/>
                            <img src={hover2} alt=""/>
                            <img src={hover3} alt=""/>
                            <img src={hover4} alt=""/>
                            <img src={hover5} alt=""/>
                        </div>
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

                    <div className={classes.graph + ' ' + image} style={{ //backgroundImage: `url(${this.state.dashboardBackground})` 
                    }}>
                    </div>
                    <div className={classes.content}>
                        <div></div>
                        {this.renderNumberArray(true)}
                        <div></div>
                    </div>
                    <div className={classes.grid2}>
                        <div></div>
                        {this.renderNumberArray(false)}
                        <div></div>
                    </div>
                </div>
                <div></div>
            </div>
        )
    };
}

export default withStyles(styles)(Technology);