// currency-converter.js
async function fetchRates() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/MYR'); // Replace with Bank Negara API if available
    const data = await response.json();
    return data.rates;
}

async function convertCurrency() {
    const rates = await fetchRates();
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    const result = (amount / rates[fromCurrency]) * rates[toCurrency];
    document.getElementById('conversion-result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}

// Populate the currency options
document.addEventListener('DOMContentLoaded', async () => {
    const rates = await fetchRates();
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');
    
    Object.keys(rates).forEach(currency => {
        const option1 = document.createElement('option');
        option1.value = currency;
        option1.innerText = currency;
        fromCurrencySelect.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = currency;
        option2.innerText = currency;
        toCurrencySelect.appendChild(option2);
    });
});
