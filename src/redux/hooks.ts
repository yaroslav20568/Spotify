import { bindActionCreators } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import * as actions from './actions';

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useActions = () => {
	const dispatch = useAppDispatch();

	return bindActionCreators(actions, dispatch);
};

export { useActions, useAppDispatch, useAppSelector };