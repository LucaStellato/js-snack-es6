console.log('it Work')

/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore*/

const racingBikes = [
    {name: 'Bianchi', weight: 7},
    {name: 'Pinarello', weight: 6.8},
    {name: 'Specialized', weight: 7.2},
    {name: 'Trek', weight: 6.5},
    {name: 'Cannondale', weight: 7.1}
]

let bikeLight= racingBikes[0];


for(let i=0; i<racingBikes.length; i++){
   if(bikeLight.weight>racingBikes[i].weight){
  bikeLight = racingBikes[i]
   }
 
}

  console.log(`La bici che pesa di meno é ${bikeLight.name}`)