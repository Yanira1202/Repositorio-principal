var heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

  //mostrar el nombre de la base secreta
  var teamName = heroes.secretBase; //primera forma 
  //var teamName = heroes["secretBase"]; -> segunda forma
  console.log(teamName);

  //mostrar nombre de el squad
  var teamBase = heroes.squadName;//una forma de llamarlo
  //var teamName = heroes["squadName"]; -> otra forma de llamar
  console.log(teamBase);

  var teamMembers = heroes.members;//una forma
  //var teamMembers = heroes["members"];->otra forma
  console.log(teamMembers);

  //mostrar un solo integrante
  var teamMenber1 = heroes.members[0];
                // teamMembers
  console.log(teamMenber1);

  //mostrar el superpoder del primer integrante
  var teamPower = teamMenber1.powers;
  console.log(teamPower);

 //mostrar el superpoder del segundo integrante
 var teamMember2 = teamMembers[1];
 var teamPower = teamMember2.powers;
 // teamMember2 = teamMembers[1].powers;
console.log(teamMember2);


function Persona(nombre,edad,ciudad,intereses){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.intereses = intereses;

    this.info = function(){
        let mensaje = this.nombre+" tiene "+this.edad+" años. y vive en "+this.ciudad+".";
        alert(mensaje);
    };
    
}