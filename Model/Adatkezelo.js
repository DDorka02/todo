
export default class Adatkezelo{

    #list=[]
    constructor(list){
        this.#list=list;
    }
    torles(index){
        this.#list.splice(index,1)
    }
    kesz(index){
        this.#list[index].kesz =true
    }
    megse(index){
        this.#list[index] = false;
    }

    ujadatHozzaadasa(){}
    hatralevoFeladatokSzama(){}
    elvegzettFeladatok(){}
    hataridoigHatralevoNap(){}
    kovetkezoHatarido(){}

}