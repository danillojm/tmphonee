"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptReportController = void 0;
const ejs_1 = __importDefault(require("ejs"));
const html_pdf_1 = __importDefault(require("html-pdf"));
const path_1 = __importDefault(require("path"));
const puppeteer_1 = __importDefault(require("puppeteer"));
const ReceiptReport_1 = require("../model/ReceiptReport");
const ReceiptReportService_1 = require("../services/ReceiptReportService");
let receiptReport;
class ReceiptReportController {
    async generateReport(request, response) {
        //const { clientName, cpf, brandName, description, imei, salePrice, observation } = request.body;
        const service = new ReceiptReportService_1.ReceiptReportService();
        //    const receiptReport = await service.getReceiptReport({ clientName, cpf, brandName, description, imei, salePrice, observation, });
        const filePath = path_1.default.join(__dirname, "../report/receiptReport.ejs");
        console.log(receiptReport);
        console.log(receiptReport);
        ejs_1.default.renderFile(filePath, { receiptReport }, (err, data) => {
            if (err) {
                return response.send("Erro na leitura do arquivo");
            }
            html_pdf_1.default.create(data).toFile("recibo.pdf", (err, data) => {
                if (err) {
                    return response.send("Erro ao gerar o pdf");
                }
            });
            return response.send(data);
        });
    }
    async generateReceiptReport(request, response) {
        const { clientName, cpf, brandName, description, imei, salePrice, observation } = request.query;
        receiptReport = new ReceiptReport_1.ReceiptReport();
        receiptReport.clientName = request.query["clientName"].toString();
        receiptReport.cpf = request.query["cpf"].toString();
        receiptReport.brandName = request.query["brandName"].toString();
        receiptReport.description = request.query["description"].toString();
        receiptReport.imei = request.query["imei"].toString();
        receiptReport.salePrice = request.query["salePrice"].toString();
        receiptReport.observation = request.query["observation"].toString();
        const browser = await puppeteer_1.default.launch();
        const page = await browser.newPage();
        await page.goto("http://localhost:3000/generateReport", {
            waitUntil: "networkidle0",
        });
        const pdf = await page.pdf({ path: "hn.pdf", format: "a4" });
        await browser.close();
        response.contentType("application/pdf");
        return response.send(pdf);
    }
}
exports.ReceiptReportController = ReceiptReportController;
