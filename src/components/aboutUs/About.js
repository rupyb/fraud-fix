import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import pricingBackground from '../../assets/illustration/pricingBackground.png';
import aboutUsBottomBackground from '../../assets/illustration/aboutUsBottomBackground.png';

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
    },
    contentSpan: {
        color: '#ffffff',
        fontWeight: 500
    },
    grid3: {
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
        backgroundColor: 'white',
        fontFamily: 'Barlow',
        backgroundImage: `url(${aboutUsBottomBackground})`,
        paddingTop: '7em',
        paddingBottom: '7em'
    },
    grid2: {
        display: 'grid',
        gridTemplateColumns: '30% 70%',
    },
    grid2P: {
        fontSize: '2em',
        fontWeight: 600,
        color: '#11062f',

        lineHeight: 1.25,
        letterSpacing: '-0.1px'
    },
    grid2Column: {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        lineHeight: 1.63,
        color: '#655c7a',
        gridGap: '3em'
    },
    commentHeader: {
        fontWeight: 500,
        lineHeight: 1.58,
        color: '#11062f'
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
};

class About extends Component {


    render() {
        const { classes } = this.props;
        return (
            <div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '15% 70% 15%',
                        backgroundImage: `url(${pricingBackground})`, color: 'white',
                        paddingTop: '10em',
                        paddingBottom: '6em'
                    }}>
                    <div></div>
                    <div>

                        <div className={classes.content}>
                            <div className={classes.gridLine}>
                                <h2 className={classes.contentH2}>About us</h2>
                                <div className={classes.line}></div>
                            </div>
                            <p className={classes.contentP}>E-commerce fraud prevention is not just our business it's our obsession, that's how we're able
                            <br />
                                to give the highest approval ratings in the industry -
                            <span className={classes.contentSpan}>93.5% approvals on average.</span>
                            </p>
                        </div>

                    </div>
                    <div></div>
                </div>
                <div className={classes.grid3}>
                    <div></div>
                    <div className={classes.grid2}>
                        <div>
                            <p className={classes.grid2P}>Phasellus fermentum in, pellentesque facilitisis nulla</p>
                        </div>
                        <div>
                            <p className={classes.commentHeader}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, reiciendis repellendus vitae fugit ipsum quod at excepturi amet ducimus hic tempore minima dolorum rem deleniti?</p>
                            <div className={classes.grid2Column}>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas corrupti perspiciatis sapiente quaerat non reprehenderit quis pariatur odio! Commodi quae repellat rem possimus facere itaque dolorem, enim quaerat voluptatibus cum pariatur aperiam! Eveniet accusamus fugiat optio voluptates odit est reiciendis sed. Iure sapiente sunt assumenda similique molestiae accusamus quos ut saepe, beatae error nisi aut dicta! Dolorum architecto amet, deserunt tenetur fugiat corporis, nihil sed quis assumenda illum libero repellat debitis soluta officia rerum aspernatur veritatis rem laudantium?</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas corrupti perspiciatis sapiente quaerat non reprehenderit quis pariatur odio! Commodi quae repellat rem possimus facere itaque dolorem, enim quaerat voluptatibus cum pariatur aperiam! Eveniet accusamus fugiat optio voluptates odit est reiciendis sed. Iure sapiente sunt assumenda similique molestiae accusamus quos ut saepe, beatae error nisi aut dicta! Dolorum architecto amet, deserunt tenetur fugiat corporis, nihil sed quis assumenda illum libero repellat debitis soluta officia rerum aspernatur veritatis rem laudantium?</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(About);