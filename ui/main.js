
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