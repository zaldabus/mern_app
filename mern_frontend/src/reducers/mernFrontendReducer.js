import { combineReducers } from 'redux';

import data from './dataReducer';
import message from './messageReducer';

const mernFrontendReducer = combineReducers({ data, message });

export default mernFrontendReducer;