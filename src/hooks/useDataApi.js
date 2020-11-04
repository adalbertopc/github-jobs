import axios from 'axios';
import { useReducer, useEffect, useState } from 'react';

const types = {
	FETCH_GET: 'FETCH_GET',
	FETCH_SUCCESS: 'FETCH_SUCCESS',
	FETCH_ERROR: 'FETCH_ERROR',
};

// const BASE_URL = 'https://github-jobs-proxy.appspot.com/positions.json';
const URL_RAW = 'https://jobs.github.com/positions.json?page=1';
const BASE_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(
	URL_RAW
)}`;

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

export const useDataApi = (initialUrl = BASE_URL) => {
	const [url, setUrl] = useState(initialUrl);

	const [state, dispatch] = useReducer(dataFetchReducer, {
		isLoading: false,
		isError: false,
		data: [],
	});

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: types.FETCH_GET });
			try {
				const response = await axios.get(url);
				console.log('response:', response);
				dispatch({
					type: types.FETCH_SUCCESS,
					payload: response.data,
				});
			} catch (e) {
				dispatch({ type: types.FETCH_ERROR });
			}
		};
		fetchData();
	}, [url]);

	return [state, setUrl];
};
