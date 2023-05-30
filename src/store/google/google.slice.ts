import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { googleApi } from '../../helpers/api';
import { IGoogleRequest } from '../../interfaces/GoogleRequest.interface';

export const postUrls = createAsyncThunk(
	'google/postUrls',
	async function (formData: IGoogleRequest, { rejectWithValue }) {
		try {
			const data = await googleApi.postUrls(formData);

			if (!data.success) {
				throw new Error(data.error);
			}

			return data.data;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

interface GoogleState {
	status: string;
	error: string;
	previewUrl: string;
	downloadUrl: string;
}

const initialState: GoogleState = {
	status: '',
	error: '',
	previewUrl: '',
	downloadUrl: ''
};

export const googleSlice = createSlice({
	name: 'google',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(postUrls.pending, state => {
				state.status = 'loading';
				state.error = '';
			})
			.addCase(postUrls.fulfilled, (state, action) => {
				state.status = 'fulfilled';
				state.previewUrl = action.payload?.url;
				state.downloadUrl = action.payload?.downloadUrl;
			})
			.addCase(postUrls.rejected, (state, action) => {
				state.status = 'rejected';
				if (action.payload) {
					state.error = action.payload as string;
				} else {
					state.error = 'Что-то пошло не так';
				}
			});
	}
});

export const googleActions = googleSlice.actions;
export const googleReducer = googleSlice.reducer;
