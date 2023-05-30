import axios from 'axios';
import { IGoogleRequest } from '../interfaces/GoogleRequest.interface';
import { IGoogleResponse } from '../interfaces/GoogleResponse.interface';

export const instance = axios.create({
	baseURL: 'https://script.google.com/macros/s/',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
});

export const googleApi = {
	postUrls(data: IGoogleRequest) {
		return instance
			.post<IGoogleResponse>(
				'AKfycbxP5amrx-SBcS35ZBYh4fwVnAE5mL1sw8LP6pCIZeQnJpPFe7YRRR3d9IhXsc1dfS0onw/exec',
				data
			)
			.then(res => res.data);
	}
};
