package com.fintrack.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Log {

    private static final Logger logger = LoggerFactory.getLogger(Log.class);

    public static void info(String message, Object... arguments) {
        logger.info(message, arguments);
    }

    public static void debug(String message, Object... arguments) {
        logger.debug(message, arguments);
    }

    public static void warn(String message, Object... arguments) {
        logger.warn(message, arguments);
    }

    public static void error(String message, Object... arguments) {
        logger.error(message, arguments);
    }
}
