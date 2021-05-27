package main

import (
    "fmt"
    "net/http"

    "github.com/gin-gonic/gin"
    "go.uber.org/zap"

    "jakepauls.dev/gopher/utils"
    "jakepauls.dev/gopher/setup"
    "jakepauls.dev/gopher/setup/logs"
    "jakepauls.dev/gopher/routes"
)

func init() {
    // Load the environment
    utils.LoadEnv()

    // Load server setup
    setup.ServerSetup()

    // Replace "log" with zap
    logs.ReplaceGlobalLogger()
}

func main() {
    serverSetup := setup.ServerSetting
    gin.SetMode(serverSetup.RunMode)

    router := routes.InitRouter()
    port := fmt.Sprintf(":%d", serverSetup.Port)

    server := &http.Server {
        Addr:            port,
        Handler:       router,
    }

    zap.S().Infof("[gin] http server started on port %d", serverSetup.Port)

    server.ListenAndServe()
}
