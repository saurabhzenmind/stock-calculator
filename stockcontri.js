function contribution(){
  var tot_inv,stock_value,contri;
tot_inv=parseFloat(document.getElementById("first").value);
stock_value=parseFloat(document.getElementById("second").value);
contri=(stock_value*100)/tot_inv;
document.getElementById("answer").value=contri;
}