 function convert() {
     //dropdown box getting their value from ID
            var from = document.getElementById("from").value;
            var to = document.getElementById("to").value;
     // AJAX API to request data.
            var xmlhttp = new XMLHttpRequest();
     // FOREX API address
            var url = "http://api.fixer.io/latest?symbols=" + from + "," + to;
     //get request to server. true = Asynchronous
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
     
            xmlhttp.onreadystatechange = function() {
                // ajax server
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
                {
                    
                    var result = xmlhttp.responseText;
                    //convert json data to JS
                    var jsResult = JSON.parse(result);
                    //calc the return between 2 forex rates
                    var oneUnit = jsResult.rates[to]/jsResult.rates[from];
                    // get the value inputted in the valid text box.
                    var amount = document.getElementById("fromCurrency").value;
                    // calc the inputted box to the 'To' box
                    document.getElementById("toCurrency").value = (oneUnit*amount).toFixed(2);
                }
            }
        }
var tableContainer = document.getElementById("forex-info");

var currencyKey =
    {
"Australia Dollar": "AUD",
"Bulgaria Lev": "BGN",
"Brazil Real": "BRL",
"Canada Dollar": "CAD",
"Switzerland Francs": "CHF",
"China Yuan": "CNY",
"Czechia Koruna": "CZK",
"Denmark Krone": "DKK",
"EURO": "EUR",
"United Kingdom Pound": "GBP",
"Hong Kong Dollar": "HKD",
"Croatia Kuna": "HRK",
"Hungary Forint": "HUF",
"Indonesian Rupiah": "IDR",
"Israel New Shekel": "ILS",
"India Rupees": "INR",
"Japan Yen": "JPY",
"South Korea Won": "KRW",
"Mexico Peso": "MXN",
"Malaysia Ringgit": "MYR",
"Norway Krone": "NOK",
"New Zealand Dollar": "NZD",
"Philippines Peso": "PHP",
"Poland Zloty": "PLN",
"Romania Leu": "RON",
"Russia Rubles":"RUB",
"Sweden Krona": "SEK",
"Singapore Dollar": "SGD",
"Thailand Baht": "THB",
"Turkey Lira": "TRY",
"US Dollars": "USD",
"South Africa Rand": "ZAR"
};
var myCountry = "";
Object.keys(currencyKey).forEach((e)=> {
    var y = ('${e}: ${currencyKey[e]}');
    myCountry += "<p>" + e + "</p>"
})


var myData = 'https://api.fixer.io/latest'

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
            let res = JSON.parse(xhttp.responseText)
            var myString = "";
            Object.keys(res.rates).forEach((e)=>{
            
                var x = (`${e}: ${res.rates[e]}`);
                //show the Country Codes
                myString += "<p>"+ e +" - ";
                //Shows the rate
                myString += res.rates[e]+"</p>";
            
               
            })
            document.getElementById("currencyList").innerHTML = myString;
    }
};

xhttp.open("GET", myData, true);
xhttp.send();







