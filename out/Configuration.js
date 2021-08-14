"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var reporter = require("cucumber-html-reporter");
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    Capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function () {
        protractor_1.browser.ignoreSynchronization = true;
    },
    specs: ['../Features/Test1.feature'],
    cucumberOpts: {
        // require: 'Features/Step_Definitions/StepDef.js',
        format: 'json:./cucumberreports.json',
        // format: ['progress', 'pretty:output.txt'],
        //format:'pretty:./cucumberreports2.txt',
        onComplete: function () {
            //var reporter = require('cucumber-html-reporter');
            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberreports.json',
                output: './cucumber_report.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome 85.0.4183.83",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
            reporter.generate(options);
        },
        require: [
            'Features/Step_Definations/StepDef.js'
        ]
    },
    plugins: [{
            package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                openReportInBrowser: true,
                pageTitle: "Project Report",
                pageFooter: "<div><p>Protractor with cucumber</p></div>",
                customData: {
                    title: 'Protractor Cucucmber Report',
                    data: [
                        { label: 'Project', value: 'Protractor with Cucumber test' },
                        { label: 'Created By', value: 'Anirudha Agnihotri' }
                    ]
                }
            },
        }]
};
