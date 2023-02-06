import { appState } from "../AppState.js"

class SnackServices {

  addQuarter(){
    appState.total++
  }
  adjustCost(name){
    let theSnack = appState.snacks.find(e => e.name == name)
    appState.cost += theSnack.cost
  }

  constructor(){

  }
}

export const snacksServices = new SnackServices
