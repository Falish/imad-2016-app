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

$(document).ready(function(){
	$('li.fields').filter(':nth-child(n+4)').addClass('hide');
	
	$('ul').on('click','li.title',function(){
		$(this).next().slideDown(200).siblings('li.fields').slideUp(200);
	});
	
	$connect = mysqli_connect("localhost:5432","falish","db-falish-22325","falish");
	
	if(mysqli_connect_errno($connect)){
	    echo ("Failed to cinnect to mysql.").mysqli_connect_error();
	}
});
//for list
var button1 = document.getElementById('submit_btn');
button1.onclick = function(){
    //create request
    var request1 = new XMLHttpRequest();
    
    //capture response
    request1.onreadystatechange = function(){
      if(request1.readyState === XMLHttpRequest.DONE){
          //take action
          if(request1.status === 200){
              var names = request1.responseText;
              names = JSON.parse(names);
              var list = '';
              for(var i=0;i<names.length;i++){
                  list += '<li>' + names[i] + '</li>';
              }
              var ul = document.getElementById('list');
              ul.innerHTML = list.toString();
              
          }
      }  
    };
    
    //make request
    var name1 = document.getElementById('name');
    name = name1.value;
    request1.open('GET','http://falish.imad.hasura-app.io/submit-name?name='+name,true);
    request1.send(null);
};