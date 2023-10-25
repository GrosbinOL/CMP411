async function getQuote(){
  let quote = document.getElementById("quote");
  let author = document.getElementById("author");
  let length = document.getElementById("length").value;
  let endPt = "https://api.quotable.io/random";

  if (length == 1){
    let apiCall = endPt + "?maxLength=35"
    let response = await fetch(apiCall);
    let jsonData = await response.json();
    let jsonTxt = JSON.stringify(jsonData);
    let jsonObj = JSON.parse(jsonTxt);
    quote.innerHTML = "";
    quote.innerHTML += jsonObj.content;
    author.innerHTML = ""
    author.innerHTML += "-" + jsonObj.author;
  } else if(length == 2) {
    let apiCall = endPt + "?minLength=36&maxLength=50"
    let response = await fetch(apiCall);
    let jsonData = await response.json();
    let jsonTxt = JSON.stringify(jsonData);
    let jsonObj = JSON.parse(jsonTxt);
    quote.innerHTML = "";
    quote.innerHTML += jsonObj.content;
    author.innerHTML = ""
    author.innerHTML += "-" + jsonObj.author;
  }else if(length == 3) {
    let apiCall = endPt + "?minLength=51&maxLength=65"
    let response = await fetch(apiCall);
    let jsonData = await response.json();
    let jsonTxt = JSON.stringify(jsonData);
    let jsonObj = JSON.parse(jsonTxt);
    quote.innerHTML = "";
    quote.innerHTML += jsonObj.content;
    author.innerHTML = ""
    author.innerHTML += "-" + jsonObj.author;
  }
}