package utils

import (
    "os"
    "time"
    "log"

    "github.com/joho/godotenv"
    "github.com/araddon/dateparse"
    "go.uber.org/zap"

    "jakepauls.dev/gopher/setup"
)

// Sources variables from .env file
func LoadEnv() {
    if err := godotenv.Load(); err != nil {
        // Check if env failure was due to prod
        // Since this is the first init method the ServerSetting is not yet configured
        if (os.Getenv("MODE") == "release") {
            log.Print("[env] heroku configuration detected, gopher set to RELEASE mode")
        } else {
            log.Print("[env] .env file not detected, gopher will default to DEBUG mode")
        }
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

// Returns current date formatted "DDMMYYY"
func GetDate() string {
    ct := time.Now()
    return ct.Format("01022006")
}

// Parses custom date formatted "YYYY-MM-DD"
func FormatCustomDate(cd string) string {
    t, err := dateparse.ParseAny(cd)

    if err != nil {
        zap.S().Warnf("[utils] failed to format custom date: %s", err)
    }

    layout := "2006-01-02"
    formattedDate := t.Format(layout)

    return formattedDate
}
