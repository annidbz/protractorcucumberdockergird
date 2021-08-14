"use strict";
//import { ElementFinder, By, element, ElementArrayFinder} from "protractor";
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
var test = /** @class */ (function () {
    function test() {
        this.sum = function (first, second) { console.log(first + second); };
        this.sumopetional = function (first, second, third) { console.log(first + second); };
        this.sumdefault = function (first, second, third) {
            if (third === void 0) { third = 8; }
            console.log(first + second + third);
        };
    }
    test.prototype.namecall = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list, a, b, a, person1, person2, stringarray, stringnumarray, anyarray, objarray, abc, sum, sumopetional, me, greetPerson;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        list = ['first', 'second', 'third', 'forth'];
                        return [4 /*yield*/, list.push('fifth')];
                    case 1:
                        _a.sent();
                        //list print
                        return [4 /*yield*/, list.forEach(function (list) {
                                console.log(list);
                            })];
                    case 2:
                        //list print
                        _a.sent();
                        if (true) {
                            a = 'hi';
                            b = 'hello';
                            a = 'hi1';
                            //let b ='hello1';
                            b = 'hello1';
                            //    var
                        }
                        return [4 /*yield*/, console.log(a)];
                    case 3:
                        _a.sent();
                        //console.log(b);
                        return [4 /*yield*/, list.forEach(function (value) {
                                console.log(value);
                            })];
                    case 4:
                        //console.log(b);
                        _a.sent();
                        person1 = {
                            name: "anirudha",
                            age: 31,
                            place: 'gwalior'
                        };
                        person2 = {
                            name: "andy",
                            age: 32,
                            place: 'jakarta'
                        };
                        return [4 /*yield*/, console.log(person1)];
                    case 5:
                        _a.sent();
                        stringarray = ["1", "2"];
                        stringnumarray = ["3", 4];
                        anyarray = ["5"];
                        objarray = [person1, person2];
                        abc = [1, "2"];
                        return [4 /*yield*/, console.log(stringarray)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, console.log(stringnumarray)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, console.log(anyarray)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, console.log(objarray)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, console.log(abc)];
                    case 10:
                        _a.sent();
                        this.sum(5, 10);
                        this.sumopetional(6, 17);
                        this.sumdefault(8, 20);
                        return [4 /*yield*/, console.log(this.testFunction())];
                    case 11:
                        _a.sent();
                        me = {
                            name: "hello",
                            age: 12,
                        };
                        greetPerson = function (Person) {
                            console.log(Person.name);
                            console.log(Person.age);
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    test.prototype.testFunction = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, console.log("Hello")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 3];
                }
            });
        });
    };
    test.testfibonacci = function () {
        var n3, n2, n1;
        n1 = 0;
        n2 = 1;
        for (var index = 0; index < 100; index++) {
            n3 = n1 + n2;
            console.log(n3);
            n1 = n2;
            n2 = n3;
        }
    };
    test.secondlargestnumber = function () {
        var arr;
        var temp;
        arr = [45, 7, 43, 78, 98, 54, 47];
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        console.log(arr);
    };
    test.armstrongnumber = function (num) {
        var num = 153;
        var remainder;
        var result = 0;
        var othernumber = num;
        while (num != 0) {
            remainder = othernumber % 10;
            result = result + Math.pow(remainder, 3);
            num = (num / 3);
        }
        console.log(result);
        console.log(othernumber);
        console.log(num);
        if (othernumber === result) {
            console.log(result + "Armstrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrong");
        }
        else {
            console.log(result + "NOTTTTTTTTTTTTTTTTTT  Armstrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrong");
        }
    };
    test.reverseString = function () {
        var str = "Helloworld";
        var strarr = str.split('');
        console.log(strarr);
        var revstr = [];
        var i = 0;
        for (var index = strarr.length - 1; index >= 0; index--) {
            console.log(strarr[index]);
            revstr[i] = strarr[index];
            i++;
        }
        console.log(revstr.toString());
    };
    test.repetable = function () {
        var arr = [1, 2, 3, 3, 4, 5, 6];
        var statement = false;
        var set = new Set();
        for (var index = 0; index < arr.length; index++) {
            if (set.has(arr[index])) {
                statement = true;
            }
            set.add(arr[index]);
        }
    };
    return test;
}());
exports.test = test;
