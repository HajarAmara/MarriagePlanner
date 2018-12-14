function getJops(){
  $("#jopsData").text("");
  $.getJSON("jops.json", function(data){
    $.each(data, function(i, item){
      $.each(item, function(j, res){
        $("#jopsData").append("Jop: " + res.name + "<br>" + "  University: " + res.university + "<br>" + "  Place: " + res.place + "<br>" + "  Description: " + res.description + "<br>").append( "<br>" );
      });
    });
  });
}

function openWindowOrNo(theForm){
  if(validateUser(theForm)){
    theForm.action="MainPage.php";
  }
}


function validateForm(){
     var userName = document.forms["myForm"]["fName"].value;
     var surName= document.forms["myForm"]["surName"].value;
     var mail= document.forms["myForm"]["email"].value;
     var passw1 = document.forms["myForm"]["password"].value;
     var pass2 = document.forms["myForm"]["Repassword"].value;
     var flag=true;
     var f1=  validName(userName);
     var f2= validSurName(surName);
     var f3= EmailValidation(mail);
     var f45=passwordValidation(passw1,pass2);

     if(f1 && f2 && f3 && f45 ){
            emptyData();
            alert("U've Regisetred successufuly ");
            return true;
          }
          return false;
  }//endValidator
  function emptyData(){
    document.getElementById("nameError").innerHTML=" ";
    document.getElementById("SurnameError").innerHTML=" ";
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


      function validSurName(str){
        if (str== null || str == "")
           {
             document.getElementById("SurnameError").innerHTML="SurName must be filled out";
           return false;
          }
          else{
            var pattern = /^[a-zA-Z]+$/;
            if(!pattern.test(str)){
              document.getElementById("SurnameError").innerHTML="insert a valid surName";
              return false;
            }else{
              document.getElementById("SurnameError").innerHTML=" ";

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

    function checkPass(pas1){
      var passw=  /^[A-Za-z][@#]\w{7,14}$/;  
      if(pas1.value.match(passw))   
      {     
         return true;  
      }  
    }
	
    function validateUser(){
      var username = document.forms["myForm1"]["userName"].value;
      var pasw = document.forms["myForm1"]["psw"].value;
               if( username == "Admin@gmail.com" && pasw == "Admin" ){
                    return true;
               }

      return false;
    }
