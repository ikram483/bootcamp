const apiKey = '0e867566a39c0d9a9ca32c7b'; 
const supportedCurrenciesUrl = `https://api.exchangerate-api.com/v4/latest/USD`; 
const conversionRateUrl = (from, to, amount) => `https://api.exchangerate-api.com/v4/latest/${from}?amount=${amount}`;  
  
async function fetchSupportedCurrencies() {  
    try {  
        const response = await fetch(supportedCurrenciesUrl);  
        const data = await response.json();  
        return Object.keys(data.rates);  
    } catch (error) {  
        console.error('Error fetching supported currencies:', error);  
    }  
}  
  
async function fetchConversionRate(from, to, amount) {  
    try {  
        const response = await fetch(conversionRateUrl(from, to, amount));  
        const data = await response.json();  
        return data.rates[to];  
    } catch (error) {  
        console.error('Error fetching conversion rate:', error);  
    }  
}  
  
async function populateCurrencyOptions() {  
    const currencies = await fetchSupportedCurrencies();  
    const fromCurrencySelect = document.getElementById('fromCurrency');  
    const toCurrencySelect = document.getElementById('toCurrency');  
  
    currencies.forEach(currency => {  
        const optionFrom = document.createElement('option');  
        optionFrom.value = currency;  
        optionFrom.textContent = currency;  
        fromCurrencySelect.appendChild(optionFrom);  
  
        const optionTo = document.createElement('option');  
        optionTo.value = currency;  
        optionTo.textContent = currency;  
        toCurrencySelect.appendChild(optionTo);  
    });  
}  
  
async function convertCurrency() {  
    const amount = document.getElementById('amount').value;  
    const fromCurrency = document.getElementById('fromCurrency').value;  
    const toCurrency = document.getElementById('toCurrency').value;  
  
    const rate = await fetchConversionRate(fromCurrency, toCurrency, amount);  
    const convertedAmount = (amount * rate).toFixed(2);  
    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;  
}  
  
function switchCurrencies() {  
    const fromCurrencySelect = document.getElementById('fromCurrency');  
    const toCurrencySelect = document.getElementById('toCurrency');  
  
    const temp = fromCurrencySelect.value;  
    fromCurrencySelect.value = toCurrencySelect.value;  
    toCurrencySelect.value = temp;  
}  
  
document.getElementById('convertButton').addEventListener('click', convertCurrency);  
document.getElementById('switchButton').addEventListener('click', switchCurrencies);  
  
populateCurrencyOptions();  