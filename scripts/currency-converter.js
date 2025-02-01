// scripts/currency-converter.js

async function fetchRates() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/MYR'); // Using a reliable public API
    const data = await response.json();
    return data.rates;
}

async function populateCurrencyOptions() {
    const rates = await fetchRates();
    const fromCurrencySelect = document.getElementById('from-currency');
    
    Object.keys(rates).forEach(currency => {
        if (currency !== 'MYR') {
            const option = document.createElement('option');
            option.value = currency;
            option.textContent = currency;
            fromCurrencySelect.appendChild(option);
        }
    });
}

async function convertCurrency() {
    const rates = await fetchRates();
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = 'MYR';

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const rate = rates[fromCurrency];
    if (!rate) {
        alert('Currency not supported.');
        return;
    }

    const result = amount * (rates[toCurrency] / rate);
    document.getElementById('conversion-result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}

document.addEventListener('DOMContentLoaded', populateCurrencyOptions);

