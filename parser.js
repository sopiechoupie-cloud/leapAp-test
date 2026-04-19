const fs = require("fs");

// Get file path from command line argument
const filePath = process.argv[2];

if (!filePath) {
    console.log("Please provide a file path");
    process.exit(1);
}

// Read file content
const content = fs.readFileSync(filePath, "utf8");

// Regex patterns (MATCH YOUR FILE)

const customerNumber = content.match(/Customer Number:\s*(\d+)/i);
const accountNumber = content.match(/Account Number:\s*(\d+)/i);
const billingPeriod = content.match(/Billing Period:\s*(.+)/i);
const invoiceNumber = content.match(/Invoice Number:\s*(\d+)/i);
const invoiceDate = content.match(/Invoice Date:\s*(.+)/i);
const totalNewCharges = content.match(/Total New Charges:\s*\$?([\d,]+\.\d{2})/i);

console.log("\n=== INVOICE INFORMATION ===\n");

if (customerNumber) {
    console.log("Customer Number:", customerNumber[1]);
}

if (accountNumber) {
    console.log("Account Number:", accountNumber[1]);
}

if (billingPeriod) {
    console.log("Billing Period:", billingPeriod[1]);
}

if (invoiceNumber) {
    console.log("Invoice Number:", invoiceNumber[1]);
}

if (invoiceDate) {
    console.log("Invoice Date:", invoiceDate[1]);
}

if (totalNewCharges) {
    console.log("Total New Charges:", "$" + totalNewCharges[1]);
}
console.log("\nParsing completed successfully");