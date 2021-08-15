"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var protractor_1 = require("protractor");
var HomePage_1 = require("../../PageObject/HomePage");
var ProtractorFunctions_1 = require("../../Functions/ProtractorFunctions");
var test_1 = require("../../PageObject/test");
//import { data } from '../../JSONData/testjson';
//const fs = require('fs');
//const data = require("../../JSONData/testjson");
var data = require("../../JSONData/testdata.json");
var fs = require('fs');
var Api_1 = require("../../ApiFolder/Api");
var ExcelReader_1 = require("../../XLSX/ExcelReader");
var expect = require("chai").expect;
protractor_1.browser.ignoreSynchronisation = true;
var hp = new HomePage_1.HomePage();
var api = new Api_1.Api();
var t = new test_1.test();
var protractorfunctions = new ProtractorFunctions_1.ProtractorFunctions();
var EC = protractor_1.protractor.ExpectedConditions;
//let readjson = new testjson();
//let rawdata = await fs.readFileSync('../../JSONData/testjson.json');
//let rawdata = fs.readFileSync(__dirname+'../../JSONData/testdata.json', 'utf8');
//let data = JSON.parse(rawdata);
cucumber_1.Given('I launch the {string}', { timeout: 60 * 1000 }, function (url1) {
    return __awaiter(this, void 0, void 0, function () {
        var arrsort, condata;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    arrsort = [1, 5, 7, 3, 2, 4, 6, 33, 56];
                    console.log("SORTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
                    console.log(arrsort.sort(test_1.test.compare));
                    console.log(arrsort.sort().map(function (arr) { return ((arr.toString())); }));
                    return [4 /*yield*/, ExcelReader_1.ExcelReader.readExcelFile()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, ExcelReader_1.ExcelReader.ExcelToJson()];
                case 2:
                    condata = _a.sent();
                    console.log(condata);
                    return [4 /*yield*/, protractorfunctions.implicitwait(3000)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, protractorfunctions.threadsleep(3000)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, protractorfunctions.geturl(data.url)];
                case 5:
                    _a.sent();
                    // let mySet = new Set();  
                    //  let arr: String[];
                    //  arr = await browser.getAllWindowHandles();
                    // console.log("sdsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
                    //browser.switchTo().alert().accept;
                    //console.log(arr)
                    console.log(data.tasks.task1);
                    console.log(data.tasks.task2);
                    console.log(data.tasks.task3);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('enter {string} under todo', { timeout: 60 * 1000 }, function (text) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractorfunctions.protractorExplicitWait(hp.txt_todo, 1000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractorfunctions.protractorsendKeys(hp.txt_todo, text)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractorfunctions.threadsleep(3000)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('perform submit', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractorfunctions.protractorKeyEnter()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('todo task with {string} should  be added successfully', { timeout: 60 * 1000 }, function (text1) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log(hp.lbl_alltasks.getText());
            hp.lbl_alltasks.then(function () {
                protractorfunctions.protractorgetText(hp.lbl_alltasks).then(function (text) {
                    console.log(text);
                });
            });
            return [2 /*return*/];
        });
    });
});
cucumber_1.When('user delete {string} it should be deleted', { timeout: 60 * 1000 }, function (text) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractorfunctions.threadsleep(3000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractorfunctions.protractorjavaScriptExecuter("arguments[0].click();", hp.btn_taskdelete)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('click on active tab {string} should be displayed', { timeout: 60 * 1000 }, function (text) {
    return __awaiter(this, void 0, void 0, function () {
        var falg, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    falg = false;
                    return [4 /*yield*/, protractor_1.browser.sleep(4000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, hp.tab_active.click()];
                case 2:
                    _a.sent();
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < hp.lbl_alltasks.length)) return [3 /*break*/, 6];
                    if (hp.lbl_alltasks[i].getText()) {
                        falg = true;
                    }
                    return [4 /*yield*/, expect(falg).to.be.true];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('click on completed tab {string} should be displayed', { timeout: 60 * 1000 }, function (text) {
    return __awaiter(this, void 0, void 0, function () {
        var falg, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    falg = false;
                    return [4 /*yield*/, protractor_1.browser.sleep(4000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, hp.tab_Completed.click()];
                case 2:
                    _a.sent();
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < hp.lbl_alltasks.length)) return [3 /*break*/, 6];
                    if (hp.lbl_alltasks[i].getText()) {
                        falg = true;
                    }
                    return [4 /*yield*/, expect(falg).to.be.true];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('mark {string} as complete', { timeout: 60 * 1000 }, function (text) {
    return __awaiter(this, void 0, void 0, function () {
        var falg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    falg = false;
                    return [4 /*yield*/, protractor_1.browser.sleep(4000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.switchTo().alert().accept()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractorfunctions.protractorclick(hp.btn_TaskCompleted)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('verify {string} call to {string} posts', { timeout: 60 * 1000 }, function (call, type) {
    return __awaiter(this, void 0, void 0, function () {
        var resp, _a, resp, _b, _c, _d, resp, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    if (!(call == "GET")) return [3 /*break*/, 9];
                    if (!(type == "Allpost")) return [3 /*break*/, 2];
                    resp = api.getrequest('https://jsonplaceholder.typicode.com/posts');
                    // console.log((await resp).status);
                    _a = expect;
                    return [4 /*yield*/, resp];
                case 1:
                    // console.log((await resp).status);
                    _a.apply(void 0, [(_g.sent()).status]).to.equal(200);
                    return [3 /*break*/, 9];
                case 2:
                    if (!(type == "Firstpost")) return [3 /*break*/, 6];
                    resp = api.getrequest('https://jsonplaceholder.typicode.com/posts/1');
                    _b = expect;
                    return [4 /*yield*/, resp];
                case 3:
                    _b.apply(void 0, [(_g.sent()).status]).to.equal(200);
                    _c = expect;
                    return [4 /*yield*/, resp];
                case 4:
                    _c.apply(void 0, [(_g.sent()).data.userId]).to.equal(1);
                    _d = expect;
                    return [4 /*yield*/, resp];
                case 5:
                    _d.apply(void 0, [(_g.sent()).data.title]).to.equal('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
                    return [3 /*break*/, 9];
                case 6:
                    if (!(type == "withid1")) return [3 /*break*/, 9];
                    resp = api.getrequest('https://jsonplaceholder.typicode.com/comments?postId=1');
                    _e = expect;
                    return [4 /*yield*/, resp];
                case 7:
                    _e.apply(void 0, [(_g.sent()).status]).to.equal(201);
                    _f = expect;
                    return [4 /*yield*/, resp];
                case 8:
                    _f.apply(void 0, [(_g.sent()).data[0].postId]).to.equal(1);
                    _g.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Before(function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            protractor_1.browser.manage().deleteAllCookies();
            return [2 /*return*/];
        });
    });
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function () {
        var screenshot;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(scenario.result.status === cucumber_1.Status.FAILED)) return [3 /*break*/, 2];
                    return [4 /*yield*/, protractor_1.browser.takeScreenshot()];
                case 1:
                    screenshot = _a.sent();
                    this.attach(screenshot, "image/png");
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
});
