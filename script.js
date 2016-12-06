var status = "out";


var onload = function(){
  $(".page1").show();
  
   
  if(status === "out")
  {
 
  $(".login").animate({height:210},2000);
  $(".login").animate({width:450},3000 ,function(){
     $("#form").fadeIn(1500, function(){
       $("#itago").show();
     });
  });  
  
 
    


  }
 
};




 var check = function(){

  
  $(".dialog").show();

  if($("#username").val() === "peejay" && $("#password").val() === "geraldine")
    {
      alert("correct");
      $(".page1").hide();
      $("form").hide();
      $(".page2").show(500);
      status = "in";
      $(".login").animate({height: 5, width: 4});

    }
  else
  {
    alert("wrong");  

  }

};





var logout = function(){
  $(".page2").hide();
    status = "out";
   $("#username").val("");
   $("#password").val("");
 $("#form").hide();
   onload();
};







  var item1 = function(){

$("#orders1").fadeIn(500);
    var quantity = document.getElementById('quantity1').value;
    var price = document.getElementById("prices1").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price1").value = total;
get_total();


};
  

 var item2 = function(){
$("#orders2").fadeIn(500);
    var quantity = document.getElementById('quantity2').value;
    var price = document.getElementById("prices2").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price2").value = total;
get_total();


};
  



 var item3 = function(){
$("#orders3").fadeIn(500);
    var quantity = document.getElementById('quantity3').value;
    var price = document.getElementById("prices3").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price3").value = total;
get_total();


};
  
 var item4 = function(){
$("#orders4").fadeIn(500);
    var quantity = document.getElementById('quantity4').value;
    var price = document.getElementById("prices4").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price4").value = total;
get_total();


};
  

 var item5 = function(){
$("#orders5").fadeIn(500);
    var quantity = document.getElementById('quantity5').value;
    var price = document.getElementById("prices5").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price5").value = total;
get_total();


};
  
 var item6 = function(){
$("#orders6").fadeIn(500);
    var quantity = document.getElementById('quantity6').value;
    var price = document.getElementById("prices6").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price6").value = total;
get_total();


};
  
 var item7 = function(){
$("#orders7").fadeIn(500);
    var quantity = document.getElementById('quantity7').value;
    var price = document.getElementById("prices7").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price7").value = total;
get_total();

};
  
 var item8 = function(){
$("#orders8").fadeIn(500);
    var quantity = document.getElementById('quantity8').value;
    var price = document.getElementById("prices8").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price8").value = total;
get_total();


};

  
 var item9 = function(){
$("#orders9").fadeIn(500);
    var quantity = document.getElementById('quantity9').value;
    var price = document.getElementById("prices9").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price9").value = total;
get_total();


};
  
 var item10 = function(){
$("#orders10").fadeIn(500);
    var quantity = document.getElementById('quantity10').value;
    var price = document.getElementById("prices10").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price10").value = total;
get_total();



};

 var item11 = function(){
$("#orders11").fadeIn(500);
    var quantity = document.getElementById('quantity11').value;
    var price = document.getElementById("prices11").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price11").value = total;
get_total();



};


 var item12 = function(){
$("#orders12").fadeIn(500);
    var quantity = document.getElementById('quantity12').value;
    var price = document.getElementById("prices12").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price12").value = total;
get_total();


};


 var item13 = function(){
$("#orders13").fadeIn(500);
    var quantity = document.getElementById('quantity13').value;
    var price = document.getElementById("prices13").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price13").value = total;
get_total();


};


 var item14 = function(){
$("#orders14").fadeIn(500);
    var quantity = document.getElementById('quantity14').value;
    var price = document.getElementById("prices14").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price14").value = total;
get_total();


};



 var item15 = function(){
$("#orders15").fadeIn(500);
    var quantity = document.getElementById('quantity15').value;
    var price = document.getElementById("prices15").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price15").value = total;
get_total();


};

 var item16 = function(){
$("#orders16").fadeIn(500);
    var quantity = document.getElementById('quantity16').value;
    var price = document.getElementById("prices16").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price16").value = total;
get_total();


};

 var item17 = function(){
$("#orders17").fadeIn(500);
    var quantity = document.getElementById('quantity17').value;
    var price = document.getElementById("prices17").innerHTML;
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
   document.getElementById("price17").value = total;
get_total();


};






 var get_total = function(){

      var total_amount = 0;

var x1 =  document.getElementById("price1").value;
var x2 =  document.getElementById("price2").value;
var x3 =  document.getElementById("price3").value;
var x4 =  document.getElementById("price4").value;
var x5 =  document.getElementById("price5").value;
var x6 =  document.getElementById("price6").value;
var x7 =  document.getElementById("price7").value;
var x8 =  document.getElementById("price8").value;
var x9 =  document.getElementById("price9").value;
var x10 =  document.getElementById("price10").value;
var x11 =  document.getElementById("price11").value;
var x12 =  document.getElementById("price12").value;
var x13 =  document.getElementById("price13").value;
var x14 =  document.getElementById("price14").value;
var x15 =  document.getElementById("price15").value;
var x16 =  document.getElementById("price16").value;
var x17 =  document.getElementById("price17").value;

if(x1 != ""){
  x1 = parseInt(x1)
}
    else
      {
        x1 = 0;
      }
if(x2 != ""){
  x2 = parseInt(x2)
}
    else
      {
        x2 = 0;
      }
if(x3 != ""){
  x3 = parseInt(x3)
}
    else
      {
        x3 = 0;
      }
if(x4 != ""){
  x4 = parseInt(x4)
}
    else
      {
        x4 = 0;
      }
if(x5 != ""){
  x5 = parseInt(x5)
}
    else
      {
        x5 = 0;
      }
if(x6 != ""){
  x6 = parseInt(x6)
}
    else
      {
        x6 = 0;
      }
if(x7 != ""){
  x7 = parseInt(x7)
}
    else
      {
        x7 = 0;
      }
if(x8 != ""){
  x8 = parseInt(x8)
}
    else
      {
        x8 = 0;
      }
if(x9 != ""){
  x9 = parseInt(x9)
}
    else
      {
        x9 = 0;
      }
if(x10 != ""){
  x10 = parseInt(x10)
}
    else
      {
        x10 = 0;
      }
if(x11 != ""){
  x11 = parseInt(x11)
}
    else
      {
        x11 = 0;
      }
if(x12 != ""){
  x12 = parseInt(x12)
}
    else
      {
        x12 = 0;
      }
if(x13 != ""){
  x13 = parseInt(x13)
}
    else
      {
        x13 = 0;
      }
if(x14 != ""){
  x14 = parseInt(x14)
}
    else
      {
        x14 = 0;
      }
if(x15 != ""){
  x15 = parseInt(x15)
}
    else
      {
        x15 = 0;
      }
if(x16 != ""){
  x16 = parseInt(x16)
}
    else
      {
        x16 = 0;
      }
if(x17 != ""){
  x17 = parseInt(x17)
}
    else
      {
        x17 = 0;
      }           
    
    total_amount = x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9 + x10 + x11 + x12 + x13 + x14 + x15 + x16 + x17;
   document.getElementById("total_price").value = total_amount;
   document.getElementById("total_receipt").innerHTML = "total : $";
   document.getElementById("total_receipt").innerHTML += total_amount;

  };


