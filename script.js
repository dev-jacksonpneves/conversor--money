

const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select-converter")

//const currencytoconverter = document.querySelector(".currency-to-converter")

function convertValues() {

    const inputCurrencyValues = document.querySelector("#input-values").value

    const currencytoconvert = document.querySelector(".currency-value-real")
    const currencyconverted = document.querySelector(".currency-value-dolar")

    //var total = 1
    const valueReal = 1.00
    const valueDolar = 4.89
    const ValueEuro = 5.34
    const valueLibra = 6.20
    const valueBitcoin = 212.299



    currencytoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValues) 


  /* if (currencytoconverter.valeu == "real-to")
    {
       currencytoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
           style: "currency",
           currency: "BRL",
       }).format(inputCurrencyValues )

       //   total = inputCurrencyValues / valueReal 

   }

   if (currencytoconverter.value == "dolar-to")
    {
       currencytoconvert.innerHTML = new Intl.NumberFormat("en-US", {
           style: "currency",
           currency: "USD",
       }).format(inputCurrencyValues)

    //   total  =  inputCurrencyValues / valueDolar

   }

   if (currencytoconverter.value == "euro-to")
    {
       currencytoconvert.innerHTML = new Intl.NumberFormat("de-DE", {
           style: "currency",
           currency: "EUR",
       }).format(inputCurrencyValues)

     //  total = inputCurrencyValues / ValueEuro

   }

   if (currencytoconverter.value == "libra-to")
    {
       currencytoconvert.innerHTML = new Intl.NumberFormat("en-GB", {
           style: "currency",
           currency: "GBP"
       }).format(inputCurrencyValues)

    //   total = inputCurrencyValues / valueLibra

   }

   if (currencytoconverter.value == "bitcoin-to")
    {
       currencytoconvert.innerHTML = new Intl.NumberFormat("de-DE", {
           style: "currency",
           currency: "BTC"
       }).format(inputCurrencyValues)

    //   total =  inputCurrencyValues / valueBitcoin 

   } */



    if (currencySelect.value == "real")
     {
        currencyconverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValues / valueReal)

    }

    if (currencySelect.value == "dolar")
     {
        currencyconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValues / valueDolar)

    }

    if (currencySelect.value == "euro")
     {
        currencyconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValues / ValueEuro)
    }

    if (currencySelect.value == "libra")
     {
        currencyconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValues / valueLibra)

    }

    if (currencySelect.value == "bitcoin")
     {
        currencyconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValues / valueBitcoin)

    }

}


/*function currencytochange() {
    const currencynome = document.querySelector(".currency-real")
    const currencyimage = document.getElementById("currency-image")
    
    console.log ( "trocou de moeda") 

    if (currencytoconverter.value == "real-to")
     {

        currencynome.innerHTML = "Real Brasileiro"
        currencyimage.src = "./assets/Real.png"
    }

    if (currencytoconverter.value == "dolar-to")
     {

        currencynome.innerHTML = "Dólar Americano"
        currencyimage.src = "./assets/Dolar.png"

    }

    if (currencytoconverter.value == "euro-to")
     {

        currencynome.innerHTML = "Euro"
        currencyimage.src = "./assets/Euro.png"

    }

    if (currencytoconverter.value == "libra-to")
     {

        currencynome.innerHTML = "Libra"
        currencyimage.src = "./assets/Libra.png"

    }

    if (currencytoconverter.value == "bitcoin-to")
    {

        currencynome.innerHTML = "Bitcoin"
        currencyimage.src = "./assets/bitcoin.png"
    }

    convertValues()
}*/

function currencychange() {
    const currencyname = document.querySelector(".currency-dolar")
    const currencyimg = document.getElementById("currency-img")


    if (currencySelect.value == "real")
     {

        currencyname.innerHTML = "Real Brasileiro"
        currencyimg.src = "./assets/Real.png"
    }

    if (currencySelect.value == "dolar") 
    {

        currencyname.innerHTML = "Dólar Americano"
        currencyimg.src = "./assets/Dolar.png"


    }


    if (currencySelect.value == "euro")
     {

        currencyname.innerHTML = "Euro"
        currencyimg.src = "./assets/Euro.png"

    }

    if (currencySelect.value == "libra")
     {

        currencyname.innerHTML = "Libra"
        currencyimg.src = "./assets/Libra.png"

    }

    if (currencySelect.value == "bitcoin")
    {

        currencyname.innerHTML = "Bitcoin"
        currencyimg.src = "./assets/bitcoin.png"

    }

    convertValues()
}

//currencytoconverter.addEventListener("change", currencytochange)

currencySelect.addEventListener("change", currencychange)

convertButton.addEventListener("click", convertValues)
