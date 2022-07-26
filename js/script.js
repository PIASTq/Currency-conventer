let formElement = document.querySelector(".js-form");
let countElement = document.querySelector(".js-count");

let EUR = 4.8;
let USD = 4.7;
let CHF = 4.84;
let GBP = 5.63;

let eurSymbol = "€";
let usdSymbol = "$";
let chfSymbol = " CHF";
let gbpSymbol = "£";

function currencyExchange(amount, exchangeRate) {
    return (amount / exchangeRate).toFixed(2);
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let newCurrencyValue = document.querySelector(".js-newCurrency").value;
    let plnInputValue = document.querySelector(".js-plnInput").value;
    switch (newCurrencyValue) {
        case "EUR":
            countElement.innerText = `${currencyExchange(plnInputValue, EUR)}${eurSymbol}`;
            break;
        case "USD":
            countElement.innerText = `${currencyExchange(plnInputValue, USD)}${usdSymbol}`;
            break;
        case "CHF":
            countElement.innerText = `${currencyExchange(plnInputValue, CHF)}${chfSymbol}`;
            break;
        case "GBP":
            countElement.innerText = `${currencyExchange(plnInputValue, GBP)}${gbpSymbol}`;
            break;
    }
});