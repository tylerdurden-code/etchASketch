function divArray(num) { // makes a num length array with div iterations inside as items
    let div_Array = new Array(num);
    for (i = 0; i < num; i++){
        div_Array[i] = `div${i}`
    }

    return div_Array;
}


const container = document.querySelector('.container')

var divs = divArray(256);

for (i = 0; i < divs.length; i++) {
    var g = document.createElement('div')
    g.setAttribute('id',divs[i])
    g.setAttribute('class', "same")
    container.appendChild(g);
    g.innerHTML = `${i}`;
}

