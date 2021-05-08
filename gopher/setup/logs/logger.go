package logs

import (
    "fmt"
    "os"

    "go.uber.org/zap"
    "go.uber.org/zap/zapcore"

    "jakepauls.dev/gopher/utils"
)

func InitLogger() *zap.Logger {
    productionEncoder := zap.NewProductionEncoderConfig()
    fileEncoder := zapcore.NewJSONEncoder(productionEncoder)

    // Configure file and console encoding
    productionEncoder.EncodeTime = zapcore.ISO8601TimeEncoder
    consoleEncoder := zapcore.NewConsoleEncoder(productionEncoder)

    // Default to debugging logs if gopher is outside of production
    logLevel := zap.DebugLevel
    if utils.IsProduction() {
        logLevel = zap.InfoLevel
    }

    logName := fmt.Sprintf("%s.%s.log", utils.GetDate(), logLevel)
    logFile, _ := os.Create(logName)

    // Routes logs to file and stdout
    core := zapcore.NewTee(
        zapcore.NewCore(fileEncoder, zapcore.AddSync(logFile), logLevel),
        zapcore.NewCore(consoleEncoder, zapcore.AddSync(os.Stdout), logLevel),
    )

    zapLogger := zap.New(core)

    return zapLogger
}


// Replaces global logger with zap logger
func ReplaceGlobalLogger() {
    zapLogger := InitLogger()
    zap.ReplaceGlobals(zapLogger)
    defer zapLogger.Sync()        // Flashes buffer, if necessary
}