var remove1 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price1").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price1").value = 0;
$("#orders1").fadeOut(1000);
};



var remove2 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price2").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price2").value = 0;
$("#orders2").fadeOut(1000);
};



var remove3 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price3").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price3").value = 0;
$("#orders3").fadeOut(1000);
};




var remove4 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price4").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price4").value = 0;
$("#orders4").fadeOut(1000);
};




var remove5 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price5").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price5").value = 0;
$("#orders5").fadeOut(1000);
};



var remove6 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price6").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price6").value = 0;
$("#orders6").fadeOut(1000);
};



var remove7 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price7").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price7").value = 0;
$("#orders7").fadeOut(1000);
};



var remove8 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price8").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price8").value = 0;
$("#orders8").fadeOut(1000);
};

var remove9 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price9").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price9").value = 0;
$("#orders9").fadeOut(1000);
};


var remove10 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price10").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price10").value = 0;
$("#orders10").fadeOut(1000);
};



var remove11 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price11").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price11").value = 0;
$("#orders11").fadeOut(1000);
};



var remove12 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price12").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price12").value = 0;
$("#orders12").fadeOut(1000);
};

var remove13 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price13").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price13").value = 0;
$("#orders13").fadeOut(1000);
};

var remove14 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price14").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price14").value = 0;
$("#orders14").fadeOut(1000);
};


var remove15 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price15").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price15").value = 0;
$("#orders15").fadeOut(1000);
};


var remove16 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price16").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price16").value = 0;
$("#orders16").fadeOut(1000);
};


var remove17 = function(){
var total_amount = document.getElementById("total_price").value;
var price = document.getElementById("price17").value;

var total_changes = total_amount - price;

document.getElementById("total_price").value = total_changes;
document.getElementById("price17").value = 0;
$("#orders17").fadeOut(1000);
};





var o1 = function(){
var price = document.getElementById("price1").value;
var quantity = document.getElementById("quantity1").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp; lobster on plate ------ $52.00<br>";
}
};

var o2 = function(){
var price = document.getElementById("price2").value;
var quantity = document.getElementById("quantity2").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp;&nbsp; crispy chicken ------ $21.00<br>";
}
};


var o3 = function(){
var price = document.getElementById("price3").value;
var quantity = document.getElementById("quantity3").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; chili crab ------ $45.00<br>";
}
};


var o4 = function(){
var price = document.getElementById("price4").value;
var quantity = document.getElementById("quantity4").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp;&nbsp; grilled chicken ------ $25.00<br>";
}
};


var o5 = function(){
var price = document.getElementById("price5").value;
var quantity = document.getElementById("quantity5").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; tofu on stick ------ $12.00<br>";
}
};


var o6 = function(){
var price = document.getElementById("price6").value;
var quantity = document.getElementById("quantity6").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; squid ------ $31.00<br>";
}
};


