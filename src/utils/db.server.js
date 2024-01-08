"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var client_1 = require("@prisma/client");
var db;
if (!global.__db) {
    global.__db = new client_1.PrismaClient();
}
exports.db = db = global.__db;
