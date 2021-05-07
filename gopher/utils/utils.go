package utils

import (
    "log"
    "time"

    "jakepauls.dev/gopher/setup"

    "github.com/joho/godotenv"
)

/*
    Sources variables from .env file
*/
func LoadEnv() {
    if err := godotenv.Load(); err != nil {
        log.Printf("no .env file found")
    }
}


/*
    Verifies if server mode is set to 'release'
*/
func IsProduction() bool {
    var isProd bool = false
    if setup.ServerSetting.RunMode == "release" {
       isProd = true
    }
    return isProd
}


/*
    Returns string representation for current server mode
*/
func GetServerMode() string {
    return setup.ServerSetting.RunMode
}


/*
    Returns current date formated "DDMMYYY"
*/
func GetDate() string {
    ct := time.Now()
    return ct.Format("01022006")
}
