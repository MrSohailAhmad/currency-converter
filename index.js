"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
// Define the available currencies and their conversion rates (relative to USD)
const conversionRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110,
    PKR: 278.25,
    // Add more currencies as needed
};
function convertCurrency(amount, fromCurrency, toCurrency) {
    if (!conversionRates[fromCurrency] || !conversionRates[toCurrency]) {
        throw new Error("Invalid currency");
    }
    const amountInUSD = amount / conversionRates[fromCurrency];
    return amountInUSD * conversionRates[toCurrency];
}
function main() {
    const amount = parseFloat(readline.question("Enter the amount to convert: "));
    const fromCurrency = readline
        .question("Enter the source currency (e.g., USD, EUR): ")
        .toUpperCase();
    const toCurrency = readline
        .question("Enter the target currency (e.g., USD, EUR): ")
        .toUpperCase();
    try {
        const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
        console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
    }
    catch (error) {
        console.error(error);
    }
}
main();
