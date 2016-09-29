var button = document.getElementById('counter');
button.onclick = function(){
    //create request
    var request = new XMLHttpRequest();
    
    //capture response
    request.onreadystatechange = function(){
      if(request.readystate === XMLHttpRequest.DONE){
          //take action
          if(request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter;
          }
      }  
    };
};