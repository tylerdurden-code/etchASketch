function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function divArray(num) { // makes a num length array with div iterations inside as items also makes the divs thereselves
    originalNum = num;
    num = num * num;
    removeAllChildNodes(container);
    let div_Array = new Array(num);
    for (i = 0; i < num; i++){
        div_Array[i] = `div${i}`
    }
    for (i = 0; i < div_Array.length; i++) {
        var g = document.createElement('div')
        g.setAttribute('id',div_Array[i])
        g.setAttribute('class', "same")
        container.appendChild(g);
        //g.innerHTML = `${i}`;
    }
    const same = document.querySelectorAll('.same') // hovering on the divs makes them black
    for (i =0; i < same.length; i++) {
        same[i].addEventListener('mouseover',function(e) {
            e.target.style.backgroundColor = 'black';
        })
    }
    r.style.setProperty('--joke', `repeat(${originalNum},1fr)`)
}




const clearBtn = document.getElementById('clear')
const container = document.querySelector('.container');
const applyBtn = document.getElementById('apply')
var r = document.querySelector(':root')

divArray(16)

applyBtn.addEventListener('click',function() {
    divArray(slider.value);
})




clearBtn.addEventListener('click',function(e) { // makes the background of the divs white
    for (i = 0; i < container.childElementCount; i++) {
        container.children[i].style.backgroundColor = 'white';
    }
    
})
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value + "x" + slider.value ; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value + "x" + this.value;
} 










