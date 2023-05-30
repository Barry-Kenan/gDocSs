export interface IGoogleResponse {
	success: 'true' | 'false';
	error: string;
	data: IGoogleResponseData;
}

interface IGoogleResponseData {
	url: string;
	downloadUrl: string;
}
