"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnData = void 0;
var returnData = function (data) {
    if (data) {
        return data;
    }
    else {
        throw new Error("Data not found");
    }
};
exports.returnData = returnData;
