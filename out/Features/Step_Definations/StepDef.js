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
var Api_1 = require("../../ApiFolder/Api");
var expect = require("chai").expect;
protractor_1.browser.ignoreSynchronisation = true;
var hp = new HomePage_1.HomePage();
var api = new Api_1.Api();
var EC = protractor_1.protractor.ExpectedConditions;
cucumber_1.Given('I launch the {string}', { timeout: 60 * 1000 }, function (url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.sleep(4000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.get(url)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('enter {string} under todo', { timeout: 60 * 1000 }, function (text) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(hp.txt_todo), 10000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, hp.txt_todo.sendKeys(text)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(4000)];
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
                case 0: return [4 /*yield*/, protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform()];
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
                hp.lbl_alltasks.getText().then(function (text) {
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
                case 0: return [4 /*yield*/, protractor_1.browser.sleep(4000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.executeScript("arguments[0].click();", hp.btn_taskdelete)];
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
                    return [4 /*yield*/, hp.btn_TaskCompleted.click()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('verify {string} call to {string} posts', { timeout: 60 * 1000 }, function (call, type) {
    return __awaiter(this, void 0, void 0, function () {
        var resp, _a, _b, _c, resp, _d, _e, _f, resp, _g, _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    if (!(call == "GET")) return [3 /*break*/, 10];
                    if (!(type == "Allpost")) return [3 /*break*/, 3];
                    resp = api.getrequest('https://jsonplaceholder.typicode.com/posts');
                    _b = (_a = console).log;
                    return [4 /*yield*/, resp];
                case 1:
                    _b.apply(_a, [(_j.sent()).status]);
                    _c = expect;
                    return [4 /*yield*/, resp];
                case 2:
                    _c.apply(void 0, [(_j.sent()).status]).to.equal(200);
                    return [3 /*break*/, 10];
                case 3:
                    if (!(type == "Firstpost")) return [3 /*break*/, 7];
                    resp = api.getrequest('https://jsonplaceholder.typicode.com/posts/1');
                    _d = expect;
                    return [4 /*yield*/, resp];
                case 4:
                    _d.apply(void 0, [(_j.sent()).status]).to.equal(200);
                    _e = expect;
                    return [4 /*yield*/, resp];
                case 5:
                    _e.apply(void 0, [(_j.sent()).data.userId]).to.equal(1);
                    _f = expect;
                    return [4 /*yield*/, resp];
                case 6:
                    _f.apply(void 0, [(_j.sent()).data.title]).to.equal('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
                    return [3 /*break*/, 10];
                case 7:
                    if (!(type == "withid1")) return [3 /*break*/, 10];
                    resp = api.getrequest('https://jsonplaceholder.typicode.com/comments?postId=1');
                    _g = expect;
                    return [4 /*yield*/, resp];
                case 8:
                    _g.apply(void 0, [(_j.sent()).status]).to.equal(200);
                    _h = expect;
                    return [4 /*yield*/, resp];
                case 9:
                    _h.apply(void 0, [(_j.sent()).data[0].postId]).to.equal(1);
                    _j.label = 10;
                case 10: return [2 /*return*/];
            }
        });
    });
});
