console.log('Loaded!');
// change main text

var element = document.getElementById('maintext');

element.innerText = 'NEw value';


// move image 

var imageselect = document.getElementById('img');
var marginLeft  = 0;
function moveRight(){
    
    marginLeft = marginLeft + 1;
    imageselect.style.marginLeft  = marginLeft +'px';
}

imageselect.onclick = function(){
    var interval = setInterval(moveRight,50);
    
};