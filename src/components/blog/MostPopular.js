import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    postDiv: {
        borderTop: '0.5px solid rgba(219, 214, 233, 0.5)'
    },
    content: {
        paddingBottom: '25px'
    },
    p: {
        display: 'inline',
        paddingLeft: '5px',
        
    },
    popularDiv: {
        paddingLeft: '30px',
        paddingTop: '54px'
    },
    header: {
        paddingBottom: '20px'
    },
    postTitle: {
        paddingTop: '25px'
    }
};

class MostPopular extends Component {

    renderPosts = () => {
        const { classes } = this.props;

        return this.props.data.map((post, index) => {
            return (
                <div key={index} className={classes.postDiv}>
                    <p className={classes.postTitle}>{post.title}</p>
                    <div className={classes.content}>
                        <img src={this.props.dateLogo} alt="" />
                        <p className={classes.p}>{this.props.renderDate(post.published)}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.popularDiv}>
                <p className={classes.header}>Most popular</p>
                {this.props.data[0] && this.renderPosts()}
            </div>
        );
    }
}

export default withStyles(styles)(MostPopular);