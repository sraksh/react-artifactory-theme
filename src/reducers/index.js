import { combineReducers } from 'redux';
import popularKeywordsReducer from './popular-keywords';
import searchResultsReducer from './search-results';
import landingPageBodyReducer from './landing-page-body';
import accordionReducer from './accordion';
import loginReducer from './login';
import linkReducer from './link';
import packageDetailsReducer from './package-details';
const rootReducer = combineReducers({
  popularKeywords:popularKeywordsReducer,
  searchResults:searchResultsReducer,
  landingPage:landingPageBodyReducer,
  accordion:accordionReducer,
  packageDetails:packageDetailsReducer,
  loginReducer,
  linkReducer
});

export default rootReducer;
