"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectOptions = {
    dbName: "Hotel-API"
};
const connector = async (url, cb) => {
    try {
        console.log("from function: ", url);
        await (0, mongoose_1.connect)(url, connectOptions);
        cb();
        console.log("connected to database!");
    }
    catch {
        console.log("connection failed!");
    }
};
exports.default = connector;
//# sourceMappingURL=connectoDB.js.map