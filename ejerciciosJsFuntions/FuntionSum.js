function sum(numberOne , numberTwo) {
    return numberOne + numberTwo;
  }

  console.log(sum (3, 4));

  console.log('otra forma de hacerlo');

  function getGreaterNumber(numberOne , numberTwo) {
        if(numberOne === numberTwo){
            return null;
        } else if(numberOne > numberTwo){
            return numberOne;
        } else {
            return numberTwo;
        }
    }
    console.log(getGreaterNumber(3, 3))
    console.log(getGreaterNumber(6, 3))
    console.log(getGreaterNumber(3, 6))

//-- Preguntar por esta forma, la aplicación avisa de fallos en la sintaxis.

//--console.log('if ternario')

//function getGreaterNumber(numberOne , numberTwo){
//    return numberOne === numberTwo ? return null : numberOne > numberTwo ? return numberOne : numberTwo;
//}

//console.log(getGreaterNumber);


