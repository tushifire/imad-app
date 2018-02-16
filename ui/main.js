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


//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    //Make a request to the counter endpoint
    
    //Capture the response and store it in a variable
    
    //Render the variable on the correct span.
    counter = counter + 1;
    var span =document.geElementById('count');
    span.innerHTML= counter.toString();
};