package api

import (
    "io/ioutil"
    "net/http"
    "encoding/json"

    "github.com/gin-gonic/gin"
    "go.uber.org/zap"
)

const repos_url string = "https://api.github.com/users/jacob-pauls/repos"

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
    group.GET("/repos", GetRepos)
}

// Retrieve repository data
func GetRepos(c *gin.Context) {
    resp, err := http.Get(repos_url)

    if err != nil {
        zap.S().Infof("error retrieving repos from github: %s", err)
    }

    // Close body and decode response
    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)

    // Parse JSON and append to array
    var repositories []Repository
    json.Unmarshal([]byte(body), &repositories)

    c.JSON(http.StatusOK, repositories)
}
