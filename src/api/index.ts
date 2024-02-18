import axios from 'axios';
// import { BASE_URL } from '@env';

// export const baseURL = BASE_URL;
export const baseURL='https://stg-api.adidi.app'
const axiosClient = axios.create({
    baseURL,
});

export default axiosClient;
