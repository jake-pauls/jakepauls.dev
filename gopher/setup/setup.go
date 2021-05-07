package setup

import (
    "log"
    "os"
)

type Server struct {
    RunMode     string
    Port        int
}

func ServerSetup() Server {
    /*
       Server Defaults
       Note: NGINX Load Balances from :4040 -> :8000
    */
    var ServerSetup Server

    ServerSetup.RunMode = os.Getenv("MODE")
    ServerSetup.Port    = 4040

    log.Printf("[info] successfully setup server")
    return ServerSetup
}
