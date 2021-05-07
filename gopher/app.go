package main

import (
    "fmt"
    "net/http"
    "log"

    "github.com/gin-gonic/gin"

    "jakepauls.dev/gopher/setup"
    "jakepauls.dev/gopher/routes"
)

func main() {
    var serverSetup = setup.ServerSetup()
    gin.SetMode(serverSetup.RunMode)

    router := routes.InitRouter()
    port := fmt.Sprintf(":%d", serverSetup.Port)

    server := &http.Server {
        Addr:            port,
        Handler:       router,
    }

    log.Printf("[info] 🚀 http server started on port %s", port)

    server.ListenAndServe()
}
