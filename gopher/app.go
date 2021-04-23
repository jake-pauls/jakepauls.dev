package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("🚀 Server running on https://localhost:8000")
	app := gin.Default()

	api := app.Group("/api")
	{
		api.GET("/ping", func(c *gin.Context) {
			c.Header("Content-Type", "application/json")
			c.JSON(http.StatusOK, gin.H{
				"ping": "pong",
			})
		})
	}

	app.Run(":4040")
}