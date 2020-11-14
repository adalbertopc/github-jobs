import axios from 'axios';
import { useReducer, useEffect } from 'react';
import { getUrlWithCors } from '../helpers/getUrlWithCors';

const types = {
	FETCH_GET: 'FETCH_GET',
	FETCH_SUCCESS: 'FETCH_SUCCESS',
	FETCH_ERROR: 'FETCH_ERROR',
};

const dataFetchReducer = (state, action) => {
	switch (action.type) {
		case types.FETCH_GET:
			return { ...state, isLoading: true, isError: false };
		case types.FETCH_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false,
				isError: false,
			};
		case types.FETCH_ERROR:
			return {
				state: [],
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};

export const useDataApi = (url) => {
	const [state, dispatch] = useReducer(dataFetchReducer, {
		isLoading: false,
		isError: false,
		data: [],
	});

	const URL_WITH_CORS = getUrlWithCors(url);
	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: types.FETCH_GET });
			try {
				const response = await axios.get(URL_WITH_CORS);
				dispatch({
					type: types.FETCH_SUCCESS,
					payload: response.data,
				});
			} catch (e) {
				dispatch({ type: types.FETCH_ERROR });
			}
		};
		fetchData();
	}, [URL_WITH_CORS]);

	return state;
};
