import { fileURLToPath } from "url";
import path from "path";
import { browser } from "@wdio/globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: "local",

  // =====================
  // Spec File Configuration
  // =====================
  specs: ["./features/**/c01-login.feature"],
  exclude: [],

  // ==========================
  // Capabilities Configuration
  // ==========================
  maxInstances: 5,
  capabilities: [
    {
      // Use the `chrome` browser
      browserName: "chrome",
      "goog:chromeOptions": {
        prefs: {
          "profile.default_content_setting_values.geolocation": 2, // Block location
          "profile.default_content_setting_values.notifications": 2, // Block notifications
          "profile.default_content_setting_values.media_stream": 2, // Block camera/microphone
          "profile.default_content_setting_values.usb_guard": 2, // Block USB device requests
          "profile.default_content_setting_values.serial_ask_for_urls": 2, // Block Serial device requests
          "profile.default_content_setting_values.hid_guard": 2, // Block HID device requests
        },
        args: [
          "--disable-infobars",
          //'--headless', // Run in headless mode (remove this to see the browser)
          "--disable-gpu",
          "--window-size=1920,1080",
        ],
      },
    },
  ],

  // ===================
  // Test Configurations
  // ===================
  logLevel: "info", // Set logging level
  bail: 0, // Stop tests after a certain number of failures
  baseUrl: "http://localhost", // Default base URL
  waitforTimeout: 10000, // Default timeout for all waitFor* commands
  connectionRetryTimeout: 120000, // Timeout for retrying WebDriver requests
  connectionRetryCount: 3, // Number of retries

  services: ["chromedriver"], // Use the ChromeDriver service

  framework: "cucumber", // Test framework
  cucumberOpts: {
    require: ["./features/**/c01-login.js"], // Path to step definitions
    backtrace: false,
    requireModule: [],
    dryRun: false,
    strict: false,
    tagExpression: "", // Use to run specific tagged scenarios
    timeout: 60000, // Timeout for step definitions
  },
  outputDir: path.join(__dirname, "logs"),
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: path.join(__dirname, "allure-results"), // Directory to save allure results
        disableWebdriverStepsReporting: false, // Enable or disable step logging
        disableWebdriverScreenshotsReporting: false, // Include screenshots in reports
      },
    ],
  ], // Use the spec reporter
};
