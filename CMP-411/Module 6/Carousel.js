async function getQuote(){
    let endPt = 'https://animechan.xyz/api/random';
    let quote = document.getElementById("quote");
    let author = document.getElementById("character");
    if (document.getElementById('char').checked){
      let apiCall = endPt + "/character?name=" + document.getElementById("search").value;
      alert(apiCall);
      let response = await fetch(apiCall);
      let jsonData = await response.json();
      let jsonTxt = JSON.stringify(jsonData);
      let jsonObj = JSON.parse(jsonTxt);
      quote.innerHTML = "";
      quote.innerHTML += jsonObj.quote;
      author.innerHTML = "";
      author.innerHTML += "-" + jsonObj.character;
    }else if(document.getElementById('name').checked){
      let apiCall = endPt + "/anime?title=" + document.getElementById("search").value;
      alert(apiCall);
      let response = await fetch(apiCall);
      let jsonData = await response.json();
      let jsonTxt = JSON.stringify(jsonData);
      let jsonObj = JSON.parse(jsonTxt);
      quote.innerHTML = "";
      quote.innerHTML += jsonObj.quote;
      author.innerHTML = "";
      author.innerHTML += "-" + jsonObj.character;
    }
  }