"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var HomePage = /** @class */ (function () {
    function HomePage() {
        this.txt_todo = protractor_1.element(protractor_1.By.xpath("//input[@class='new-todo']"));
        this.lbl_alltasks = protractor_1.element.all(protractor_1.By.xpath("//ul[@class='todo-list']//label"));
        this.btn_taskdelete = protractor_1.element(protractor_1.By.xpath("//label[text()='Taskdelete']/../child::*[3]"));
        this.btn_TaskCompleted = protractor_1.element(protractor_1.By.xpath("//label[text()='TaskCompleted']/../child::*[1]"));
        this.tab_active = protractor_1.element(protractor_1.By.xpath("//a[text()='Active']"));
        this.tab_Completed = protractor_1.element(protractor_1.By.xpath("//a[text()='Completed']"));
    }
    return HomePage;
}());
exports.HomePage = HomePage;
