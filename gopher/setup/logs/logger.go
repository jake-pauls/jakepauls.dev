package logs

import (
    "fmt"
    "log"

    "go.uber.org/zap"

    "jakepauls.dev/gopher/utils"
)

func InitLogger() *zap.Logger {
    var serverMode string  = utils.GetServerMode()
    var config zap.Config

    // Build appropriate logger, if debug, save a log locally
    if !utils.IsProduction() {
        config = zap.NewDevelopmentConfig()
        logName := fmt.Sprintf("%s.%s.log", utils.GetDate(), serverMode)
        config.OutputPaths= []string{logName}
    } else {
        config = zap.NewProductionConfig()
    }

    zapLogger, err := config.Build()
    if err != nil {
        log.Fatalf("failed to initalize zap logger: %v", err)
    }

    return zapLogger
}


// Replaces global logger with zap logger
func ReplaceGlobalLogger() {
    zapLogger := InitLogger()
    zap.ReplaceGlobals(zapLogger)
    defer zapLogger.Sync()        // Flashes buffer, if necessary

    var serverMode = utils.GetServerMode()
    sugarLogger := zapLogger.Sugar()
    sugarLogger.Infof("zap logger initialized in %s mode", serverMode)
}
