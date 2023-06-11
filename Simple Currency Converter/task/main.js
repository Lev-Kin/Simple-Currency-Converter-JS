const input = require('sync-input');
const currencies = {USD: 1.0, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75};

console.log(`Welcome to Currency Converter!
1 USD equals ${currencies['USD']} USD
1 USD equals ${currencies['JPY']} JPY
1 USD equals ${currencies['EUR']} EUR
1 USD equals ${currencies['RUB']} RUB
1 USD equals ${currencies['GBP']} GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD`);

let to = input('To:').toUpperCase();
if (!(to in currencies)) console.log('Unknown currency');
else {
    let amount = Number(input('Amount:'));
    if (amount < 1) console.log('The amount cannot be less than 1');
    else if (isNaN(amount)) console.log("The amount has to be a number");
    else console.log(`Result: ${amount} USD equals ${(amount * currencies[to]).toFixed(4)} ${to}`);
}
