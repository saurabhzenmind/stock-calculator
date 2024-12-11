function getAverage(){
  var unit1 = document.getElementById("units1").value;
     var price1 = document.getElementById("Price1").value;
     var unit2 = document.getElementById("units2").value;
     var price2 = document.getElementById("Price2").value;

     var res1 = (unit1 * price1) + (unit2 * price2);
     var res2 = +unit1 + +unit2;
     var result = res1 / res2;
     var totcost = price1*price2;
     var currinv=unit1*price1;
     var newinv=unit2*price2;
     var netchng1=((price2-price1)/price1)*100;
     var netchng2=((price2-result)/result)*100;
     document.getElementById("result").innerHTML = "Total units:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <bold>"
     + res2 + "</bold><br/><br/>Average Price: &nbsp;&nbsp;&nbsp;<bold>" + result + "</bold></bold></br></br>Total Cost:&nbsp;<bold>" +totcost+"</bold>";
 

}