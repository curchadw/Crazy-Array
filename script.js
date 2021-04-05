let crazyArray = [ "Elon Musk", "Bootcamp", 3, 5, { a: 2, b: 8 }, "#", { language: "Japanese", greeting: "#" }, 767, 34, "#", ["Tomato", "#", "PineApple"], { sports: "#" }];

const replaceHash = crazyArray => {
  //loops through the whole array
  for (let i = 0; i < crazyArray.length; i++){
    //if the index equals a #, the hash will get replaced with 'HASH'
    if (crazyArray[i] === "#"){
      crazyArray[i] = 'HASH'
    }

    //If the index is a nested array, I am looping through it then replacing the index with # with BOOM
    for (let j = 0; j < crazyArray[i].length; j++){
      if (crazyArray[i][j] === '#'){
       
        crazyArray[i][j] = 'BOOM'
      } 
    }

    //we need to detect is the value in the index is a object
    if (typeof crazyArray[i] === "object"){
      //I am using a forEach method to basically replace the 'values' with a # with 'YEAH'
      Object.keys(crazyArray[i]).forEach(function(key) {
      if (crazyArray[i][key] === '#') {
    
      crazyArray[i][key] = 'YEAH'
      }
    });
    }
  }
  //Return the Array with updated 
  return crazyArray

}


console.log(replaceHash(crazyArray))