var o7 = function(){
var price = document.getElementById("price7").value;
var quantity = document.getElementById("quantity7").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; coke ------ $3.00<br>";
}
};


var o8 = function(){
var price = document.getElementById("price8").value;
var quantity = document.getElementById("quantity8").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; strawberry juice ------ $8.00<br>";
}
};

var o9 = function(){
var price = document.getElementById("price9").value;
var quantity = document.getElementById("quantity9").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; apple juice ------ $7.00<br>";
}
};

var o10 = function(){
var price = document.getElementById("price10").value;
var quantity = document.getElementById("quantity10").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; pineapple juice ------ $7.00<br>";
}
};

var o11 = function(){
var price = document.getElementById("price11").value;
var quantity = document.getElementById("quantity11").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; milk tea ------ $6.00<br>";
}
};



var o12 = function(){
var price = document.getElementById("price12").value;
var quantity = document.getElementById("quantity12").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp; strawberry cake ------ $20.00<br>";
}
};

var o13 = function(){
var price = document.getElementById("price13").value;
var quantity = document.getElementById("quantity13").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp; leche flan ------ $18.00<br>";
}
};

var o14 = function(){
var price = document.getElementById("price14").value;
var quantity = document.getElementById("quantity14").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp; buko pandan ------ $15.00<br>";
}
};


var o15 = function(){
var price = document.getElementById("price15").value;
var quantity = document.getElementById("quantity15").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp; chocolate cake ------ $15.00<br>";
}
};


var o16 = function(){
var price = document.getElementById("price16").value;
var quantity = document.getElementById("quantity16").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp; blueberry cheesecake ------ $21.00<br>";
}
};


var o17 = function(){
var price = document.getElementById("price17").value;
var quantity = document.getElementById("quantity17").value;
if(price != 0)
{
document.getElementById("or1").innerHTML += quantity + "x &nbsp;&nbsp;&nbsp; caramel cheesecake ------ $21.00<br>";
}
};




var change;
var amount = 0;
var paycash = function(){

amount = prompt("How much the costumer pay?");

if(amount != ""){
if(amount != null)
{

var total_amount = document.getElementById("total_price").value;
change = amount - total_amount;
if(change >= 0){


$("#official_receipt").show();

document.getElementById("change_receipt").innerHTML += change;
document.getElementById("payment_receipt").innerHTML += amount;
resibo();
}
else
{
alert("not enough money");
}
}
}
else{
alert("The costumer need to pay for his or her order.");
}

};




var resibo = function(){
$(".page2").hide();
$("#cash_payments").show();
o1();
o2();
o3();
o4();
o5();
o6();
o7();
o8();
o9();
o10();
o11();
o12();
o13();
o14();
o15();
o16();
o17();
};






var id;
var debit_money = 0;

var paydebit = function(){

id = prompt("Enter debit card ID number");

var debit_card = [
{
"id": "09122265227",
"name": "dine",
"money": 1000
},
{
"id": "09488983641",
"name": "pj",
"money": 2000
}
];



if(id != ""){
if(id != null)
{

if(id === debit_card[0].id){
debit_money = debit_card[0].money;


$("#official_receipt").show();

var totals = document.getElementById("total_price").value;
var changes = debit_money - totals;
document.getElementById("change_receipt").innerHTML = "change: $" + changes ;
document.getElementById("payment_receipt").innerHTML = "debit card money: $" + debit_money;
resibo();
}

else if(id === debit_card[1].id){
debit_money = debit_card[1].money;


$("#official_receipt").show();

var totals = document.getElementById("total_price").value;
var changes = debit_money - totals;
document.getElementById("change_receipt").innerHTML = "change: $" + changes ;
document.getElementById("payment_receipt").innerHTML = "debit card money: $" + debit_money;
resibo();
}


else
{
alert("Sorry, your ID is not valid!");
}



}

else
{
$("#page2").show();
$("#official_receipt").hide();
}

}


};




function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}




var news = function(){
debit_money = 0;
id= "";
total_amount = 0;
$(".page2").show();
$("#official_receipt").hide();
remove1();
remove2();
remove3();
remove4();
remove5();
remove6();
remove7();
remove8();
remove9();
remove10();
remove11();
remove12();
remove13();
remove14();
remove15();
remove16();
remove17();
document.getElementById("or1").innerHTML = "";
document.getElementById("total_receipt").innerHTML = "total : $";
document.getElementById("payment_receipt").innerHTML = "payment : $";
document.getElementById("change_receipt").innerHTML = "change : $";

}



var beverages = function(){
$("#food_main,#desserts").hide();
$("#beverages").show();
$("#news a").addClass("active");
$("#home a,#contacts a").removeClass();
}
var mainfood = function(){
$("#food_main").show();
$("#beverages,#desserts").hide();
$("#home a").addClass("active");
$("#news a,#contacts a").removeClass();
}
var dessert = function(){
$("#desserts").show();
$("#beverages,#food_main").hide();
$("#contacts a").addClass("active");
$("#news a,#home a").removeClass();
}


