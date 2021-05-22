import axios from "axios";
import { useQuery } from "react-query";

import { Repository } from "../types/repository";

const fetchRepositories = async (limit = 6) => {
    let { data: repos } = await axios.get("/api/gh/repos");

    repos = repos
            .sort((a: Repository, b: Repository) => { return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime() })
            .slice(0, limit);

    return repos;
};

export const queryRepositories = (options = {}) => {
    return useQuery<Repository[], Error>("repos", () => fetchRepositories(), options);
};
