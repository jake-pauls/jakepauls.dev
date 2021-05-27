package routes

import (
    "time"
    "net/http"

    "github.com/gin-gonic/gin"
    "go.uber.org/zap"

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
    router.Use(CORS())

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

func CORS() gin.HandlerFunc {
    return func(c *gin.Context) {
        c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
    }
}
