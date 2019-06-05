import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import pricingBackground from '../../assets/illustration/pricingBackground.png';
import checkSymbol from '../../assets/illustration/checkSymbol.svg';
import patternBackgroundPricing from '../../assets/illustration/patternBackgroundPricing.png';

const styles = {
    content: {
        textAlign: 'center',
        fontFamily: 'Barlow',
    },
    contentH2: {
        fontWeight: 600,
        lineHeight: 1.19,
        letterSpacing: '-0.1px',
        fontSize: '3em',
        paddingBottom: '.5em'
    },
    contentP: {
        lineHeight: 1.6,
        color: '#e1dbf1',
        fontSize: '1.2em',
        fontWeight: 'normal',
        paddingTop: '2em',
        paddingBottom: '2.5em'
    },
    chart: {
        backgroundColor: 'white',
        display: 'grid',
        gridTemplateColumns: '25% 25% 25% 25%',
        fontFamily: 'Barlow',
        textAlign: 'center',
        borderRadius: '15px',
        boxShadow: '0 30px 60px 0 rgba(17, 6, 47, 0.1)',
        marginTop: '-18em'
    },
    chartPPrice: {
        fontSize: '1.5em',
        fontWeight: 'bold',
        letterSpacing: '-0.1px',
        color: '#9714f4',
        margin: 0,
    },
    chartOrder: {
        color: '#7c768a',
        lineHeight: 1.73,
        margin: 0,
    },
    chartAmount: {
        color: '#11062f',
        fontSize: '2.2em',
        fontWeight: 'bold',
        margin: 0,
    },
    chartButton: {
        width: '96px',
        height: '50px',
        borderRadius: '31px',
        boxShadow: '0 7.5px 15px 0 rgba(60, 220, 124, 0.2)',
        backgroundImage: 'linear-gradient(to bottom, #8de1a8, #3cdc7c)'
    },
    chartSpan: {
        fontWeight: 600
    },
    mainContent: {
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
        textAlign: 'center',
        fontFamily: 'Barlow',
        paddingTop: '4em',
        backgroundImage: `url(${patternBackgroundPricing})`,
        paddingBottom: '5em'
    },
    mainContentH3: {
        fontSize: '2em',
        fontWeight: 600,
        lineHeight: 1.25,
        letterSpacing: '-0.1px',
        color: '#11062f',
        marginBottom: '2em'

    },
    grid4: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridGap: '4em'
    },
    grid4Items: {

        fontSize: '0.9em',
        lineHeight: 1.5,
        textAlign: 'center',
        color: '#7c768a'
    },
    line: {
        height: '3.5px',
        width: '44px',
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(to left, #95ebb1, #3cdc7c)',
        borderImageSlice: 1,
        borderBottom: '1px',
        justifySelf: 'center'
    },
    gridLine: {
        display: 'grid',
        justifyContent: 'center'
    },
    chartDiv: {
        paddingTop: '2.5em',
        display: 'grid',
        justifyItems: 'center'
    },
    buttonDiv: {
        marginTop: '2em',
        marginBottom: '1.5em'
    },
    checkDiv: {
        width: '1.5em',
        marginBottom: '0.8em'
    },
    imageCheck: {
        width: '100%'
    },
    chartMainDiv: {
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
        textAlign: 'center',
        fontFamily: 'Barlow',
        marginBottom: '2em'
    },
    serviceDiv: {
        display: 'grid',
        justifyItems: 'center',
        gridTemplateRows: '1fr 2fr'
    }
};

class Pricing extends Component {
    state = {
        pricing: [
            {
                name: 'tierOne',
                price: 0.08,
                amount: 75000,
                optionalFraud: 0.21
            },
            {
                name: 'tierTwo',
                price: 0.10,
                amount: 50000,
                optionalFraud: 0.23
            },
            {
                name: 'tierThree',
                price: 0.14,
                amount: 25000,
                optionalFraud: 0.24
            },
            {
                name: 'tierFour',
                price: 0.18,
                amount: 2500,
                optionalFraud: 0.25
            },

        ],
        services: ['Trusted, reliable decision engine, backed by 100% fraud guarantees.',
            'Automated Risk Rules Creator via Machine Learning and AI Algorithms.',
            'Manual verification services tools, risk guage, itemized fraud risk factor reasons.',
            'No per-query fees for automated email verification and Credit Bureau identity checks',
            'Fully managed services, expert setup, custom-tailored AI risk rules for your company.',
            'Credit Card Account Takeover Detection for MOTO/Mail-order Telephone Order.',
            'Customer abuse list & white lists Managed services and account monitoring.',
            'Investigative tools and use of third-party query services at no extra cost.',
            'Information sharing network, carder detection, high-risk address detection.',
            'Device Fingerprinting technology, proxy piercing & detection.',
            'Integrated-ready, two-factor SMS authentication. *Replaces phone calls*',
            'Exportable graph reports. YOY sales, chargebacks, declines, approvals...']
    }

    renderPrices = () => {
        const { classes } = this.props;
        return (this.state.pricing.map(item => (
            <div className={classes.chartDiv} key={item.name}>
                <p className={classes.chartPPrice}>${item.price.toFixed(2)}</p>
                <p className={classes.chartOrder}>/ order</p>
                <p className={classes.chartAmount}>{item.amount.toLocaleString()}+</p>
                <p className={classes.chartOrder}>/ transactions per month</p>
                <div className={classes.buttonDiv}>
                    <button className={classes.chartButton}>Sign up</button>
                </div>
                <div className={classes.checkDiv}>
                    <img className={classes.imageCheck} src={checkSymbol} alt="" />
                </div>

                <p className={classes.chartOrder}>optional fraud <br /> Guarantee <span className={classes.chartSpan}>{item.optionalFraud.toFixed(2)}</span>%</p>
            </div>
        )))
    }
    renderGrid4 = () => {
        const { classes } = this.props;
        return (
            this.state.services.map((item, index) => (
                <div className={classes.serviceDiv} key={index}>
                    <div className={classes.checkDiv}>
                        <img className={classes.imageCheck} src={checkSymbol} alt="" />
                    </div>
                    <div className={this.props.classes.grid4Items}>{item}</div>
                </div>
            ))

        )
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '15% 70% 15%',
                        backgroundImage: `url(${pricingBackground})`,
                        color: 'white',
                        paddingTop: '10em',
                        minHeight: '726px'
                    }}>
                    <div></div>
                    <div>

                        <div className={classes.content}>
                            <div className={classes.gridLine}>
                                <h2 className={classes.contentH2}>Pricing list</h2>
                                <div className={classes.line}></div>
                            </div>

                            <p className={classes.contentP}>
                                Every client is unique - and at eFraud Security, we offer tailored solutions for every set of needs.
                            <br />
                                our custom-tailored setups, adjustments and performance monitoring for each account is included in our pricing.
                            </p>
                        </div>

                    </div>
                    <div></div>

                </div>
                <div className={classes.chartMainDiv}>
                    <div></div>
                    <div className={classes.chart}>
                        {this.renderPrices()}
                    </div>
                    <div></div>
                </div>
                <div className={classes.mainContent}>
                    <div></div>
                    <div>

                        <div>
                            <h3 className={classes.mainContentH3}>All pricing plans with free setup, pay-as-you-go, no long term
                            <br />contracts, & include the following features:</h3>
                            <div className={classes.grid4}>
                                {this.renderGrid4()}
                            </div>
                        </div>

                    </div>
                    <div></div>
                </div>


            </div>
        );
    }
}

export default withStyles(styles)(Pricing);