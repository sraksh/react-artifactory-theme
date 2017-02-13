import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import SearchResultContainer from './containers/search-results';
import DescriptionPageBody from './components/DescriptionPageBody';
import StepsPageBody from './components/StepsPageBody';
import LandingPageContainer from './containers/landing-page-container';
import MostInstalledContainer from './containers/most-installed-container';
import LandingPageBodyContainer from './containers/landing-page-body';
import LoginContainer from './containers/login-container';
import { authTransition } from './utility';
const allRoutes = () => {
  return (
  	<Router history={browserHistory} >
  	<Route path="/" component={LoginContainer} onEnter={authTransition}/>
	    <Route path="/landing-page" component={LandingPageContainer}>
	      <IndexRoute component={LandingPageBodyContainer}/>
	      <Route path='/results' component={SearchResultContainer} />
	      <Route path= '/details' component= {DescriptionPageBody}  />
	      <Route path= '/steps-to-publish' component= {StepsPageBody} /> 
	    </Route>
        </Router>
  );
};

export default allRoutes;
