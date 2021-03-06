import axios from "axios";
import { useQuery } from "react-query";

import { Repository } from "../types/repository";
import { GitHubProfile } from "../types/gitHubProfile";
import { Language } from "../types/language";
import { getGopherBaseUrl } from "../Constants";

// Repositories
const fetchRepositories = async () => {
  let { data: repos } = await axios.get(`${getGopherBaseUrl()}/api/gh/repos`);

  repos = repos.sort((a: Repository, b: Repository) => {
    return (
      new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
    );
  });

  return repos;
};

export const queryRepositories = (options = {}) => {
  return useQuery<Repository[], Error>(
    "repos",
    () => fetchRepositories(),
    options
  );
};

// Profile
const fetchProfile = async () => {
  let { data: profile } = await axios.get(
    `${getGopherBaseUrl()}/api/gh/profile`
  );

  return profile;
};

export const queryProfile = (options = {}) => {
  return useQuery<GitHubProfile, Error>(
    "profile",
    () => fetchProfile(),
    options
  );
};

// Languages
const fetchLanguages = async () => {
  let { data: langs } = await axios.get(`${getGopherBaseUrl()}/api/gh/langs`);

  langs = langs
    .filter((l: Language) => l.language !== "")
    .sort((a: Language, b: Language) => {
      return b.count - a.count || a.language.localeCompare(b.language);
    });

  return langs;
};

export const queryLanguages = (options = {}) => {
  return useQuery<Language[], Error>("langs", () => fetchLanguages(), options);
};
