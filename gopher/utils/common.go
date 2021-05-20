package utils

import (
    "time"
    "log"

    "jakepauls.dev/gopher/setup"

    "github.com/joho/godotenv"
    "github.com/araddon/dateparse"
    "go.uber.org/zap"
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

// Returns current date formatted "DDMMYYY"
func GetDate() string {
    ct := time.Now()
    return ct.Format("01022006")
}

// Parses custom date formatted "YYYY-MM-DD"
func FormatCustomDate(cd string) string {
    t, err := dateparse.ParseAny(cd)

    if err != nil {
        zap.S().Warnf("[UTILS] failed to format custom date: %s", err)
    }

    layout := "2006-01-02"
    formattedDate := t.Format(layout)

    return formattedDate
}
