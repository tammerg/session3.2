var var1 = 11;
var var2 = "hello";

function isThisString ( variable ){
  if ( typeof variable === "string"){
    console.log("THis is a string")  
  }else {
    console.log ("This is not a string")
  };
};


isThisString ( var1);
