function getBrideData(){
  $("#bridesData").text("");
  $.getJSON("brides.json", function(data){
    $.each(data, function(i, item){
      $.each(item, function(j, res){
        $("#bridesData").append("Bride: "+ res.brideID+ "<br>"+ res.brideName + "<br>" + "  email: " + res.email + "<br>" + " password: " + res.password + "<br>" + "  groomName: " + res.groomName + "<br>").append( "<br>" );
      });
    });
  });
}

function getGroomData(){
  $("#groomData").text("");
  $.getJSON("groom.json", function(data){
    $.each(data, function(i, item){
      $.each(item, function(j, res){
        $("#groomData").append("groom: " +res.groomID+ "<br>"+ res.groomName + "<br>" + "  email: " + res.email + "<br>" + " password: " + res.password + "<br>" + "  groomName: " + res.brideName + "<br>").append( "<br>" );
      });
    });
  });
}

function openWindowOrNo(theForm){
  if(validateUser(theForm)){
    theForm.action="MainPage.php";
  }
}

function sendMessage(){
	 var service_id = 'my_mandrill';
	var template_id = 'feedback';
	var template_params = {
		name= document.forms["msgForm"]["name"].value;
		reply_emaildocument.forms["msgForm"]["email"].value;
		message=ocument.forms["msgForm"]["comments"].value
	};
	emailjs.send(service_id,template_id,template_params);
}

function appendTimeLineValues(){
	return true;
}

function validateForm(){
     var email = document.forms["myForm"]["email"].value;
     var name= document.forms["myForm"]["name"].value;
     var partner= document.forms["myForm"]["partner"].value;
     var passw1 = document.forms["myForm"]["password"].value;
     var pass2 = document.forms["myForm"]["repassword"].value;
     var flag=true;
	 // check name the register person and his/her partener
     var f1=  validName(name);
	 var f2=  validName(partner);
     var f3= EmailValidation(email);
     var f4=passwordValidation(passw1,pass2);

     if(f1 && f2 && f3 && f4 && validateGender() ){
            emptyData();
            alert("U've Regisetred successufuly ");
            return true;
          }
          return false;
  }//endValidator
  function emptyData(){
    document.getElementById("nameError").innerHTML=" ";
    document.getElementById("partnerError").innerHTML=" ";
    document.getElementById("EmailError").innerHTML=" ";
    document.getElementById("passError").innerHTML=" ";
    document.getElementById("RePassError").innerHTML=" ";
  }
  function checkPassword(str)
  {
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(str);
  }

    function validName(str){
      if ( str==null || str == "")
         {
           document.getElementById("nameError").innerHTML="Name must be filled out";
           return false;
        }
        else{
             var pattern = /^[a-zA-Z]+$/;
               if(!pattern.test(str)){
                 document.getElementById("nameError").innerHTML="insert a valid Name";
                 return false;
               }else{
                 document.getElementById("nameError").innerHTML="";
               }
        }
        return true;

      }


      function validPartnerName(str){
        if (str== null || str == "")
           {
             document.getElementById("partnerError").innerHTML="Partner Name must be filled out";
           return false;
          }
          else{
            var pattern = /^[a-zA-Z]+$/;
            if(!pattern.test(str)){
              document.getElementById("partnerError").innerHTML="insert a valid partner Name";
              return false;
            }else{
              document.getElementById("partnerError").innerHTML=" ";

            }
          }
          return true;

    }

    function EmailValidation(str){
      if (str == null || str== "")
         {
           document.getElementById("EmailError").innerHTML="E-Mail must be filled out";
           return false;
        }
        else{
          var pattern= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         if(!pattern.test(str)){
           document.getElementById("EmailError").innerHTML="please insert a valid E-Mail";
           return false;
         }else{
           document.getElementById("EmailError").innerHTML="";
         }
        }
        return true;
    }
    function passwordValidation(password1,password2){
      var flag1=true,flag2=true;
      if (password1 == null ||password1 == "")
         {
                      flag1=false;
        }
       if (password2 == null ||password2== "")
          {
                        flag2=false;
         }
         if(password1 !=null && password2!=null ){
              if(password1 !=password2){
                alert("passwords must be the same");
                return false;
              }if(password1 ==password2 && !(password1 == null ||password1== "") &&!(password2 == null ||password2== "")){

                  return true;
              }
           }
           return false;
    }
	function validateGender(){
		if(document.getElementById("maleId").checked ){
			// read data from grrom data
			///
			///
			return true;
		}else{
			if(	document.getElementById("femaleId").checked){
				/// read data from brides data 
				////
				////
				return true;
			}
		}
	}

    function checkPass(pas1){
      var passw=  /^[A-Za-z][@#]\w{7,14}$/;  
      if(pas1.value.match(passw))   
      {     
         return true;  
      }  
    }
	
    function validateUser(){
      var username = document.forms["myForm"]["userName"].value;
      var pasw = document.forms["myForm"]["psw"].value;
               if( username == "Admin@gmail.com" && pasw == "Admin" ){
                    return true;
               }

      return false;
    }
