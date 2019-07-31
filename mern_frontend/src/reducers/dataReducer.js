import { MERN_FRONTEND_FETCH_ITEMS, MERN_FRONTEND_ADD_ITEM } from '../constants/mernFrontendConstants';

const data = (state = [], action) => {
	switch(action.type) {
		case MERN_FRONTEND_FETCH_ITEMS:
			return action.data;
		case MERN_FRONTEND_ADD_ITEM:
			const newItem = {id: action.itemId, message: action.message};
			return [...state, newItem];
		default:
			return state;
	}
};

export default data;