/// <reference types="../@types/jquery/"/>
var data=[];
var dataInstructions=[];
const searchInput=document.getElementById("searchInput"); 
const searchInputOne=document.getElementById("searchInputOne");
let colsData=document.getElementById("colsData");
const barsIcon=document.getElementById("bars-icon");
const closeIcon=document.getElementById("close-icon");

async function getApiData(meal){

  var https= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`, {method:"GET"});
  var response=await https.json();
  data=response.meals
  displayData();
  console.log(data);

  colsData.addEventListener("click",function(e){
   
    mealName=e.target.innerHTML;
    console.log(mealName);
    getApiInstructions(mealName)
    searchInput.classList.add("d-none");
    searchInputOne.classList.add("d-none");
    colsData.classList.add("d-none");


  
  })

}

async function getApiDataOne(word){

    var https= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${word}`, {method:"GET"});
    var response=await https.json();
    data=response.meals
    displayData();
    console.log(data);

    colsData.addEventListener("click",function(e){
   
      mealName=$(e.target).find('h2').text();
      console.log(mealName);
      getApiInstructions(mealName)
      searchInput.classList.add("d-none");
      searchInputOne.classList.add("d-none");
      colsData.classList.add("d-none");
  
  
    
    })
  
  }
  


function displayData(){

  var cols=``;

  for(var i=0;i<data.length;i++){

    cols+=`  <div class="col-md-3 ">

    <div class="card text-start">
    
    <div class="photo">
    <img class="card-img-top image" src="${data[i].strMealThumb}" alt="Title">
      <div class="card-body">
        <h2 class="card-title">${data[i].strMeal}</h2>
       
       
      </div>
    </div>
      
    </div>

     </div>
`
  }

  colsData.innerHTML=cols;

}

async function getApiInstructions(mealName){

  var https= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`, {method:"GET"});
  var response=await https.json();
  dataInstructions=response.meals;
  
  displayInstructions();
  console.log(dataInstructions);
  

}

function displayInstructions(){

  var cols=``;

  for(var i=0;i<dataInstructions.length;i++){

    /********************Tag names**************/

    if(dataInstructions[i].strTags!=null){
     let myArray = dataInstructions[i].strTags.split(",");
     for(var z=0;z<myArray.length;z++){
       
       // document.getElementById("tags").innerHTML="Hello";
       console.log(myArray[z]);
     }
    
   }
   else{
     console.log("Not Hello");
   }
   
    cols+=`  
    <div class="col-md-4">

    <img src="${dataInstructions[i].strMealThumb}" class="w-100" alt="" srcset="">
    <h2>${dataInstructions[i].strMeal}</h2>
</div>

<div class="col-md-8">
    <h2>Instructions</h2>
    <p>${dataInstructions[i].strInstructions}</p>
    <h3>Area : ${dataInstructions[i].strArea}</h3>
    <h3>Category : ${dataInstructions[i].strCategory}</h3>
    <h3>Recipes :</h3>

    <ul class="list-unstyled d-flex g-3 flex-wrap">

    <li class="alert alert-info m-2 p-1">${dataInstructions[i].strMeasure1} ${dataInstructions[i].strIngredient1}</li>
    <li class="alert alert-info m-2 p-1">${dataInstructions[i].strMeasure2} ${dataInstructions[i].strIngredient2}</li>
    <li class="alert alert-info m-2 p-1">${dataInstructions[i].strMeasure3} ${dataInstructions[i].strIngredient3}</li>
    <li class="alert alert-info m-2 p-1">${dataInstructions[i].strMeasure4} ${dataInstructions[i].strIngredient4}</li>
    <li class="alert alert-info m-2 p-1">${dataInstructions[i].strMeasure5} ${dataInstructions[i].strIngredient5}</li>
    <li class="alert alert-info m-2 p-1">${dataInstructions[i].strMeasure6} ${dataInstructions[i].strIngredient6}</li>
    <li class="alert alert-info m-2 p-1">${dataInstructions[i].strMeasure7} ${dataInstructions[i].strIngredient7}</li>
    <li class="alert alert-info m-2 p-1">${dataInstructions[i].strMeasure8} ${dataInstructions[i].strIngredient8}</li>
    <li class="alert alert-info m-2 p-1">${dataInstructions[i].strMeasure9} ${dataInstructions[i].strIngredient9}</li>
  
  

    </ul>

    <h3>Tags :</h3>
    <ul class="list-unstyled d-flex g-3 flex-wrap">

        <li class="alert alert-danger m-2 p-1">${dataInstructions[i].strTags}</li>
    </ul>

    <a class="btn btn-success" href="${dataInstructions[i].strSource}" target="_blank">Source</a>

    <a class="btn btn-danger" href="${dataInstructions[i].strYoutube}" target="_blank">Youtube</a>
</div>

`
  }

  colsInstructions.innerHTML=cols;
  

}

function search(){
    let input=searchInput.value;
     getApiData(input)
    
}

function searchOne(){
    let input=searchInputOne.value;
     getApiDataOne(input)
    
}


getApiDataOne();


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

$(".settings .links .innerBox .close i").on("click",function(){
    $(".settings").animate({width:"toggle"},1000)
})


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

$("#colsData").on("click",function(e){

  console.log($(e.target).find('h2').text());
  // alert($(e.target,"h3").text())
})