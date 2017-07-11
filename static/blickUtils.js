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
               var question = confirm("Deseas continuar ?");
               if( question == true ){
                 //here it should call the arr
                  console.log (content);
                  return true;
               }
               else{
                  console.log ("No deseo continuar!");
                  return false;
               }
            }



  // Numeros del 1 al 100

  var numeros = new Array(100);
        for (var i = 0; i < 100; i++) {
            numeros[i] = i + 1;
        }

        for (var i = 0; i < points.length; i++) {
            console.log(points[i]);
        }
