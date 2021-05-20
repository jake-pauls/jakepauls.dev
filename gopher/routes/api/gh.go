package api

import (
    "io/ioutil"
    "os"
    "net/http"
    "encoding/json"

    "jakepauls.dev/gopher/utils"

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
    Size        int
    URL         string  `json:"html_url"`
    CloneURL    string  `json:"clone_url"`
    CreatedAt   string  `json:"created_at"`
    UpdatedAt   string  `json:"updated_at"`
}

type OutRepository struct {
    Name        string  `json:"name"`
    Description string  `json:"description"`
    Stars       int     `json:"stars"`
    Watchers    int     `json:"watchers"`
    Language    string  `json:"language"`
    Forks       int     `json:"forks"`
    IsFork      bool    `json:"isFork"`
    OpenIssues  int     `json:"openIssues"`
    License     string  `json:"license"`
    Size        int     `json:"size"`
    Url         string  `json:"url"`
    CloneUrl    string  `json:"cloneUrl"`
    Created     string  `json:"created"`
    LastUpdated string  `json:"lastUpdated"`
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
    outRepositories := GetRepoJSON()
    c.JSON(http.StatusOK, outRepositories)
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
    resp := CallGitHubApi(profile_url)

    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)

    var profile Profile
    json.Unmarshal([]byte(body), &profile)

    return profile
}

func GetRepoJSON() []OutRepository {
    resp := CallGitHubApi(repos_url)

    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)

    var repositories []Repository
    json.Unmarshal([]byte(body), &repositories)

    // Cast outgoing repository JSON
    var outRepositories []OutRepository
    for _, o := range repositories {
        repo := OutRepository{
            Name: o.Name,
            Description: o.Description,
            Stars: o.Stars,
            Watchers: o.Watchers,
            Language: o.Language,
            Forks: o.Forks,
            IsFork: o.IsFork,
            OpenIssues: o.OpenIssues,
            License: o.License.Name,
            Size: o.Size,
            Url: o.URL,
            CloneUrl: o.CloneURL,
            Created: o.CreatedAt,
            LastUpdated: o.UpdatedAt,
        }

        // Modify timestamps
        repo.Created = utils.FormatCustomDate(repo.Created)
        repo.LastUpdated = utils.FormatCustomDate(repo.LastUpdated)

        outRepositories = append(outRepositories, repo)
    }

    return outRepositories
}

func CallGitHubApi(url string) *http.Response {
    client := &http.Client{}
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Authorization", os.Getenv("GH_ACCESS_TOKEN"))
    resp, err := client.Do(req)

    if err != nil {
        zap.S().Infof("error calling the github api: %s", err)
    }

    return resp
}
