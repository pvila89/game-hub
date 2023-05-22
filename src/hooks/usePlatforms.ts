import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slut: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res=> res.data),
    staleTime: 24 * 60 * 60 * 1000
})

export default usePlatforms;