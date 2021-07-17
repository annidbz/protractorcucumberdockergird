import { Config, Capabilities,browser } from "protractor";
//import * as reporter from "cucumber-html-reporter"
//declare var require: any

export let config: Config = {
    directConnect: false,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    Capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function () {
        browser.ignoreSynchronization = true;      
    },

    specs: ['../Features/Test1.feature'],

    cucumberOpts: {
        require: 'Features/Step_Definations/StepDef.js'
    }
}