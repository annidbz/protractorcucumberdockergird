"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XLSX = require("xlsx");
var workbook;
var worksheet;
var ExcelReader = /** @class */ (function () {
    function ExcelReader() {
    }
    ExcelReader.readExcelFile = function () {
        workbook = XLSX.readFile("../Excelfile/test.xlsx");
        worksheet = workbook.Sheets['Sheet1'];
        var cell = 'A2';
        console.log('value' + worksheet[cell].v);
    };
    ExcelReader.ExcelToJson = function () {
        workbook = XLSX.readFile("../Excelfile/test.xlsx");
        worksheet = workbook.Sheets['Sheet1'];
        return XLSX.utils.sheet_to_json(worksheet);
    };
    return ExcelReader;
}());
exports.ExcelReader = ExcelReader;
