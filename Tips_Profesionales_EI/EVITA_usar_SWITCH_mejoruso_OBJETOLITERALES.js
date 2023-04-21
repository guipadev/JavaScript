//const adversario = Hulk
//let loki = ''

//Uso condicional If y Else If
/*
if (adversario == 'Iron-Man') {
  loki = 'Magneto'
} else if (adversario == 'Hulk') {
  loki = 'Thanos'
} else if (adversario == 'Thor') {
  loki = 'Odin'
} else {
  loki = 'loki'
}

//Normalmente le gente lo refactoriza a un Switch
switch (adversario) {
  
    case 'Hulk':
    loki = 'Thanos'
    break
  
    case 'Iron-Man':
    loki = 'Magneto'
    break
   
  case 'Thor':
    loki = 'Odin'
    break
    
  default:
    loki = 'loki'
}
*/
//La mejor forma legible y escalabLe y limpio es utilizando objeto
const adversario = 'Iron-Man' //Solo se cambiaria aqui el personaje

const LOKI_DISFRACES = {  //Podriamos exportar esta constante, para utilizar en otros sitios
  'Iron-Man': 'Magneto',
  Thor: 'Odin',
  Hulk: 'Thanos'        //Aqui podemos ir agregando más personajes
}

const LOKI_DEFAULT_DISFRAZ = 'Loki'
 
const loki = LOKI_DISFRACES[adversario] || LOKI_DEFAULT_DISFRAZ
console.log(loki)   //Aquí seria igual => Magneto

//Otro ejemplo o tipo de caso serian para tener que ejecutar métodos

const adversarioExtraterrestre = 'Diablo'

const BENT_DISFRACES = { 
    Diablo: () => 'Fuego',
    Martiano: () => 'Piedra',
    Nibelula: () => 'Aire', 
}

const BENT_DEFAULT_DISFRAZ = 'Humano'

const ben = BENT_DISFRACES[adversarioExtraterrestre]
  ? BENT_DISFRACES[adversarioExtraterrestre]()
  : BENT_DEFAULT_DISFRAZ

console.log(ben)    //Aqui seria => Fuego