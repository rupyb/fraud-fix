import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import About from './components/aboutUs/About';
import PageOne from './components/PageOne/PageOne';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import HowItWorks from './components/HowItWorks/HowItWorks';
import ScrollToTop from './components/shared/ScrollToTop';
import ContactUs from './components/ContactUs/ContactUs';
import ReceivedContact from './components/receivedContact/ReceivedContact';
import BlogItem from './components/blog/BlogItem';
import axios from 'axios';
import './components/shared/mediaStyles.css';

class App extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('https://9o09rv3rei.execute-api.us-east-1.amazonaws.com/dev/get-blogs').then(data => {
      this.setState({
        posts: data.data
      })
    });
  }

  render() {
    return (
      <div style={{ fontSize: '17px', fontFamily: 'Barlow', lineHeight: 1, color: '#11062F' }}>
        <Navbar {...this.props} />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={PageOne} />
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/blog" render={(props) => <Blog {...props} posts={this.state.posts} />} />
          <Route path="/howitworks" component={HowItWorks} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/submission" component={ReceivedContact} />
          <Route path="/blogs/:id" render={(props) => {
            return <BlogItem {...props} posts={this.state.posts} />
          }} />
          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route render={(props) => <Redirect to="/" {...props} />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}



export default App;
