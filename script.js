

let pikachu = null
let pikachuLoaded = false;

axios.get('wfefwefwef')
.then((resultOfPromise)=>{
  pikachu = resultOfPromise.data
  pikachuLoaded = true
  checkForPikachuLoaded()
})
.catch((error)=>{
  console.log('De la promesa no ha sido cumplida con exito')
})


const checkForPikachuLoaded = ()=>{
  if(!pikachuLoaded){
    console.log('Loading')
  } else {
    console.log('Pikachu cargado')
  }
}


checkForPikachuLoaded()

