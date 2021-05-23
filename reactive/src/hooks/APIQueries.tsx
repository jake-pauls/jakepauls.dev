import axios from "axios";
import { useQuery } from "react-query";

import { Repository } from "../types/repository";
import { GitHubProfile } from "../types/gitHubProfile";
import { Language } from "../types/language";

// Repositories
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

// Profile
const fetchProfile = async () => {
    let { data: profile } = await axios.get("/api/gh/profile");

    return profile;
};

export const queryProfile = (options = {}) => {
    return useQuery<GitHubProfile, Error>("profile", () => fetchProfile(), options);
};

// Languages
const fetchLanguages = async () => {
    let { data: langs } = await axios.get("/api/gh/langs");

    langs = langs.sort((a: Language, b: Language) => { return a.count - b.count });

    return langs;
};

export const queryLanguages = (options = {}) => {
    return useQuery<Language, Error>("langs", () => fetchLanguages(), options);
};
