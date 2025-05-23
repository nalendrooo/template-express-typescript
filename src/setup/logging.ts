import winston from "winston";

export const logger = winston.createLogger({
    level: "debug",
    format: winston.format.json(),
    transports: [
        new winston.transports.Console()
    ]
    // level: "info",
    // format: winston.format.combine(
    //     winston.format.timestamp(),
    //     winston.format.json()
    // ),
    // defaultMeta: { service: "template-express" },
    // transports: [
    //     //
    //     // - Write to all logs with level `info` and below to `combined.log`
    //     // - Write all logs error (and below) to `error.log`.
    //     //
    //     new winston.transports.File({ filename: "error.log", level: "error" }),
    //     new winston.transports.File({ filename: "combined.log" }),
    // ],
});