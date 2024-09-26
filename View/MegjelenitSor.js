export default class Megjelenit{

    #adat= {}
    constructor(adat, szuloElem){
        this.tablaElem=szuloElem;
        this.#adat= adat;
        this.#sor();
        this.sorElem = this.tablaElem.children("tr:last-child");
        this.keszElem = this.sorElem.children("td").children(".kesz");
        this.torolElem = this.sorElem.children("td").children(".torol");
        this.megseElem = this.sorElem.children("td").children(".megse");
     
      
        //console.log(this.keszElem);
        this.keszElem.on("click", () => {
            console.log(this)
        });
        this.torolElem.on("click", () => {
            console.log(this)
        });
        this.megseElem.on("click", () => {
            console.log(this)
        });
    }

    #sor(){
        let txt = "";

        txt += "<tr>";
        for (const key in this.#adat) {
            txt += `<td>${this.#adat[key]}</td>`;
          }
        
        txt += `<td><span class="kesz">✔️</span> <span class="torol">🗑</span></td>`;
        txt += "</tr>";

        this.tablaElem.append(txt);
                }
            }