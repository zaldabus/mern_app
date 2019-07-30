import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mernFrontendReducer from '../reducers/mernFrontendReducer';

const initialState = {
  data: [],
  id: 0,
  message: null,
  intervalIsSet: false,
  idToDelete: null,
  idToUpdate: null,
  objectToUpdate: null,
}

const configureStore = () => (
  createStore(mernFrontendReducer, initialState, applyMiddleware(thunk))
);

export default configureStore;