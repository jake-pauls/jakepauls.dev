import axios from "axios";
import { useQuery } from "react-query";

import { Repository } from "../types/repository";

const fetchRepositories = async () => {
    const { data } = await axios.get("/api/gh/repos");
    return data;
};

export const queryRepositories = (options = {}) => {
    return useQuery<Repository[], Error>("repos", () => fetchRepositories(), options);
};
