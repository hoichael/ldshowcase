export default interface GameInterface {
    title:string;
    img:string;
    date:string;
    itchLink:string;
    ldLink:string;
    svg:string;
}

export default class Game implements GameInterface {
    title:string;
    img:string;
    date:string;
    itchLink:string;
    ldLink:string;
    svg:string;

    constructor(title:string, img:string, date:string, itchLink:string, ldLink:string, svg:string) {
        this.title = title;
        this.img = img;
        this.date = date;
        this.itchLink = itchLink;
        this.ldLink = ldLink;
        this.svg = svg;
    }
}