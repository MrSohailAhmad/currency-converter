import * as readline from "readline-sync";

// Define the available currencies and their conversion rates (relative to USD)
const conversionRates: { [key: string]: number } = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  JPY: 110,
  PKR: 278.25,
  // Add more currencies as needed
};

function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string
): number {
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
    console.log(
      `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(
        2
      )} ${toCurrency}`
    );
  } catch (error) {
    console.error(error);
  }
}

main();
