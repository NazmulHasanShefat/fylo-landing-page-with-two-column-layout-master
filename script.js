function myFunction(){
    var error = document.querySelector(".error");
    var input_eml = document.querySelector(".eml");

    var isvalid = true;
    var email = document.forms["myForm"]["email"].value;
     if(email.length < 5 ){
        error.innerHTML = "Place input your currect email";
        input_eml.style.borderColor = "red";
        input_eml.style.backgroundColor = "rgba(255, 0, 0, 0.089)";
        isvalid = false;
     };

     return isvalid;
};

function myFunction2(){
    var error2 = document.querySelector(".error2");
    var input_eml2 = document.querySelector(".email-offer2");

   var isRight = true;
    var email2 = document.forms["myForm2"]["email2"].value;
     if(email2.length < 5 ){
       error2.innerHTML = "something wrong";
       input_eml2.style.borderColor = "red";
       input_eml2.style.backgroundColor = "rgba(255, 0, 0, 0.089)";
       isRight = false;
     };

     return isRight;
};