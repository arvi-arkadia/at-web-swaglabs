# Swag Labs UI AUTOMATION

Swag Labs UI AUTOMATION using Webdriver IO and Javascript
Coverage : Web UI

## Requirement
1. Node JS (latest version recommended)
```https://nodejs.org/en/download/package-manager```
2. Android Studio
```https://developer.android.com/studio```
3. Android Device Emulator, with at least android version 11 using Google API version (DON'T USE GOOGLE PLAY STORE VERSION)
4. ADB Setup
```https://developer.android.com/tools/adb```
5. App/Web Test : Swag Labs
6. Allure
```https://allurereport.org/docs/install/```
7. Appium
```https://appium.io/docs/en/2.0/quickstart/install/```
8. Swag User Credentials (User, Password), add it under swagCred object in
```/constant/sessionValue.js```

### Optional
1. Appium Inspector
```https://github.com/appium/appium-inspector```
2. Chropath for chrome
```https://chrome-stats.com/d/ljngjbnaijcbncmcnjfhigebomdlkcjo/download```

## Installation

``Make Sure you already have install all requirement above``

1. Clone the project using SSH
```git clone {{sshurl}}```
2. cd to the root directory and run 
```npm run install```

``Manual Installation Webdriver Selenium and Appium``
1. Init File Project
```npm init -y```
2.  Install Appium Driver
```npm install appium --save-dev```\n
```npm install @wdio/appium-service appium```\n
```npm install appium-uiautomator2-driver --save-dev```
4.  Install Chrome driver
```npm install chromedriver --save-dev```\n
```npm install wdio-chromedriver-service --save-dev```
6.  Install Other Dependencies
```npm install @wdio/cli```\n
```npm install chai --save-dev```\n
```npm install axios --save-dev```\n
```npm install selenium-webdriver --save-dev```\n
```npm install @wdio/allure-reporter --save-dev```\n

## Usage

1. For Web version, run using command below
```npx wdio run ./wdio.web.conf.js --spec ./test/specs/test.e2e.web.js```


2. For Android version, before running the command, make sure you have spawned an android device emulator.
- Make sure it already detected by running
```adb devices```
- Make sure it already have ```test APK``` installed, update it to latest version by opening the apk and wait for several minutes and reopen the apps.
- Command 
- ```npx wdio run ./wdio.mobile.conf.js --spec ./test/specs/test.e2e.mobile.js```

You can run another test file by using template below
```Template Syntax
npx wdio run [config file] --spec [test file]
```

3. To generate allure report, run a test case, after that make sure folder is generated
```
allure-results
```
Run below command to generate report
```allure generate allure-results --clean```

Open the report by running command
```allure open```


## Misc

1. You can run one the test case in a test suite by adding "only" on test case, example
```it.only("User can do something"....)```

2. You can run a test cases with similar pattern by using command below, for example
```Template Syntax
npx wdio run [test config] --mochaOpts.grep [keyword]
```
Example :
```npx wdio run ./wdio.mobile.conf.js --mochaOpts.grep "putaway" ```
