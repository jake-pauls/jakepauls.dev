package routes

import (
    "fmt"
    "net/http"

    "github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
    router := gin.New()
    router.Use(gin.Logger())
    router.Use(gin.Recovery())

    api := router.Group("/api")
    {
        // Test Endpoint
        api.GET("/ping", func(c *gin.Context) {
            fmt.Println("The client pinged, the server ponged...")
            c.Header("Content-Type", "application/json")
            c.JSON(http.StatusOK, gin.H{
                "ping": "pong",
            })
        })
    }

    return router
}
