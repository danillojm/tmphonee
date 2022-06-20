import { Router } from "express";
import { ReceiptReportController } from "./controllers/ReceiptReportController";



const router = Router();

//report
router.get('/generateReport', new ReceiptReportController().generateReport);
router.get('/generateReceiptReport', new ReceiptReportController().generateReceiptReport);


export {router}