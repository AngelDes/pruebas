// blickUtils.js

var content =[
  {
 "name": "Angelica Mccoy",
 "email": "mail@gmail.com",
 "friends": [
      {
        "age": 29,
        "name": "Isabel Copeland",
        "id": "58e679239c27bf50fb5d0ee0"
      },
      {
        "age": 17,
        "name": "Grant Mccoy",
        "id": "58e67923409542492bd2c078"
      },
      {
        "age": 11,
        "name": "Shannon Vasquez",
        "id": "58e6792393c4bdb98f32d92a"
      },
      {
        "age": 30,
        "name": "Janine Boone",
        "id": "58e67923fa0b246b47c7adc7"
      },
      {
        "age": 31,
        "name": "Lucile Spencer",
        "id": "58e6792331ba898f0628d98e"
      }
    ]
}
]

function alert(){
               var question = confirm("Do you want to continue ?");
               if( question == true ){
                 //here it should call the arr
                  console.log (content);
                  return true;
               }
               else{
                  console.log ("User does not want to continue!");
                  return false;
               }
            }



  // Numeros del 1 al 100

  var numeros = new Array(100);
  var par = 'Par';
  var primo = 'Primo';
  var compuesto = 'Compuesto';
        for (var i = 0; i < 100; i++) {
            numeros[i] = i + 1;
        }

        for (var i = 0; i < numeros.length; i++) {
            console.log(numeros[i]);
            if (numeros % 2 == 0 ) {
              console.log('par')

            }
            else {
              console.log('primo')
            }
        }


    //caracteres unicos

    function characters( string ){
    var unique='';
    for(var i=0; i<string.length; i++){
    }
    return unique;
}
