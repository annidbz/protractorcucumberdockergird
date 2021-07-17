"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
//import * as reporter from "cucumber-html-reporter"
//declare var require: any
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
        require: 'Features/Step_Definations/StepDef.js'
    }
};
