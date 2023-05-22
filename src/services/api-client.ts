import axios from "axios";


export interface FetchResponse<T> {
    count: number;
    results: T[]
}


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '39d2ad107d4d45c5a2d724527e273628'
    }
});