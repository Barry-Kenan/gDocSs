import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { googleReducer } from './google/google.slice';

export const store = configureStore({
	reducer: {
		google: googleReducer
	}
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
