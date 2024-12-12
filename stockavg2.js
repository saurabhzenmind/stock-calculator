function getAverage(){
    var unit1 = document.getElementById("units1").value;
       var price1 = document.getElementById("Price1").value;
       var unit2 = document.getElementById("units2").value;
       var price2 = document.getElementById("Price2").value;
 
       var res1 = (unit1 * price1) + (unit2 * price2);
       var res2 = +unit1 + +unit2;
       var result = res1 / res2;
       var totres=result.toFixed(2);
       var currinv=unit1*price1;
       var newinv=unit2*price2;
       var totinv= currinv+newinv;
       var netchng1=((price2-price1)/price1)*100;
       var roundchng1=netchng1.toFixed(2);
       var netchng2=((price2-result)/result)*100;
       var roundchng2=netchng2.toFixed(2);
       document.getElementById("result").innerHTML="Total units:&nbsp;<bold>"+ res2 +
       "</bold></br></br>Current Investment:&nbsp<bold>"+currinv+"rs"+
       "</bold></br></br>New Investment:&nbsp;<bold>"+newinv+"rs"+
       "</bold></br></br>Total Investment:&nbsp;<bold>" +totinv+"rs"+
       "</bold></br></br>Average Price:&nbsp;<bold>"+ totres +"rs"+
       "</bold></br></br>Net Change:&nbsp;<bold>"+roundchng1+"%"+
       "</bold></br></br>New Net Change Will Be:&nbsp;<bold>"+roundchng2+"%"+"</bold>";
 
 }
