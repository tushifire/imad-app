
//counter code
var button = document.getElementById('counter');
button.onclick = function(){
    
    //Create a requrest object
    
    var request = new XMLHttpRequest();

    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
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
    request.open('GET','http://tushifire.imad.hasura-app.io/counter',true);
    request.send(null);
    
};

// Submit namee

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //make a request to the server and send the name
  //Capture a list of names and render it as a list
  var names = ['name1','name2','name3','name4'];
  var list = '';
  for (var i =0;i< names.length; i++) {
      list += '<li>' + names[i] + '</li>';
      
  }
  var ul  = document.getElementById('namelist');
  ul.innerHTML = list;
  
};