getInputValues = () => {
    //https://platzi.com/clases/fundamentos-javascript/
    //https://www.aulafacil.com/:cursos/frances/:a1-t1056
    //https://www.aulafacil.com/cursos/frances?sort=desc&limit=10
    //Get input values
    const urlFormat = document.getElementById("form-format").value;
    const urlInput = document.getElementById("form-value").value;

    if (urlFormat && urlInput) {

        //Filter URl format by / content
        var parserUrlFormat = document.createElement("a"); 
        parserUrlFormat.href = urlFormat; 
        var pathArray = parserUrlFormat.pathname.split('/');

        //Array values
        var parserUrlInstance = document.createElement("a"); 
        parserUrlInstance.href = urlInput;
        var valuesArray = parserUrlInstance.pathname.split('/');
        
        //Delete white spaces, colon and constant variables
        var arrayKeys = [];
        var arrayValues = [];
        for (i = 0; i < pathArray.length; i++) {
            if (pathArray[i] !=='' && pathArray[i].charAt(0) === ':') {
                arrayKeys.push(pathArray[i].substring(1));
                if( valuesArray[i] && valuesArray[i] !=='' ) {
                    arrayValues.push(valuesArray[i]);
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
            console.log("total", mergedObject);  
        }
        else{
          console.log("path", variablesObject);
        }
        
        alert(print(variablesObject));    
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

var print = function(o){
  var str='';

  for(var p in o){
      if(typeof o[p] == 'string'){
          str+= p + ': ' + o[p]+'; ';
      }else{
          str+= p + ' { ' + print(o[p]) + '}';
      }
  }

  return str;
}

//have to clean code
//have to delete when is c /algo