
/// <reference types="../@types/jquery/"/>
var data=[];
var dataMeals=[];
var dataInstructions=[];
let country;
var mealName;
let colsData=document.getElementById("colsData");
let colsDataa=document.getElementById("colsDataa");
const barsIcon=document.getElementById("bars-icon");
const closeIcon=document.getElementById("close-icon");
const loadingOne=document.getElementById("loadingOne");
const loadingTwo=document.getElementById("loadingTwo");

async function getApiData(){

  loadingOne.classList.remove("d-none");
  
  var https= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`, {method:"GET"});
  
  var response=await https.json();
  data=response.meals


  colsData.addEventListener("click",function(e){
   
    // country=$(e.target).find('h3').text();
    country=e.target.innerHTML;
    console.log(country);
    getApiCountry(country);
    colsData.classList.add("d-none");
    colsDataa.classList.remove("d-none")

  })
  displayData();
  loadingScreen1();
 
  
}

function displayData(){


  
  var cols=``;

  for(var i=0;i<data.length;i++){

    cols+=`  <div class="col-md-3 ">

    <div class="card text-start">
    
    <div class="photo text-center">
    <i class="fa-solid fa-house-laptop"></i>
      <div id="cardBody" class="card-body">
        <h3 class="card-title text-center">${data[i].strArea}</h3>
       
      </div>
    </div>
      
    </div>

     </div>
`
  }

  colsData.innerHTML=cols;

}

async function getApiCountry(country){

  loadingTwo.classList.remove("d-none");

  var https= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`, {method:"GET"});
  var response=await https.json();
  dataMeals=response.meals

  displayCountry();
  loadingScreen2();
  colsDataa.addEventListener("click",function(e){
   
    // mealName=$(e.target).find('h2').text();
    mealName=e.target.innerHTML;
    getApiInstructions(mealName)
    colsDataa.classList.add("d-none");
    colsInstructions.classList.remove("d-none")

  })

  // getApiInstructions(mealName);

}


function displayCountry(){


  var cols=``;

  for(var i=0;i<dataMeals.length;i++){

    cols+=`  <div class="col-md-3 ">

    <div class="card text-start">
    
    <div class="photo">
    <img class="card-img-top image" src="${dataMeals[i].strMealThumb}" alt="Title">
      <div class="card-body">
        <h2 class="card-title">${dataMeals[i].strMeal}</h2>
       
       
      </div>
    </div>
      
    </div>

     </div>
`
  }

  colsDataa.innerHTML=cols;

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



// $(document).ready


getApiData();

getApiInstructions();


function loadingScreen1(){

  $(function(){

    $(".area .loader").fadeOut(2000,function(){
      $(".area .loading").slideUp(2000 , function(){
        $("body").css("overflow","auto")
      });
    });
  })

}

function loadingScreen2(){

  $(function(){

    $(".countries .loader").fadeOut(2000,function(){
      $(".countries .loading").slideUp(2000 , function(){
        $("body").css("overflow","auto")
      });
    });
  })

}





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



$("#colsData").on("click",function(e){

  console.log($(e.target).find('h3').text());
  // alert($(e.target,"h3").text())
})