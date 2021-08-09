function choice (items) {
    let random = Math.floor(Math.random(items.length - 1) * 10);
    return items[random];
}

function remove(items, item) {
    let idx = items.indexOf(item);
    if(idx > -1){
        items.splice(idx, 1);
        return item;
    }
}

export { choice, remove };