
//counter code
var button = document.getElementById('counter');
button.onclick = function(){
    
    //Create a requrest object
    
    var request = new XMLHttpRequest();

    //Capture the response and store it in a variable
    request.onreadystatechange === function(){
      if (request.readyState === XMLHttpRequest.DONE ){
          //Take action
          if(request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
              
          }
      }
      //Not done yet
    };
    
    //Render the variable on the correct span.
    //Make a request to the counter endpoint
    request.open('GET','http://http://tushifire.imad.hasura-app.io/counter',true);
    request.send(null);
    
};