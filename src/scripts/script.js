const convertCurrencyBtn = document.querySelector(".convert-currency-btn")
const valueFrom = document.querySelector(".value-from")
const valueTo = document.querySelector(".value-to")
const currencyConvertTo = document.querySelector("#convert-to")
const currencyConvertFrom = document.querySelector("#convert-from")


async function currencyConvert() {
    
    const inputValue = document.querySelector(".input-value").value

    
    const data = await fetch ('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL').then( response => response.json() )

    const dolarToday = (data.USDBRL.high)
    const euroToday = (data.EURBRL.high)
    const libraToday = (data.GBPBRL.high)
    const bitcoinToday = (data.BTCBRL.high)

    valueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

    // ----------------------- REAL -> OTHERS -----------------------

    if (currencyConvertFrom.value == "real" && currencyConvertTo.value == "real") {

        valueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue) 

        valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

    }

    if (currencyConvertFrom.value == "real" && currencyConvertTo.value == "dolar") {

        valueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue) 

        valueTo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)

    }

    if ( currencyConvertFrom.value == "real" && currencyConvertTo.value == "euro") {

        valueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)

    }

    if ( currencyConvertFrom.value == "real" && currencyConvertTo.value == "libra") {

        valueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday)

    }

    if ( currencyConvertFrom.value == "real" && currencyConvertTo.value == "bitcoin") {

        valueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitcoinToday)

    }  

    // -----------------------  DOLAR -> OTHERS -----------------------

    if (currencyConvertFrom.value == "dolar" && currencyConvertTo.value == "dolar") {

        valueFrom.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)

    }

    if (currencyConvertFrom.value == "dolar" && currencyConvertTo.value == "real") {

        valueFrom.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * dolarToday)

    }

    if (currencyConvertFrom.value == "dolar" && currencyConvertTo.value == "euro") {

        valueFrom.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR"
        }).format((inputValue * dolarToday) / euroToday)

    }

    if (currencyConvertFrom.value == "dolar" && currencyConvertTo.value == "libra") {

        valueFrom.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format((inputValue * dolarToday) / libraToday)

    }

    if (currencyConvertFrom.value == "dolar" && currencyConvertTo.value == "bitcoin") {

        valueFrom.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format((inputValue * dolarToday) / bitcoinToday)

    }

    // -----------------------  EURO -> OTHERS -----------------------

    if (currencyConvertFrom.value == "euro" && currencyConvertTo.value == "euro") {

        valueFrom.innerHTML = new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)

    }

    if (currencyConvertFrom.value == "euro" && currencyConvertTo.value == "real") {

        valueFrom.innerHTML = new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * euroToday)

    }

    if (currencyConvertFrom.value == "euro" && currencyConvertTo.value == "dolar") {

        valueFrom.innerHTML = new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR"
        }).format((inputValue * dolarToday) / euroToday)

        valueTo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputValue * euroToday) / dolarToday)

    }

    if (currencyConvertFrom.value == "euro" && currencyConvertTo.value == "libra") {

        valueFrom.innerHTML = new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR"
        }).format((inputValue * dolarToday) / euroToday)

        valueTo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format((inputValue * euroToday) / libraToday)

    }

    if (currencyConvertFrom.value == "euro" && currencyConvertTo.value == "bitcoin") {

        valueFrom.innerHTML = new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR"
        }).format((inputValue * dolarToday) / euroToday)

        valueTo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format((inputValue * euroToday) / bitcoinToday)

    }

    // -----------------------  LIBRA -> OTHERS -----------------------

    if (currencyConvertFrom.value == "libra" && currencyConvertTo.value == "libra") {

        valueFrom.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

    }

    if (currencyConvertFrom.value == "libra" && currencyConvertTo.value == "real") {

        valueFrom.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * libraToday)

    }

    if (currencyConvertFrom.value == "libra" && currencyConvertTo.value == "dolar") {

        valueFrom.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputValue * libraToday) / dolarToday)

    }

    if (currencyConvertFrom.value == "libra" && currencyConvertTo.value == "euro") {

        valueFrom.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR"
        }).format((inputValue * libraToday) / euroToday)

    }

    if (currencyConvertFrom.value == "libra" && currencyConvertTo.value == "bitcoin") {

        valueFrom.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format((inputValue * libraToday) / bitcoinToday)

    }

    // -----------------------  BITCOIN -> OTHERS -----------------------

    if (currencyConvertFrom.value == "bitcoin" && currencyConvertTo.value == "bitcoin") {

        valueFrom.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)

    }

    if (currencyConvertFrom.value == "bitcoin" && currencyConvertTo.value == "real") {

        valueFrom.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * bitcoinToday)

    }

    if (currencyConvertFrom.value == "bitcoin" && currencyConvertTo.value == "dolar") {

        valueFrom.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputValue * bitcoinToday) / dolarToday)

    }

    if (currencyConvertFrom.value == "bitcoin" && currencyConvertTo.value == "euro") {

        valueFrom.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR"
        }).format((inputValue * bitcoinToday) / euroToday)

    }

    if (currencyConvertFrom.value == "bitcoin" && currencyConvertTo.value == "libra") {

        valueFrom.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)

        valueTo.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format((inputValue * bitcoinToday) / libraToday)

    }

}

