var button = document.getElementById('counter');
button.onclick = function(){
    //create request
    var request = new XMLHttpRequest();
    var counter=9;
    //capture response
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //take action
          if(request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter+1;
          }
      }  
    };
    
    //make request
    request.open('GET','http://falish.imad.hasura-app.io/counter',true);
    request.send(null);
};