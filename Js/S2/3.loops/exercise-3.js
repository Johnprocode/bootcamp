const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'},
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
    ];
    
    for(let i = 0; i < placesToTravel.length; i++) {
       if(placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
        placesToTravel.splice(i, 1);
        i--;
       }
    }

    console.log(placesToTravel);

    //-- debo repasar esta parte de la clase, 
    //comprendo la sisntaxis y logro traducicir lo escrito hasta la linea 12
    // la 13 no la termino de entender