function changeCurrencyFrom() {
    
    const logoCurrencyFrom = document.querySelector(".logo-from")
    const textCurrencyFrom = document.querySelector(".currency-from")

    if (currencyConvertFrom.value == "real") {

        logoCurrencyFrom.src = ("./src/images/real.png")
        textCurrencyFrom.innerHTML = "Real Brasileiro"

    }

    if (currencyConvertFrom.value == "dolar") {

        logoCurrencyFrom.src = ("./src/images/dolar.png")
        textCurrencyFrom.innerHTML = "Dolar Americano"

    }

    if (currencyConvertFrom.value == "euro") {

        logoCurrencyFrom.src = ("./src/images/euro.png")
        textCurrencyFrom.innerHTML = "Euro"

    }

    if (currencyConvertFrom.value == "libra") {

        logoCurrencyFrom.src = ("./src/images/libra.png")
        textCurrencyFrom.innerHTML = "Libra"

    }

    if (currencyConvertFrom.value == "bitcoin") {

        logoCurrencyFrom.src = ("./src/images/bitcoin.png")
        textCurrencyFrom.innerHTML = "Bitcoin"

    }

    currencyConvert()
}


function changeCurrencyTo() {

    const logoCurrencyTo = document.querySelector(".logo-to")
    const textCurrencyTo = document.querySelector(".currency-to")


    if (currencyConvertTo.value == "real") {

        logoCurrencyTo.src = ("./src/images/real.png")
        textCurrencyTo.innerHTML = "Real Brasileiro"

    }

    if (currencyConvertTo.value == "dolar") {
        
        logoCurrencyTo.src = ("./src/images/dolar.png")
        textCurrencyTo.innerHTML = "Dólar Americano"

    }
    if (currencyConvertTo.value == "euro") {
        
        logoCurrencyTo.src = ("./src/images/euro.png")
        textCurrencyTo.innerHTML = "Euro"

    }

    if (currencyConvertTo.value == "libra") {

        logoCurrencyTo.src = ("./src/images/libra.png")
        textCurrencyTo.innerHTML = "Libra"

    }

    if (currencyConvertTo.value == "bitcoin") {

        logoCurrencyTo.src = ("./src/images/bitcoin.png")
        textCurrencyTo.innerHTML = "Bitcoin"

    }
    
    currencyConvert()
}



convertCurrencyBtn.addEventListener("click", currencyConvert)
currencyConvertTo.addEventListener("change", changeCurrencyTo)
currencyConvertFrom.addEventListener("change", changeCurrencyFrom)