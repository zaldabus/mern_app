import { MERN_FRONTEND_UPDATE_MESSAGE, MERN_FRONTEND_RESET_MESSAGE } from '../constants/mernFrontendConstants';

const message = (state = '', action) => {
	switch(action.type) {
		case MERN_FRONTEND_UPDATE_MESSAGE:
			return action.message;
		case MERN_FRONTEND_RESET_MESSAGE:
			return '';
		default:
			return state;
	}
};

export default message;