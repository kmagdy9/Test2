/// <reference types="../@types/jquery/"/>

var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPhoneInput = document.getElementById("userPhone");
var userAgeInput = document.getElementById("userAge");
var userPasswordInput = document.getElementById("userPassword");
var userRePasswordInput = document.getElementById("userRePassword");
var submitButton=document.getElementById("submitButton");
const barsIcon=document.getElementById("bars-icon");
const closeIcon=document.getElementById("close-icon");


var nameFocous=false;
var emailFocous=false;
var phoneFocous=false;
var ageFocous=false;
var passwordFocous=false;
var repasswordFocous=false;

userNameInput.addEventListener("focus",function(){
  nameFocous=true;
})
userEmailInput.addEventListener("focus",function(){
  emailFocous=true;
})
userPhoneInput.addEventListener("focus",function(){
  phoneFocous=true;
})
userAgeInput.addEventListener("focus",function(){
  ageFocous=true;
})
userPasswordInput.addEventListener("focus",function(){
  passwordFocous=true;
})
userRePasswordInput.addEventListener("focus",function(){
  repasswordFocous=true;
})

function submit(){
  if(validationName()==true
  &&validationEmail()==true &&
  validationPhone()==true &&
  validationAge()==true &&
  validationPassword()==true &&
  validationRePassword()==true){
    submitButton.classList.remove("disabled")
  }
  else{
    submitButton.classList.add("disabled")
  }
}

function validationName() {

  if(nameFocous==true){

    var alertMessage = document.getElementById("messageName");

    var text = userNameInput.value;
  
    var regexName = /^[a-zA-Z][a-zA-Z]{2,8} [a-zA-Z][a-zA-Z]{2,8}$/;
  
    if (regexName.test(text) == true) {
  
      userNameInput.classList.remove("is-invalid");
      userNameInput.classList.add("is-valid");
      alertMessage.classList.add("d-none");  
      return true;
      
    } else {
      userNameInput.classList.remove("is-valid");
      userNameInput.classList.add("is-invalid");
      alertMessage.classList.remove("d-none");
      return false;
    }
    
  }

  

}

 function validationEmail() {
   if(emailFocous==true){

    var alertMessage = document.getElementById("messageEmail");
  var text = userEmailInput.value;

  var regexMail =
    /(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if (regexMail.test(text) == true) {
    userEmailInput.classList.remove("is-invalid");
    userEmailInput.classList.add("is-valid");
    alertMessage.classList.add("d-none");
   
    return true;
  } else {
    userEmailInput.classList.remove("is-valid");
    userEmailInput.classList.add("is-invalid");
    alertMessage.classList.remove("d-none");
   
    return false;
  }
   }
  
}

function validationPhone() {
   if(phoneFocous==true){
    var alertMessage = document.getElementById("messagePhone");
    var text = userPhoneInput.value;
  
    var regexPhone =/^01[0-2,5]{1}[0-9]{8}$/;
  
    if (regexPhone.test(text) == true) {
      userPhoneInput.classList.remove("is-invalid");
      userPhoneInput.classList.add("is-valid");
      alertMessage.classList.add("d-none");
     
      return true;
    } else {
      userPhoneInput.classList.remove("is-valid");
      userPhoneInput.classList.add("is-invalid");
      alertMessage.classList.remove("d-none");
     
      return false;
    }

   }
    
}

function validationAge() {
    if(ageFocous==true){
      var alertMessage = document.getElementById("messageAge");
    var text = userAgeInput.value;
  
    var regexAge =/^(0?[1-9]|[1-9][0-9])$/;
  
    if (regexAge.test(text) == true) {
      userAgeInput.classList.remove("is-invalid");
      userAgeInput.classList.add("is-valid");
      alertMessage.classList.add("d-none");
     
      return true;
    } else {
      userAgeInput.classList.remove("is-valid");
      userAgeInput.classList.add("is-invalid");
      alertMessage.classList.remove("d-none");
     
      return false;
    }

    }
    
}
function validationPassword() {
   
  if(passwordFocous==true){
    var alertMessage = document.getElementById("messagePassword");
    var text = userPasswordInput.value;
  
    var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
    if (regexPassword.test(text) == true) {
      userPasswordInput.classList.remove("is-invalid");
      userPasswordInput.classList.add("is-valid");
      alertMessage.classList.add("d-none");
     
      return true;
    } else {
      userPasswordInput.classList.remove("is-valid");
      userPasswordInput.classList.add("is-invalid");
      alertMessage.classList.remove("d-none");
     ;
  
      return false;
    }

  }


}

function validationRePassword(){

  if(repasswordFocous==true){
    var alertMessage = document.getElementById("messageRePassword");
    if(userPasswordInput.value===userRePasswordInput.value){
        userRePasswordInput.classList.remove("is-invalid");
        userRePasswordInput.classList.add("is-valid");
        alertMessage.classList.add("d-none");
       
        return true;
    }
    else {
        userRePasswordInput.classList.remove("is-valid");
        userRePasswordInput.classList.add("is-invalid");
        alertMessage.classList.remove("d-none");
       ;
    
        return false;
      }

  }
    
}
  

$(function(){

  $(".loader").fadeOut(2000,function(){
    $(".loading").slideUp(2000 , function(){
      $("body").css("overflow","auto")
    });
  });
})


function Search(){
  window.location = "search.html";
}

function Categories(){
  window.location = "category.html";
}

function Area(){
  window.location = "area.html";
}

function Ingredients(){
  window.location = "ingredients.html";
}

function ContactUs(){
  window.location = "signUp.html";
}

$("#bars-icon").on("click",function(){

  closeIcon.classList.remove("d-none");
  barsIcon.classList.add("d-none");
  $(".setting .links").animate({width:"toggle"},1000);
  
})

$("#close-icon").on("click",function(){

  closeIcon.classList.add("d-none");
  barsIcon.classList.remove("d-none");
  $(".setting .links").animate({width:"toggle"},1000);
  
})

