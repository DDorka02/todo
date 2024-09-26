import MegjelenitSor from "./MegjelenitSor.js";

export default class Megjelenit {
  #list = [];
  constructor(list, szuloElem) {
    this.#list = list;
    szuloElem.append('<table class="table table-bordered table-striped">');
    this.tablaElem = szuloElem.children("table");
    console.log(this.tablaElem);
    this.tablazatbaIr();
  }

  tablazatbaIr() {
    for (let index = 0; index < this.#list.length; index++) {
      const elem = this.#list[index];

      new MegjelenitSor(elem, this.tablaElem);
    }
  }
}
