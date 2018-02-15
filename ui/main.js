console.log('Loaded!');
// change main text

var element = document.getElementById('maintext');

element.innerText = 'NEw value';


// move image 

var imageselect = document.getElementById('img');

imageselect.onclick = function(){
    imageselect.style.marginLeft = '100px';
    
};