import { combineReducers } from 'redux';

import data from './dataReducer';

const mernFrontendReducer = combineReducers({ data });

export default mernFrontendReducer;