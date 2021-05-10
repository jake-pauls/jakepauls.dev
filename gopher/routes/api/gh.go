package api

import (
    "io/ioutil"
    "net/http"
    "encoding/json"

    "github.com/gin-gonic/gin"
    "go.uber.org/zap"
)

const repos_url string = "https://api.github.com/users/jacob-pauls/repos"
const profile_url string = "https://api.github.com/users/jacob-pauls"

type Profile struct {
    Name        string
    Location    string
    Followers   int
    Following   int
    URL         string  `json:"html_url"`
}

type License struct {
    Name        string
}

type Repository struct {
    Name        string
    Description string
    Stars       int     `json:"stargazers_count"`
    Watchers    int     `json:"watchers_count"`
    Language    string
    Forks       int
    IsFork      bool    `json:"fork"`
    OpenIssues  int     `json:"open_issues"`
    License     License
    URL         string  `json:"html_url"`
    CloneURL    string  `json:"clone_url"`
}

// Register GitHub routers
func GitHubRegister(group *gin.RouterGroup) {
    group.GET("/profile", GetProfile)
    group.GET("/repos", GetRepos)
    group.GET("/langs", GetLangs)
    group.GET("/extended-stats", GetExtendedStats)
}

func GetProfile(c *gin.Context) {
    profile := GetProfileJSON()
    c.JSON(http.StatusOK, profile)
}

func GetRepos(c *gin.Context) {
    repositories := GetRepoJSON()
    c.JSON(http.StatusOK, repositories)
}

// Derived from a repository's main language
func GetLangs(c *gin.Context) {
    repositories := GetRepoJSON()

    languageMap := make(map[string]int)

    for i := 0; i < len(repositories); i++ {
        // Increment lang if it is already in map
        if _, lang := languageMap[repositories[i].Language]; lang {
            languageMap[repositories[i].Language]++
            continue
        }
        languageMap[repositories[i].Language] = 1
    }

    c.JSON(http.StatusOK, languageMap)
}

// Stars and Watchers
func GetExtendedStats(c *gin.Context) {
    repositories := GetRepoJSON()

    extendedStatsMap := make(map[string]int)


    for i := 0; i < len(repositories); i++ {
        extendedStatsMap["Watchers"] += repositories[i].Watchers
        extendedStatsMap["Stars"] += repositories[i].Stars
    }

    c.JSON(http.StatusOK, extendedStatsMap)
}

func GetProfileJSON() Profile {
    resp, err := http.Get(profile_url)

    if err != nil {
        zap.S().Infof("error retrieving profile data from github: %s", err)
    }

    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)

    var profile Profile
    json.Unmarshal([]byte(body), &profile)

    return profile
}

func GetRepoJSON() []Repository {
    resp, err := http.Get(repos_url)

    if err != nil {
        zap.S().Infof("error retrieving repos from github: %s", err)
    }

    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)

    var repositories []Repository
    json.Unmarshal([]byte(body), &repositories)

    return repositories
}
