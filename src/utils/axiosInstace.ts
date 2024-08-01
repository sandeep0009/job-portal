import axios, { AxiosInstance } from 'axios';

const BASE_URL = "http://localhost:3000";

const createAxiosInstance = (): AxiosInstance => {
    return axios.create({
        baseURL: BASE_URL,
    });
}

export default createAxiosInstance;
