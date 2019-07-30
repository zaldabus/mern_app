import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mernFrontendReducer from '../reducers/mernFrontendReducer';

const configureStore = (props) => (
  createStore(mernFrontendReducer, props, applyMiddleware(thunk))
);

export default configureStore;