import { MERN_FRONTEND_FETCH_ITEMS } from '../constants/mernFrontendConstants';

const data = (state = [], action) => {
	switch(action.type) {
		case MERN_FRONTEND_FETCH_ITEMS:
			return action.data;
		default:
			return state;
	}
};

export default data;