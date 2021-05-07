package utils

import (
    "time"
    "log"

    "jakepauls.dev/gopher/setup"

    "github.com/joho/godotenv"
)

// Sources variables from .env file
func LoadEnv() {
    if err := godotenv.Load(); err != nil {
        log.Print("[warn] .env file not detected, gopher will default to DEBUG mode")
    }
}

// Verifies if server mode is set to 'release'
func IsProduction() bool {
    var isProd bool = false
    if setup.ServerSetting.RunMode == "release" {
       isProd = true
    }
    return isProd
}

// Returns string representation for current server mode
func GetServerMode() string {
    var serverMode string = setup.ServerSetting.RunMode
    if serverMode == "" {
        serverMode = "debug"
    }
    return serverMode
}

// Returns current date formated "DDMMYYY"
func GetDate() string {
    ct := time.Now()
    return ct.Format("01022006")
}
