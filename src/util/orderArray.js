export default function orderArray(arr) {
    let arrNew = arr.sort(compareDates);
    return arrNew;
}

function compareDates(a, b) {
    if (new Date(a.created_at) < new Date(b.created_at)) {
        return -1;
    }
    if (new Date(a.created_at) > new Date(b.created_at)){
        return 1;
    }
    return 0;
}
