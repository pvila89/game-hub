import axios, { AxiosRequestConfig } from "axios";


export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[]
}


const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '39d2ad107d4d45c5a2d724527e273628'
    }
});

class ApiClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
       this.endpoint = endpoint; 
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
    }

    get = (id: number | string) =>  {
       return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data);
    }
}

export default ApiClient;