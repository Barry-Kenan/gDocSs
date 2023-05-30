import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { googleActions } from '../store/google/google.slice';
import { postUrls } from './../store/google/google.slice';
const actions = {
	...googleActions,
	postUrls
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
