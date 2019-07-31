import axios from 'axios';

import {
	MERN_FRONTEND_FETCH_ITEMS,
	MERN_FRONTEND_ADD_ITEM,
	MERN_FRONTEND_UPDATE_ITEM,
	MERN_FRONTEND_DELETE_ITEM,
	MERN_FRONTEND_UPDATE_MESSAGE,
	MERN_FRONTEND_RESET_MESSAGE
} from '../constants/mernFrontendConstants';

export const populateItemList = (data) => ({
	type: MERN_FRONTEND_FETCH_ITEMS,
	data
});

export const addItemToList = (itemId, message) => ({
	type: MERN_FRONTEND_ADD_ITEM,
	itemId,
	message
});

export const updateMessage = (message) => ({
	type: MERN_FRONTEND_UPDATE_MESSAGE,
	message
});

export const resetMessage = () => ({
	type: MERN_FRONTEND_RESET_MESSAGE
});

export const fetchItemsFromDB = () => {
	return dispatch => {
		return axios.get('http://localhost:3001/api/getData')
  	.then(res => {
  		const items = res.data.data;
  		dispatch(populateItemList(items));
		}).catch(error => {
			throw(error);
		});
	}
};

export const addItemToDB = (itemId, message) => {
	return dispatch => {
		return axios.post('http://localhost:3001/api/putData', {
      id: itemId,
      message: message,
    }).then(res => {
    	dispatch(resetMessage());
    }).catch(error => {
				throw(error);
		});
  }
};

export const updateItem = (itemId) => {
	
};

export const deleteItem = (itemId) => {
	
};