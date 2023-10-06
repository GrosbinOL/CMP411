async function getIpsum(){
  //build the foundation API string
  let callStr = "https://dinoipsum.com/api/";
  // get the number of paragraphs to fetch
  let paragraphNum = document.getElementById("paragraphNum").value;
  // add the json and number of paragraphs that user desires
  let callJSONStr = callStr + "?format=json&paragraphs=" + paragraphNum;

  // Add JSON data to html Doc
  
  let response = await fetch(callJSONStr);

  let jsonData = await response.json();

  document.getElementById("rawData").innerHTML = ""
  document.getElementById("rawData").innerHTML = JSON.stringify(jsonData);

  // add the text and number of paragraphs that user desires
  let callTextStr = callStr + "?format=text&paragraphs=" + paragraphNum;

  // Add text data to html Doc
  let textResponse = await fetch(callTextStr);

  let textData1 = await textResponse.text();

  let paragraphs = textData1.split('\n');
  let formattedText = paragraphs.join('<br>');

  document.getElementById("textData").innerHTML = ""
  document.getElementById("textData").innerHTML = formattedText


}