import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import { withStyles } from '@material-ui/styles';
import Footer from '../shared/Footer';

const styles = {
    content: {
        textAlign: 'center',
        fontFamily: 'Barlow',
    },
    contentH2: {
        fontWeight: 600,
        lineHeight: 1.19,
        letterSpacing: '-0.1px',
        fontSize: '3em'
    },
    contentP: {
        lineHeight: 1.6,
        color: '#e1dbf1',
        fontSize: '1.2em',
        fontWeight: 'normal'
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
    }
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
                        backgroundImage: 'radial-gradient(circle at 67% 52%, #2f2255, #11062f)', color: 'white'
                    }}>
                    <div></div>
                    <div>
                        <Navbar />
                        <div className={classes.content}>
                            <h2 className={classes.contentH2}>About us</h2>
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

                <Footer />
            </div>
        );
    }
}

export default withStyles(styles)(About);