import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import blogPatternBackground from '../../assets/illustration/blogPatternBackground.png';
import blogPostBackground from '../../assets/illustration/blogPostBackground.png';
import dateLogo from '../../assets/illustration/blogImages/date.svg';
import arrow from '../../assets/illustration/icon/prev.svg';
import facebook from '../../assets/illustration/social-icons/facebook.svg';
import twitter from '../../assets/illustration/social-icons/twitter.svg';
import linkedin from '../../assets/illustration/social-icons/linkedin.svg';
import { Link } from 'react-router-dom'

const styles = {
    content: {
        fontFamily: 'Barlow',
        display: 'grid',
        paddingTop: '60px',
        gridTemplateColumns: '1fr 2fr 1fr'
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
    mainContent: {
        backgroundImage: `url(${blogPatternBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'grid',
        gridTemplateColumns: '15% 70% 15%',
        paddingBottom: '120px'
    },
    mainPost: {
        backgroundImage: `url(${blogPostBackground})`,
        marginTop: '-150px'
    },
    image: {
        width: '390px',
        height: '250px',
        borderRadius: '13px',
        boxShadow: '0 2 4 rgba(0, 0, 0, 0.5)',
        maxWidth: '100%'
    },
    datePic: {
        alignSelf: 'center',
        color: '#7c768a',
        margin: 0
    },
    title: {
        color: '#11062f',
        fontSize: '25px',
        fontWeight: 600,
        width: '73%'
    },
    postDetails: {
        paddingTop: '40px'
    },
    dateDiv: {
        marginBottom: '20px'
    },
    smallLine: {
        height: '3.5px',
        width: '44px',
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(to left, #95ebb1, #3cdc7c)',
        borderImageSlice: 1,
        borderBottom: '1px'

    },
    postBody: {
        paddingTop: '20px',
        color: '#7c768a'
    },
    grid3: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        cursor: 'pointer',
        gridGap: '20px'
    },
    smallPic: {

    },
    messageP: {
        paddingTop: '20px',
        color: '#11062f',
        fontWeight: 500
    },
    headerOtherPosts: {
        fontSize: '30px',
        fontWeight: 600,
        lineHeight: 1.25,
        letterSpacing: '-0.1px',
        textAlign: 'center',
        color: '#11062f',
        paddingTop: '30px',
        paddingBottom: '30px'
    },
    headingImage: {
        verticalAlign: 'baseline'
    },
    endDiv: {
        justifySelf: 'end'
    },
    paddingRight: {
        paddingRight: '10px'
    },
    paddingLeft: {
        paddingLeft: '20px',
        verticalAlign: 'middle'
    },
    listStyle: {
        listStyle: 'none',
        color: 'white',
        outline: 'none',
        '&:hover': {
            listStyle: 'none',
            textDecoration: 'none',
            color: 'white'
        }
    },
    gridOverlap: {
        display: 'grid',
        gridTemplateColumns: '40% 40% 20%',
        gridTemplateRows: '1fr .3fr 0.3fr'
    },
    imageOverlap: {
        gridRow: '1 / 3',
        gridColumn: '1 / 4'
    },
    messageDivOuterDiv: {
        gridRow: '2 / 4',
        gridColumn: '1 /3',
        height: '200px',
    },
    messageDiv: {
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow: '0 30px 60px 0 rgba(17, 6, 47, 0.1)',
        paddingTop: '35px',
        paddingLeft: '35px',
        paddingRight: '35px',
        paddingBottom: '50px'
    }
};

class BlogItem extends Component {
    state = {
        posts: [],
        post: [],
        selected: this.props.match.params.id
    };

    componentDidMount() {
        this.setState({
            posts: this.props.posts,
            post: this.props.posts.filter(item => (this.props.posts.indexOf(item) + 1) === +this.props.match.params.id),
            selected: this.props.match.params.id
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.posts !== prevProps.posts || this.props.match.params.id !== prevProps.match.params.id) {
            this.setState({
                posts: this.props.posts,
                post: this.props.posts.filter(item => (this.props.posts.indexOf(item) + 1) === +this.props.match.params.id),
                selected: this.props.match.params.id
            });
        }
    }
    renderDate = (date) => {
        const newDate = new Date(date);
        return `${newDate.getDay()} ${newDate.toLocaleString('en-us', { month: 'short' })}, ${newDate.getFullYear()}`;
    }

    handleClick = id => {
        this.props.history.push(`/blogs/${id}`);
    }

    renderPosts = () => {
        const { classes } = this.props;
        return this.state.posts.filter(item => +this.state.selected !== (this.state.posts.indexOf(item) + 1))
            .slice(0, 3)
            .map((post, index) => (
                <div key={index} onClick={() => this.handleClick(this.state.posts.indexOf(post) + 1)}>
                    <div className={classes.gridOverlap + ' blogItemPageGrid'}>
                        <div className={classes.imageOverlap}>
                            <img src={post.fields.Image[0].url} alt="" className={classes.image + ' blogItemImage'} />
                        </div>
                        <div className={classes.messageDivOuterDiv + ' messageDivOuterDiv'}>
                            <div className={classes.messageDiv + ' blogItemMessageDiv'}>
                                <div className={classes.smallPic}>

                                    <img src={dateLogo} alt="" />
                                    <span className={classes.datePic}>{this.renderDate(post.fields['Publish Date'])}</span>


                                    <p className={classes.messageP}>{post.fields['SEO Title']}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ));
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className="blogItemMain"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '15% 70% 15%',
                        backgroundImage: `url('${window.location.origin}/bg.png')`, color: 'white',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        paddingTop: '6em',
                        minHeight: '379px'
                    }}>
                    <div></div>
                    <div className={classes.content + ' blogHeader'}>
                        <div>
                            <Link to="/blog" className={classes.listStyle}>
                                <img src={arrow} alt="" className={classes.headingImage + ' ' + classes.paddingRight} />
                                <span>Return to post list</span>
                            </Link>
                        </div>
                        <div></div>
                        <div className={classes.endDiv}>
                            <span className={classes.paddingRight + ' blogListShare'}>Share post on:</span>
                            <a href="https://www.facebook.com/FraudFix-514485039382925/?modal=admin_todo_tour"><img src={facebook} alt="" className={classes.headingImage + ' ' + classes.paddingLeft} /></a>
                            <a href="https://twitter.com/RealFraudFix"><img src={twitter} alt="" className={classes.headingImage + ' ' + classes.paddingLeft} /></a>
                            <a href="https://www.linkedin.com"><img src={linkedin} alt="" className={classes.headingImage + ' ' + classes.paddingLeft} /></a>
                        </div>
                    </div>
                    <div></div>
                </div>

                {
                    this.state.post[0] &&
                    <div className={classes.mainContent + ' blogItemMainContent'}>
                        <div></div>
                        <div>
                            <div className={classes.mainPost}>
                                <img src={this.state.post[0].fields.Image[0].url} alt="" className={classes.image} />
                                <div className={classes.postDetails}>
                                    <div className={classes.dateDiv}>
                                        <img src={dateLogo} alt="" />
                                        <span className={classes.datePic}>{this.renderDate(this.state.post[0].fields['Publish Date'])}</span>
                                    </div>
                                    <p className={classes.title}>{this.state.post[0].fields['SEO Title']}</p>
                                    <div className={classes.smallLine}></div>
                                    <div className={classes.postBody}
                                        dangerouslySetInnerHTML={{ __html: this.state.post[0].fields.Post }}></div>
                                </div>
                            </div>
                            <div>
                                <p className={classes.headerOtherPosts}>Other posts</p>
                                <div className={classes.grid3 + ' blogItemsGrid3'}>{this.renderPosts()}</div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                }
            </div>
        );
    }
}

export default withStyles(styles)(BlogItem);