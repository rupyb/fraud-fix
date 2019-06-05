import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import blogPatternBackground from '../../assets/illustration/blogPatternBackground.png';
import pricingBackground from '../../assets/illustration/pricingBackground.png';
import blogPostBackground from '../../assets/illustration/blogPostBackground.png';
import blogPic1 from '../../assets/illustration/blogImages/blogImage1.png';

const styles = {
    content: {
        textAlign: 'center',
        fontFamily: 'Barlow',
        //justifyItems: 'center',
        display: 'grid'
    },
    contentH2: {
        fontWeight: 600,
        lineHeight: 1.19,
        letterSpacing: '-0.1px',
        fontSize: '3em'
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
    mainContent: {
        backgroundImage: `url(${blogPatternBackground})`,
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
    },
    grid2: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gridGap: '2em',
        backgroundImage: `url(${blogPostBackground})`
    },
    gridOfPosts: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    }
};

class Blog extends Component {

state={
    posts: [
        {
            picUrl: blogPic1,
            date: '30 May, 2019',
            message: 'My first post about fraudfix'
        }
    ]
}
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '15% 70% 15%',
                        backgroundImage: `url(${pricingBackground})`, color: 'white',
                        paddingTop: '6em'
                    }}>
                    <div></div>
                    <div>

                        <div className={classes.content}>
                            <div className={classes.gridLine}>
                                <h2 className={classes.contentH2}>Blog</h2>
                                <div className={classes.line}></div>
                            </div>
                        </div>
                        <div className={classes.blog}>

                        </div>
                    </div>
                    <div></div>
                </div>

                <div className={classes.mainContent}>
                    <div></div>
                    <div className={classes.grid2}>
                        <div>
                            `<div><img src={this.state.posts[0].picUrl} alt=""/></div>
                            <div className={classes.gridOfPosts}>
                                <div>2nd pic</div>
                                <div>3rd pic</div>
                                <div>4th pic</div>
                                <div>5th pic</div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Blog);