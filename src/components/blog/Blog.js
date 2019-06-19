import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import blogPatternBackground from '../../assets/illustration/blogPatternBackground.png';
import blogPostBackground from '../../assets/illustration/blogPostBackground.png';
import dateLogo from '../../assets/illustration/blogImages/date.svg';
import Search from './Search';
import MostPopular from './MostPopular';

const styles = {
    content: {
        textAlign: 'center',
        fontFamily: 'Barlow',
        //justifyItems: 'center',
        display: 'grid',
        paddingTop: '60px'
    },
    contentH2: {
        fontWeight: 600,
        lineHeight: 1.19,
        letterSpacing: '-0.1px',
        fontSize: '3em',
        paddingBottom: '20px'
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
        paddingBottom: '120px'
    },
    grid2: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gridGap: '2em',
        backgroundImage: `url(${blogPostBackground})`,
        marginTop: '-150px'
    },
    gridOfPosts: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    },
    dateImage: {
        display: 'grid',
        gridTemplateColumns: '7% 41% 52%',
        fontSize: '16px',
        lineHeight: '1.63',
        color: '#7c768a',
        paddingTop: '30px',
        gridGap: '5px'
    },

    fullSize: {

    },
    halfSize: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '50px 27px',
        paddingBottom: '50px'
    },
    image: {
        width: '100%',
        borderRadius: '10px',
        boxShadow: '0 2 4 rgba(0, 0, 0, 0.5)',
    },
    spanTwo: {
        gridColumn: '1 / span 2'
    },

    datePic: {
        alignSelf: 'center',
        margin: 0
    },
    messageP: {
        paddingTop: '10px',
        paddingBottom: '20px',
        fontSize: '32px',

    },
    gridForOverlapLarge: {
        display: 'grid',
        gridTemplateColumns: '50% 43% 7%',
        gridTemplateRows: '1fr 0.4fr 0.7fr',
    },
    gridForOverlapSmall: {
        display: 'grid',
        gridTemplateColumns: '45% 45% 10%',
        gridTemplateRows: '1fr 0.8fr 1fr',
    },
    imageDiv: {
        gridRow: '1 / 3',
        gridColumn: '1 / 4'
    },
    messageDiv: {
        gridRow: '2 / 4',
        gridColumn: '1 /3',
        borderRadius: '5px',
        boxShadow: '0 60px 120px 0 rgba(17, 6, 47, 0.1)',
        display: 'grid',
        gridTemplateColumns: '5% 75% 20%',
        marginBottom: '10px',
        backgroundColor: 'white',
        height: '260px'
    },
    smallPicture: {
        fontSize: '24px'
    },
    loadMoreButton: {
        width: '100%',
        borderRadius: '30.3px',
        backgroundColor: 'rgba(141, 225, 168,0.1)',
        height: '52px',
        color: '#3cdc7c',
        outline: 'none !important',
        border: 'none',
        '&:hover': {
            backgroundColor: 'rgba(141, 225, 168,0.5)',
        }
    }
};

class Blog extends Component {

    state = {
        originalPosts: [],
        posts: [],
        mostPopular: [],
        loadMore: 2
    };

    componentDidUpdate(prevProps) {
        if (this.props.posts !== prevProps.posts) {
            this.setState({
                originalPosts: this.props.posts,
                posts: this.props.posts.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()).slice(0, 5),
                mostPopular: this.props.posts.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()).slice(0, 5)
            });
        }
    }
    componentDidMount() {
        this.setState({
            originalPosts: this.props.posts,
            posts: this.props.posts.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()).slice(0, 5),
            mostPopular: this.props.posts.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()).slice(0, 5)
        })
    }

    renderDate = (date) => {
        const newDate = new Date(date);
        return `${newDate.getDay()} ${newDate.toLocaleString('en-us', { month: 'short' })}, ${newDate.getFullYear()}`;
    }

    renderPosts() {
        const { classes } = this.props;
        return (
            <div className={classes.halfSize}>
                {this.state.posts.map((post, index) => {
                    let classSpan = index === 0 ? classes.spanTwo : '';
                    let gridForOverlap = index === 0 ? classes.gridForOverlapLarge : classes.gridForOverlapSmall;
                    let fontMessage = index === 0 ? classes.bigPicture : classes.smallPicture;
                    let smallPicDate = index === 0 ? classes.bigPicture : classes.smallPictureDate;
                    let mediaClass = index === 0 ? ' gridForOverlapLarge' : ' gridForOverlapSmall';
                    if (window.innerWidth < 722) {
                        classSpan = classes.spanTwo;
                        gridForOverlap = classes.gridForOverlapLarge;
                        fontMessage = classes.bigPicture;
                        smallPicDate = classes.bigPicture ;
                        mediaClass = ' gridForOverlapLarge';
                    }
                    return (
                        <div className={classSpan} key={index} onClick={() => this.handleClick(this.state.posts.indexOf(post) + 1)}>
                            <div className={gridForOverlap + mediaClass}>
                                <div className={classes.imageDiv}>
                                    <img src={post.featured_image} alt="" className={classes.image} />
                                </div>
                                <div className={classes.messageDiv}>
                                    <div></div>
                                    <div>
                                        <div className={classes.dateImage + ' ' + smallPicDate + ' dateImageDiv'}>
                                            <img src={dateLogo} alt="" className={classes.image + ' ' + classes.datePic} />
                                            <p className={classes.datePic}>{this.renderDate(post.published)}</p>
                                            <div></div>
                                        </div>
                                        <p className={classes.messageP + ' blogMessageP ' + fontMessage}>{post.title}</p>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }

    handleClick = id => {
        this.props.history.push(`/blogs/${id}`);
    }

    loadMore = () => {
        const newArray = this.state.originalPosts;
        this.setState({
            loadMore: this.state.loadMore + 2,
            posts: newArray.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()).slice(0, 5 + this.state.loadMore)
        });

    }

    renderSearch = (newArray) => {
        this.setState({
            mostPopular: newArray
        });
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className="blogMain"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '15% 70% 15%',
                        backgroundImage: `url('bg.png')`, color: 'white',
                        paddingTop: '6em',
                        minHeight: '500px'
                    }}>
                    <div></div>
                        <div className={classes.content}>
                            <div className={classes.gridLine}>
                                <h2 className={classes.contentH2}>Blog</h2>
                                <div className={classes.line}></div>
                            </div>
                        </div>
                    <div></div>
                </div>

                <div className={classes.mainContent + ' blogPageMainContent'}>
                    <div></div>
                    <div className={classes.grid2  + ' blogMainContent'}>
                        <div>
                            {this.renderPosts()}
                            <button className={classes.loadMoreButton} onClick={this.loadMore}>Load more</button>
                        </div>
                        <div className="mobileBlogPage">
                            <Search posts={this.state.originalPosts} renderSearch={this.renderSearch} />
                            <MostPopular
                                data={this.state.mostPopular}
                                dateLogo={dateLogo}
                                renderDate={this.renderDate}
                            />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Blog);