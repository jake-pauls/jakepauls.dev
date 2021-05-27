package routes

import (
    "time"
    "net/http"

    "github.com/gin-gonic/contrib/static"
    "github.com/gin-gonic/gin"
    "go.uber.org/zap"

    "jakepauls.dev/gopher/utils"
    "jakepauls.dev/gopher/routes/api"
)

func InitRouter() *gin.Engine {
    router := gin.New()
    router.Use(gin.LoggerWithFormatter(func(param gin.LogFormatterParams) string {

        // Reroute logger to zap
        zap.S().Infof("[gin] [%s] %s %s %s %d %s",
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

    if (utils.IsProduction()) {
        zap.S().Info("[gin] successfully serving snowpack 'reactive' app")
        router.Use(static.Serve("/", static.LocalFile("./reactive", true)))
    }

    v1 := router.Group("/api")
    api.GitHubRegister(v1.Group("/gh"))

    // Test Endpoint
    v1.GET("/ping", func(c *gin.Context) {
        zap.S().Info("The client pinged, the server ponged...")
        c.Header("Content-Type", "application/json")
        c.JSON(http.StatusOK, gin.H{
            "ping": "pong",
        })
    })

    return router
}
