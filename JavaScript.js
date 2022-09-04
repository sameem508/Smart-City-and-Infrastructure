function validation(){

			var  fname = document.getElementById('fname').value;
			var  lname = document.getElementById('lname').value;
			var emails = document.getElementById('email').value;
			var msg = document.getElementById('msg').value;
			


			if(fname == ""){
				document.getElementById('efname').innerHTML =" ** Please fill the user name field";
				return false;
			}
			if((fname.length <= 2) || (fname.length > 20)) {
				document.getElementById('efname').innerHTML =" ** User name lenght must be between 2 and 20";
				return false;	
			}
			if(!isNaN(fname)){
				document.getElementById('efname').innerHTML =" ** only characters are allowed";
				return false;
			}
			
			if(lname == ""){
				document.getElementById('elname').innerHTML =" ** Please fill the last name field";
				return false;
			}
			if((lname.length <= 2) || (lname.length > 20)) {
				document.getElementById('efname').innerHTML =" ** last name lenght must be between 2 and 20";
				return false;	
			}
			if(!isNaN(lname)){
				document.getElementById('elname').innerHTML =" ** only characters are allowed";
				return false;
			}

			if(msg == ""){
				document.getElementById('emsg').innerHTML =" **PLEASE WRITE SOMETHING**";
				return false;
			}
			if(emails == ""){
				document.getElementById('eemail').innerHTML =" ** Please fill the email field";
				return false;
			}
			
			if(emails.indexOf('@') <= 0 ){
				document.getElementById('eemail').innerHTML =" ** @ Invalid Position";
				return false;
			}

			if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
				document.getElementById('eemail').innerHTML =" ** . Invalid Position";
				return false;
			}
		}
