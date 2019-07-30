import axios from 'axios';

import {
	MERN_FRONTEND_FETCH_ITEMS,
	MERN_FRONTEND_ADD_ITEM,
	MERN_FRONTEND_UPDATE_ITEM,
	MERN_FRONTEND_DELETE_ITEM
} from '../constants/mernFrontendConstants';

export const populateItemList = (data) => ({
	type: MERN_FRONTEND_FETCH_ITEMS,
	data
});

export const fetchItems = () => {
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

export const addItem = () => {

};

export const updateItem = (itemId) => {
	
};

export const deleteItem = (itemId) => {
	
};