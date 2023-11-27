const convertCurrencyBtn = document.querySelector(".convert-currency-btn")
const valueFrom = document.querySelector(".value-from")
const valueTo = document.querySelector(".value-to")
const currencyConvertTo = document.querySelector(".convert-to")


function currencyConvert() {
    
    const inputValue = document.querySelector(".input-value").value

    const dolarToday = 4.9
    const euroToday = 5.36

    valueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

    if (currencyConvertTo.value == "dolar") {

        valueTo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)

    }

    if (currencyConvertTo.value == "euro") {

        valueTo.innerHTML = new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)

    }

    

}

function changeCurrency() {

    const logoCurrencyTo = document.querySelector(".logo-to")
    const textCurrencyTo = document.querySelector(".currency-to")

    if (currencyConvertTo.value == "dolar") {
        
        logoCurrencyTo.src = ("./src/images/dolar.png")
        textCurrencyTo.innerHTML = "Dólar Americano"

    }
    if (currencyConvertTo.value == "euro") {
        
        logoCurrencyTo.src = ("./src/images/euro.png")
        textCurrencyTo.innerHTML = "Euro"

    }
    
    currencyConvert()
}

convertCurrencyBtn.addEventListener("click", currencyConvert)
currencyConvertTo.addEventListener("change", changeCurrency)