

export class Snack {
  constructor(data) {
    this.name = data.name
    this.cost = data.cost
    this.image = data.image
  }

  get SnackTemplate(){
    return /*html*/`
  <div class="col-3 mt-2">
    <div class="card text-center p-1 bg-dark text-light">
      <img src="${this.image}" alt="ajax" class="myImg">
      <p class="pt-2">${this.name}</p>
      <p class="pb-1">${this.cost}</p>
      <button class="btn btn-md btn-danger" onclick="app.snacksController.buySnack('${this.name}')"></button>
    </div>
  </div>`
  }
}