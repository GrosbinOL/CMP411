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

  document.getElementById("textData").innerHTML = ""
  for(var para in jsonData){
    document.getElementById("textData").innerHTML += "<p>" + jsonData[para] + "</p>";
    }
  document.getElementById("textData").innerHTML = document.getElementById("textData").innerHTML.replaceAll("," , " ");

  alert(callJSONStr);



}