package routes

import (
    "fmt"
    "time"
    "net/http"

    "jakepauls.dev/gopher/routes/api"

    "github.com/gin-gonic/gin"
    "go.uber.org/zap"
)

func InitRouter() *gin.Engine {
    router := gin.New()
    router.Use(gin.LoggerWithFormatter(func(param gin.LogFormatterParams) string {

        // Reroute logger to zap
        zap.S().Infof("[GIN] [%s] %s %s %s %d %s",
		    param.TimeStamp.Format(time.RFC1123),
			param.Method,
            param.Path,
            param.Request.Proto,
            param.StatusCode,
            param.ErrorMessage,
		)

        return ""
    }))
    router.Use(gin.Recovery())

    v1 := router.Group("/api")
    api.GitHubRegister(v1.Group("/gh"))

    // Test Endpoint
    v1.GET("/ping", func(c *gin.Context) {
        fmt.Println("The client pinged, the server ponged...")
        c.Header("Content-Type", "application/json")
        c.JSON(http.StatusOK, gin.H{
            "ping": "pong",
        })
    })

    return router
}
