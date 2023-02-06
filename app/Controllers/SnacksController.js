import { appState } from "../AppState.js";
import { snacksServices } from "../Services/SnacksServices.js";
import { setHTML, setText } from "../Utils/Writer.js";


function _drawSnacks(){
  let snack = appState.snacks
  let template = ''
  snack.forEach(s => {
    template += s.SnackTemplate
  })
  setHTML('snack', template)
}

function _drawTotals(){
  setText('total', `Total: $${appState.total / 4}`)
  setText('cost', `Cost: $${appState.cost}`)

}

export class SnacksController{
  constructor(){
    _drawSnacks()
    appState.on('total', _drawTotals)
    appState.on('cost', _drawTotals)
  }

  addQuarter(){
    snacksServices.addQuarter()
  }

  buySnack(name){
    snacksServices.adjustCost(name)
  }
}