import { TODOLIST2 } from "../adatok.js";
import Megjelenit from "../View/Megjelenit.js";
import Adatkezelo from "../Model/Adatkezelo.js";

export default class Controller {
  constructor() {
    const szuloELEM = $(".tarolo");
    const ujAdat = $(".ujadat");
    this.adatkezelo = new Adatkezelo(TODOLIST2);
    new Megjelenit(TODOLIST2, szuloELEM);
    this.#torolesemeny();
    this.#keszesemeny();
    this.#megseesemeny();
    this.#ujadatHozzaadasesemeny()
  }

  #torolesemeny() {
    $(window).on("torles", (event) => {
      console.log(event.detail);
      adatkezelo.torles(event.detail);
      console.log(TODOLIST2);
      szuloELEM.empty();
      new Megjelenit(TODOLIST2, szuloELEM);
    });
  }
  #keszesemeny() {
    $(window).on("kesz", (event) => {
      console.log(event.detail);
      adatkezelo.kesz(event.detail);
      console.log(TODOLIST2);
      szuloELEM.empty();
      new Megjelenit(TODOLIST2, szuloELEM);
    });
  }
  #megseesemeny() {
    $(window).on("megse", (event) => {
      console.log(event.detail);
      adatkezelo.megse(event.detail);
      console.log(TODOLIST2);
      szuloELEM.empty();
      new Megjelenit(TODOLIST2, szuloELEM);
    });
}
    #ujadatHozzaadasesemeny() {
        $(window).on("hozzaad", (event) => {
          console.log(event.detail);
          adatkezelo.megse(event.detail);
          console.log(TODOLIST2);
          szuloELEM.empty();
          new Megjelenit(TODOLIST2, ujAdat);
        });
  }
}

