{
    const exchangeCurrency = (amount, exchangeRate) => {
        return (amount / exchangeRate).toFixed(2);
    };

    const calculateResault = (event) => {
        event.preventDefault();

        const EUR = 4.8;
        const USD = 4.7;
        const CHF = 4.84;
        const GBP = 5.63;

        const eurSymbol = "€";
        const usdSymbol = "$";
        const chfSymbol = "CHF";
        const gbpSymbol = "£";

        const newCurrencyValue = document.querySelector(".js-newCurrency").value;
        const plnInputValue = document.querySelector(".js-plnInput").value;
        const countElement = document.querySelector(".js-count");

        switch (newCurrencyValue) {
            case "EUR":
                countElement.innerText = `${exchangeCurrency(plnInputValue, EUR)}${eurSymbol}`;
                break;
            case "USD":
                countElement.innerText = `${exchangeCurrency(plnInputValue, USD)}${usdSymbol}`;
                break;
            case "CHF":
                countElement.innerText = `${exchangeCurrency(plnInputValue, CHF)}${chfSymbol}`;
                break;
            case "GBP":
                countElement.innerText = `${exchangeCurrency(plnInputValue, GBP)}${gbpSymbol}`;
                break;
        }
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", calculateResault);
    };

    init();
}