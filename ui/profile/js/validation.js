function validateForm(){
	for(var i=0;i < myform.elements.length;i++){
		if(myform.elements[i].className == "req" && myform.elements[i].value.length == 0){
			alert('Please fill all the required fields..');
			return false;
		}
	}
	
	var email = document.getElementById('email').value;
	var atpos = email.indexof('@');
	var dotpos = email.lastIndexOf('.');
	alert(email);
	
	if(atpos < 1 || dotpos < atpos+2 || dotpos+2 >= x.length){
		alert('please type a valid email address!');
		return false;
	}
}

