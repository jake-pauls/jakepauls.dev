package setup

import (
    "fmt"
    "os"
    "strconv"
)

type Server struct {
    RunMode     string
    Port        int
}

var ServerSetting = &Server{}

// Server Defaults
// Note: NGINX Load Balances from :4040 -> :8000
func ServerSetup() {
    port := os.Getenv("PORT")

    if port == "" {
        port = "4040"
    }

    ServerSetting.RunMode = os.Getenv("MODE")
    ServerSetting.Port, _    = strconv.Atoi(port)
    fmt.Printf("fed port %s", port)
}
