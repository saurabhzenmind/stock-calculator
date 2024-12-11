function parcentchange(){
    var first_value,second_value,percent_chng;
 first_value=parseFloat(document.getElementById("first").value);
 second_value=parseFloat(document.getElementById("second").value);
 percent_chng=((first_value-second_value)/second_value)*100;
 document.getElementById("answer").value=percent_chng;
 }