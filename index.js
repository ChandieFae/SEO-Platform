console.log("Hello, Railway!");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Existing route
app.get("/", (req, res) => {
    res.send("Hello, Railway!");
});

// New route
app.get("/greet", (req, res) => {
    res.send("Hello, from your new route!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// Load environment variables
require('dotenv').config();

// Shared Configurations
const config = {
    // Application
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV || 'development',

    // JWT
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',

    // SEO Defaults
    DEFAULT_KEYWORDS: process.env.DEFAULT_KEYWORDS || 'railway,train schedules,station info',
    META_TITLE: process.env.META_TITLE || 'SEO Platform for Railway Analytics',
    META_DESCRIPTION: process.env.META_DESCRIPTION || 'Optimize your railway content with the best SEO tools.',

    // Security
    API_RATE_LIMIT: process.env.API_RATE_LIMIT || 100,
    CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',

    // Logging
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
    LOG_PATH: process.env.LOG_PATH || 'logs/',

    // Third-Party Services
    MAPS_API_KEY: process.env.MAPS_API_KEY,
    PAYMENT_GATEWAY_KEY: process.env.PAYMENT_GATEWAY_KEY,

    // Email
    SMTP_HOST: process.env.SMTP_HOST || 'smtp.gmail.com',
    SMTP_PORT: process.env.SMTP_PORT || 587,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
};

// Example Usage
console.log(`Application is running in ${config.NODE_ENV} mode`);
console.log(`Server will start on port: ${config.PORT}`);
console.log(`SEO Keywords: ${config.DEFAULT_KEYWORDS}`);

// Export the config for use in other files
module.exports = config;
