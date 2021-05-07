package setup

import (
    "os"
)

type Server struct {
    RunMode     string
    Port        int
}

var ServerSetting = &Server{}

func ServerSetup() {
    /*
       Server Defaults
       Note: NGINX Load Balances from :4040 -> :8000
    */
    ServerSetting.RunMode = os.Getenv("MODE")
    ServerSetting.Port    = 4040
}
