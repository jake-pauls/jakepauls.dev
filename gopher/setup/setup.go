package setup

import (
    "os"
)

type Server struct {
    RunMode     string
    Port        int
}

var ServerSetting = &Server{}

// Server Defaults
// Note: NGINX Load Balances from :4040 -> :8000
func ServerSetup() {
    ServerSetting.RunMode = os.Getenv("MODE")
    ServerSetting.Port    = 4040
}
