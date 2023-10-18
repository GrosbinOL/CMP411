function cesarCipher(str){
  let result = "";
  let lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
  let capAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < str.length; i++){
    let currLetter = str[i];
    if(currLetter === '</p>'){
      result += '<br>';
    }
    else if (lowerAlpha.includes(currLetter)){
      let alphaIdx = (lowerAlpha.indexOf(currLetter) + 5) % 26;
      result += lowerAlpha[alphaIdx];
    }else if (capAlpha.includes(currLetter)){
      let alphaIdx = (capAlpha.indexOf(currLetter) + 5) % 26;
      result += capAlpha[alphaIdx];
    }else{
      result += currLetter;
    }
  }
  result = result.replaceAll('</u>' , '<br> <br>')
  return result
}

function cesarCipher2(str){
  let result = "";
  let lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
  let capAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let i = 0; i < str.length; i++){
    let currLetter = str[i];
    if (i % 2 == 1){
      if (lowerAlpha.includes(currLetter)){
        let alphaIdx = (lowerAlpha.indexOf(currLetter) - 4 + 26) % 26;
        result += lowerAlpha[alphaIdx];
        }else if(capAlpha.includes(currLetter)){
          let alphaIdx = (capAlpha.indexOf(currLetter) -4 +26 ) % 26;
          result += capAlpha[alphaIdx];
        }else{
          result += currLetter;
        }
    }else if(i % 2 == 0){
      if (lowerAlpha.includes(currLetter)){
        let alphaIdx = (lowerAlpha.indexOf(currLetter) + 2 + 26) % 26;
        result += lowerAlpha[alphaIdx];
        }else if(capAlpha.includes(currLetter)){
          let alphaIdx = (capAlpha.indexOf(currLetter) + 2 + 26) % 26;
          result += capAlpha[alphaIdx];
        }else{
          result += currLetter;
        }
    }
  }
  result = result.replaceAll("</r>", "<br><br>");
  result = result.replaceAll("</l>" , "<br><br>");
  return result
}


// start getIpsum funtion
async function getIpsum(str){

  //declare variables for the HTML elements
  let paragraphNum = document.getElementById("paragraphNum").value; // number of paragraohs
  let wordCount = document.getElementById("wordCount").value; // number of words
  let htmlText = document.getElementById("textData"); // html flex column where the text data will be stored
  let rawData = document.getElementById("rawData"); //html flex column where JSON data will be stored
  let algorithm = document.getElementById("algorithm").value; // algorithm choice by user
  let encryptedData = document.getElementById("encrypt"); // flex column where encrypted data will be stored 

  // build the original base for the endpoint
  let callStr = "https://dinoipsum.com/api/";

  //start if statement for which alorithm
  if (algorithm == 1){
    if (wordCount == "" ) {

      // add the json and number of paragraphs that user desires
      let callJSONStr = callStr + "?format=json&paragraphs=" + paragraphNum;

      // request JSON data 
      let response = await fetch(callJSONStr);
      let jsonData = await response.json();

      //Add JSON data to the HTML doc in the paragraph with the id = rawData
      rawData.innerHTML = "";
      rawData.innerHTML = JSON.stringify(jsonData);

      // Add text data to html Doc
      htmlText.innerHTML = ""; 

      // loop through JSON data and turn it into a string
      for(var para in jsonData){
      htmlText.innerHTML += "<p>" + jsonData[para] + "</p>";
      }
      htmlText = htmlText.innerHTML.replaceAll("," , " ");

      alert(callJSONStr);

      // Encrypt the text data
      encryptedData.innerHTML = "";
      encryptedData.innerHTML = cesarCipher(htmlText); 
    }else if(isNaN(wordCount)){
      alert("Please enter a valid interger.");
    }else{

      // add the json and number of paragraphs that user desires
      let callJSONStr = callStr + "?format=json&paragraphs=" + paragraphNum + "&words=" + wordCount;

      // request JSON data 
      let response = await fetch(callJSONStr);
      let jsonData = await response.json();

      //Add JSON data to the HTML doc in the paragraph with the id = rawData
      rawData.innerHTML = "";
      rawData.innerHTML = JSON.stringify(jsonData);

      // Add text data to html Doc

      htmlText.innerHTML = ""; 
      // loop through JSON data and turn it into a string
      for(var para in jsonData){
        htmlText.innerHTML += "<p>" + jsonData[para] + "</p>";
      }
      htmlText = htmlText.innerHTML.replaceAll("," , " ");

      alert(callJSONStr);

      // Encrypt the text data
      encryptedData.innerHTML = "";
      encryptedData.innerHTML = cesarCipher(htmlText);
    }
  }else if(algorithm == 2){
    if (wordCount == "") {

      // add the json and number of paragraphs that user desires
      let callJSONStr = callStr + "?format=json&paragraphs=" + paragraphNum;

      // request JSON data 
      let response = await fetch(callJSONStr);
      let jsonData = await response.json();

      //Add JSON data to the HTML doc in the paragraph with the id = rawData
      rawData.innerHTML = "";
      rawData.innerHTML = JSON.stringify(jsonData);

      // Add text data to html Doc
      htmlText.innerHTML = ""; 

      // loop through JSON data and turn it into a string
      for(var para in jsonData){
        htmlText.innerHTML += "<p>" + jsonData[para] + "</p>";
      }
      htmlText = htmlText.innerHTML.replaceAll("," , " ");

      alert(callJSONStr);

      // Encrypt the text data
      encryptedData.innerHTML = "";
      encryptedData.innerHTML = cesarCipher2(htmlText); 
    }else if(isNaN(wordCount)){
      alert("Please enter a valid interger.");
    }else{

      // add the json and number of paragraphs that user desires
      let callJSONStr = callStr + "?format=json&paragraphs=" + paragraphNum + "&words=" + wordCount;

      // request JSON data 
      let response = await fetch(callJSONStr);
      let jsonData = await response.json();

      //Add JSON data to the HTML doc in the paragraph with the id = rawData
      rawData.innerHTML = "";
      rawData.innerHTML = JSON.stringify(jsonData);

      // Add text data to html Doc

      htmlText.innerHTML = ""; 
      // loop through JSON data and turn it into a string
      for(var para in jsonData){
        htmlText.innerHTML += "<p>" + jsonData[para] + "</p>";
      }
      htmlText = htmlText.innerHTML.replaceAll("," , " ");

      alert(callJSONStr);

      // Encrypt the text data
      encryptedData.innerHTML = "";
      encryptedData.innerHTML = cesarCipher2(htmlText);
    }
  }
}