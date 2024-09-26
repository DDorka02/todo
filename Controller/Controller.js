import { TODOLIST2 } from "../adatok.js";
import Megjelenit from "../View/Megjelenit.js";
import Adatkezelo from "../Model/Adatkezelo.js";

export default class Controller{

    constructor(){
    const szuloELEM = $(".tarolo")
    const adatkezelo = new Adatkezelo(TODOLIST2)
    new Megjelenit(TODOLIST2, szuloELEM);
    $(window).on("torles", (event) => {
        console.log(event.detail);
        szuloELEM.empty();
        new Megjelenit(TODOLIST2, szuloELEM);
    })
    }

}