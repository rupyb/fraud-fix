import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import searchIcon from '../../assets/illustration/icon/search.svg';

const styles = {
    searchDiv: {
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(240deg, #9714f4, #6000a4)',
        boxShadow: '0 2 4 rgba(0, 0, 0, 0.5)',
        height: '200px',
        textAlign: 'center',
        display: 'grid',
        gridTemplateColumns: '1fr 5fr 1fr',
        paddingTop: '30px',
        fontWeight: 600,
        lineHeight: 1.67,
        letterSpacing: '-0.1px',
        color: 'white'
    },
    input: {
        borderRadius: '36px',
        backgroundColor: 'rgba(47, 34, 85, 0.5)',
        height: '51px',
        border: 'none',
        outline: 'none !important',
        margin: '0 auto',
        paddingLeft: '16px',
        width: '100%',
        color: '#afa6c5'
    },
    unCenterDiv: {
        textAlign: 'left'
    },
    imageIcon: {
        marginLeft: '-45px'
    }
};

class Search extends Component {
    state = {
        search: ''
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        }, () => this.performSearch());
    }

    performSearch = () => {
        this.props.renderSearch(this.props.posts.filter(item => item.title.toLowerCase().includes(this.state.search)));
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.searchDiv + ' searchDiv'}>
                <div></div>
                <div>
                    <div className={classes.unCenterDiv}>
                        <p>Search</p>
                    </div>

                    <div >
                        <input type="text" placeholder="Keyword" className={classes.input} size="30"
                            onChange={this.handleChange} value={this.state.search} />
                            <img className={classes.imageIcon} src={searchIcon} alt=""/>
                    </div>
                </div>
                <div></div>
            </div>
        );
    }
}

export default withStyles(styles)(Search);