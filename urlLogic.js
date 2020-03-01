getInputValues = () => {
  //Get input values
  const urlFormat = document.getElementById("form-format").value;
  const urlValues = document.getElementById("form-value").value;
  let outputObject = null;

  if (urlFormat && urlValues) {
    //Array format
    let parserUrlFormat = document.createElement("a"); 
    parserUrlFormat.href = urlFormat; 
    let formatNotFiltered = parserUrlFormat.pathname.split('/');

    //Array values
    let parserUrlInstance = document.createElement("a"); 
    parserUrlInstance.href = urlValues;
    let valuesNotFiltered = parserUrlInstance.pathname.split('/');
    
    //Delete white spaces, colon and constant variables
    let arrayKeys = [];
    let arrayValues = [];
    for (i = 0; i < formatNotFiltered.length; i++) {
      if (formatNotFiltered[i] !=='' && formatNotFiltered[i].charAt(0) === ':') {
        arrayKeys.push(formatNotFiltered[i].substring(1));
        if (valuesNotFiltered[i] && valuesNotFiltered[i] !=='') {
          arrayValues.push(valuesNotFiltered[i]);
        }
        else {
          arrayValues.push(null);
        }
      }
    }
    let variablesObject = createObject(arrayKeys, arrayValues);
    
    //Queries
    if (parserUrlInstance.search) {
      let queries = parserUrlInstance.search;
      const queriesObject = CreateQueryObject(queries);
      mergedObject = {...variablesObject, ...queriesObject};
      outputObject = JSON.stringify(mergedObject);
    }
    else {
      outputObject = JSON.stringify(variablesObject);
    }
    console.log("object", outputObject);   
  }
  else {
    outputObject = "You must fill both boxes and provide a url with domain!";    
  }
  document.getElementById("output-object").innerHTML = outputObject;
}

createObject = (listKey, listValue) => {
  let objectKValue = {};
  for (i = 0; i < listKey.length; i++) {
    let key = listKey[i];
    let value = listValue[i];
    objectKValue[key] = value;
  }
  return (
    objectKValue
  );
}

CreateQueryObject = (queries) => {
  let queriesObject = {};
  let queriesFiltered = queries.replace(/^\?/, '').split('&');
  queriesFiltered.map((item, index) => {
    let split = item.split('=');
    queriesObject[split[0]] = split[1];
  });
  return (
    queriesObject
  );
}