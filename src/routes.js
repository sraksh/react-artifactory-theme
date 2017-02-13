import React from 'react';
import { Route, IndexRoute } from 'react-router';
import SearchResultContainer from './containers/search-results';
import DescriptionPageBody from './components/DescriptionPageBody';
import StepsPageBody from './components/StepsPageBody';
import LandingPageContainer from './containers/landing-page-container';
import MostInstalledContainer from './containers/most-installed-container';
import LandingPageBodyContainer from './containers/landing-page-body';
const allRoutes = () => {
  return (
    <Route path="/" component={LandingPageContainer}>
      <IndexRoute component={LandingPageBodyContainer}/>
      <Route path='/results' component={SearchResultContainer} />
      <Route path= '/details' component= {DescriptionPageBody}  />
      <Route path= '/steps-to-publish' component= {StepsPageBody} /> 
    </Route>
  );
};

export default allRoutes;
