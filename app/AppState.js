import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Snack } from "./Models/Snack.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])

  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [
    new Snack(
      {
        name: "prongles",
        cost: 5,
        image: 'https://images.unsplash.com/photo-1599493356626-9fdbdabfd9bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80'
      }
    ),
    new Snack(
      {
        name: "dorongles",
        cost: 2,
        image: 'https://images.unsplash.com/photo-1640547587776-4d9256b6f6ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      }
    ),
    new Snack(
      {
        name: "chotles",
        cost: 5,
        image: 'https://images.unsplash.com/photo-1621754420535-683ae10e298a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
      }
    ),
    new Snack(
      {
        name: "sadyuns",
        cost: 10,
        image: 'https://baysmokes.com/wp-content/uploads/2022/09/DankFunions-2-scaled.jpg'
      }
    ),
    new Snack(
      {
        name: "M&L",
        cost: 30,
        image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80'
      }
    ),
    new Snack(
      {
        name: "BrokeDay",
        cost: 10000,
        image: 'https://lilluna.com/wp-content/uploads/2014/06/homemade-pay-days-8.jpg'
      }
    ),
    new Snack(
      {
        name: "lickers",
        cost: 7,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Snickers-broken.png/800px-Snickers-broken.png'
      }
    )
]

  total = 0
  cost = 0

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
