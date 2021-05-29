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

const repos_url string = "https://api.github.com/users/jake-pauls/repos"
const profile_url string = "https://api.github.com/users/jake-pauls"

type Profile struct {
    Name        string
    Location    string
    Followers   int
    Following   int
    URL         string  `json:"html_url"`
    AvatarUrl   string  `json:"avatar_url"`
}

type OutProfile struct {
    Name        string  `json:"name"`
    Location    string  `json:"location"`
    Followers   int     `json:"followers"`
    Following   int     `json:"following"`
    URL         string  `json:"profileUrl"`
    AvatarUrl   string  `json:"avatarUrl"`
    TotalStars  int     `json:"totalStars"`
    TotalWatchers int   `json:"totalWatchers"`
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

    parsedLangs := make([]map[string]interface{}, 0, 0)

    for lang, count := range languageMap {
        var singleLang = make(map[string]interface{})
        singleLang["language"] = lang
        singleLang["count"] = count
        parsedLangs = append(parsedLangs, singleLang)
    }

    c.JSON(http.StatusOK, parsedLangs)
}

// Stars and Watchers
func GetExtendedStats() map[string]int {
    repositories := GetRepoJSON()

    extendedStatsMap := make(map[string]int)

    for i := 0; i < len(repositories); i++ {
        extendedStatsMap["Watchers"] += repositories[i].Watchers
        extendedStatsMap["Stars"] += repositories[i].Stars
    }

    return extendedStatsMap
}

func GetProfileJSON() OutProfile {
    resp := CallGitHubApi(profile_url)

    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)

    var profile Profile
    json.Unmarshal([]byte(body), &profile)

    extendedStats := GetExtendedStats();

    outProfile := OutProfile{
        Name: profile.Name,
        Location: profile.Location,
        Followers: profile.Followers,
        Following: profile.Following,
        URL: profile.URL,
        AvatarUrl: profile.AvatarUrl,
        TotalStars: extendedStats["Stars"],
        TotalWatchers: extendedStats["Watchers"],
    }

    return outProfile
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

    authHeader := "token " + os.Getenv("GH_ACCESS_TOKEN")
    req.Header.Set("Authorization", authHeader)

    resp, err := client.Do(req)

    if err != nil {
        zap.S().Infof("error calling the github api: %s", err)
    }

    return resp
}
