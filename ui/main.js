var button = document.getElementById('counter');
button.onclick = function(){
    //create request
    var request = new XMLHttpRequest();
    
    //capture response
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //take action
          if(request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }  
    };
    
    //make request
    request.open('GET','http://falish.imad.hasura-app.io/counter',true);
    request.send(null);
};

//for list
var button = document.getElementById('submit_btn');
button.onclick = function(){
    //create request
    var request = new XMLHttpRequest();
    
    //capture response
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //take action
          if(request.status === 200){
              var names = request.responseText;
              names = JSON.parse(names);
              var list = '';
              for(var i=0;i<names.length;i++){
                  list = '<li>' + names[i] + '</li>';
              }
              var ul = document.getElementById('list');
              ul.innerHTML = list.toString();
              
          }
      }  
    };
    
    //make request
    var name = document.getElementById('name');
    name = nameInput.value;
    request.open('GET','http://falish.imad.hasura-app.io/submit'+name,true);
    request.send(null);
};