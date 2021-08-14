"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("mysql");
var Database = /** @class */ (function () {
    function Database() {
        var pool = mysql_1.createpool({
            host: "",
            user: "",
            password: "",
            database: "",
            connectionlimit: ""
        });
    }
    return Database;
}());
exports.Database = Database;
