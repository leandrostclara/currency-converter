const convertCurrencyBtn = document.querySelector(".convert-currency-btn")
const valueFrom = document.querySelector(".value-from")
const valueTo = document.querySelector(".value-to")
const currencyConvertTo = document.querySelector("#convert-to")
const currencyConvertFrom = document.querySelector("#convert-from")


function currencyConvert() {
    
    const inputValue = document.querySelector(".input-value").value

    const dolarToday = 4.87
    const euroToday = 5.36
    const libraToday = 6.19
    const bitcoinToday = 184989.67

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

function disableOptions() {

    if (currencyConvertFrom.value == "real") {

        resetOptions()
        document.getElementById("real-option-to").setAttribute("hidden", "hidden")
        // document.getElementById("dolar-option-to").setAttribute("selected", "selected")

    }

    if (currencyConvertFrom.value == "dolar") {

        resetOptions()
        document.getElementById("dolar-option-to").setAttribute("hidden", "hidden")
        // document.getElementById("real-option-to").setAttribute("selected", "selected")

    }

    if (currencyConvertFrom.value == "euro") {

        resetOptions()
        document.getElementById("euro-option-to").setAttribute("hidden", "hidden")

    }

    if (currencyConvertFrom.value == "libra") {

        resetOptions()
        document.getElementById("libra-option-to").setAttribute("hidden", "hidden")

    }

    if (currencyConvertFrom.value == "bitcoin") {

        resetOptions()
        document.getElementById("bitcoin-option-to").setAttribute("hidden", "hidden")

    }

    currencyConvert()
    changeCurrencyFrom()
    changeCurrencyTo()

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

function resetOptions() {

    document.getElementById("real-option-to").removeAttribute("hidden", "hidden")
    document.getElementById("dolar-option-to").removeAttribute("hidden", "hidden")
    document.getElementById("euro-option-to").removeAttribute("hidden", "hidden")
    document.getElementById("libra-option-to").removeAttribute("hidden", "hidden")
    
}


convertCurrencyBtn.addEventListener("click", currencyConvert)
currencyConvertTo.addEventListener("change", changeCurrencyTo)
currencyConvertFrom.addEventListener("change", changeCurrencyFrom)
currencyConvertFrom.addEventListener("change", disableOptions)