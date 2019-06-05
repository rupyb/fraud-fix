import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import About from './components/aboutUs/About';
import PageOne from './components/PageOne/PageOne';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';

class App extends Component {


  render() {
    // console.log(this.state);
    // console.log(this.props);
    return (
      // <PageOne />
      <Switch>
        <Route exact path="/" component={PageOne} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/blog" component={Blog} />
        {/* when none of the above match, <NoMatch> will be rendered */}
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    );
  }
}



export default App;
