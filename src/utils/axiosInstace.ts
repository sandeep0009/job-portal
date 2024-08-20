import axios, { AxiosInstance } from 'axios';

const BASE_URL = process.env.BASE_URL;

const createAxiosInstance = (): AxiosInstance => {
    return axios.create({
        baseURL: BASE_URL,
    });
}

export default createAxiosInstance;
