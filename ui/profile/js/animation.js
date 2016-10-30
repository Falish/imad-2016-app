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