"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const ReceiptReportController_1 = require("./controllers/ReceiptReportController");
const router = (0, express_1.Router)();
exports.router = router;
//report
router.get('/generateReport', new ReceiptReportController_1.ReceiptReportController().generateReport);
router.get('/generateReceiptReport', new ReceiptReportController_1.ReceiptReportController().generateReceiptReport);
