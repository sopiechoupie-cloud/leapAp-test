LeapAP Coding Test - Condoworks

Candidate: Oriane Nono Sopie

---

# Project Description

This project contains two Node.js programs:

1. Parser (Regex Analysis)
Extracts data from a water utility bill:
- Customer Number
- Account Number
- Invoice Number
- Invoice Date
- Billing Period
- Total New Charges

2. Scraper (Puppeteer Automation)
Automates LeapAP platform:
- Login
- Navigate to invoices
- Search invoice 123444
- Open invoice
- Download PDF
- Save locally

---

# Requirements

- Node.js 22+
- Puppeteer

---
## Environment

This project was developed and tested using Node.js v25.4.0.

It is compatible with Node.js v22 as required by the assignment.

---
# Installation

npm install

---

# Run

Parser:
node parser.js test-1.txt

Scraper:
node scraper.js

## Output

- Parsed invoice data displayed in terminal
- PDF downloaded as invoice-123444.pdf

---

## Author
Oriane Nono Sopie