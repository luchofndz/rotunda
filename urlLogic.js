getInputValues = () => {
  
  //Get input values
  const urlFormat = document.getElementById("form-format").value;
  const urlValues = document.getElementById("form-value").value;

  if (urlFormat && urlValues) {
    //Array format
    var parserUrlFormat = document.createElement("a"); 
    parserUrlFormat.href = urlFormat; 
    var formatNotFiltered = parserUrlFormat.pathname.split('/');

    //Array values
    var parserUrlInstance = document.createElement("a"); 
    parserUrlInstance.href = urlValues;
    var valuesNotFiltered = parserUrlInstance.pathname.split('/');
    
    //Delete white spaces, colon and constant variables
    var arrayKeys = [];
    var arrayValues = [];
    for (i = 0; i < formatNotFiltered.length; i++) {
      if (formatNotFiltered[i] !=='' && formatNotFiltered[i].charAt(0) === ':') {
        arrayKeys.push(formatNotFiltered[i].substring(1));
        if( valuesNotFiltered[i] && valuesNotFiltered[i] !=='' ) {
          arrayValues.push(valuesNotFiltered[i]);
        }
        else {
          arrayValues.push(null);
        }
      }
    }

    var variablesObject = createObject(arrayKeys, arrayValues);

    //Queries
    if(parserUrlInstance.search) {
      var queries = parserUrlInstance.search;
      var queriesObject = CreateQueryObject(queries);
      var mergedObject = {...variablesObject, ...queriesObject};
      console.log("object", mergedObject);  
    }
    else{
      console.log("object", variablesObject);
    }
    
    alert("Check console log to inspect printed object!");    
  }
  else {
    alert("You must fill both boxes and provide a valid url domain .com!");    
  }
}

createObject = (listKey, listValue) => {
  objectKValue = new Object;
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
  let queriesObject = new Object;
  var queriesFiltered = queries.replace(/^\?/, '').split('&');
  queriesFiltered.map((item, index) => {
    var split = item.split('=');
    queriesObject[split[0]] = split[1];
  });
  return (
    queriesObject
  );
}