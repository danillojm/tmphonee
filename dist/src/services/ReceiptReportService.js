"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptReportService = void 0;
const ReceiptReport_1 = require("../model/ReceiptReport");
class ReceiptReportService {
    async getReceiptReport({ clientName, cpf, brandName, description, imei, salePrice, observation }) {
        const receiptReport = new ReceiptReport_1.ReceiptReport();
        receiptReport.clientName = clientName;
        receiptReport.cpf = cpf;
        receiptReport.brandName = brandName;
        receiptReport.description = description;
        receiptReport.imei = imei;
        receiptReport.salePrice = salePrice;
        receiptReport.observation = observation;
        return receiptReport;
    }
}
exports.ReceiptReportService = ReceiptReportService;
