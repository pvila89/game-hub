import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slut: string;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;