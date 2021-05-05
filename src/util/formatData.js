import Game from "./Game"
import orderArray from "./orderArray"

export default function formatData(data) {
    let arrFinal = [];
    let orderedItchData = orderArray(data[0]);
    let ldData = data[1].reverse();

    for(let i = 0; i < orderedItchData.length; i++) {
        arrFinal.push(new Game(
            orderedItchData[i].title,
            orderedItchData[i].cover_url || "thumbnail_placeholder.png",
            orderedItchData[i].created_at.slice(0, orderedItchData[i].created_at.indexOf(" ")),
            orderedItchData[i].url,
            ldData[ldData.length - 1 - orderedItchData.length + i].link,
            getSVGtype(i, orderedItchData.length),
        ))
    }

    return arrFinal;
}

function getSVGtype(index, arrLength) {

    if(index === 0) {
        return "start"
    } else if(index === arrLength - 1) {
        return "end"
    } else {
        return "mid"
    }
}