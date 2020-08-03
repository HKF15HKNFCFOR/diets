

function result() {
  let mas = document.getElementById("mass").value;
   let length = document.getElementById("height").value;
  let aget = document.getElementById("age").value;
  let n_pol = document.getElementById("pol").options.selectedIndex;
  let n_act = document.getElementById("active").options.selectedIndex;
if (aget.match(/^[-\+]?\d+/) == null ||mas.match(/^[-\+]?\d+/) == null || length.match(/^[-\+]?\d+/) == null || age == 0 || mas == 0|| length ==0 || n_pol ==0 || n_act==0){alert('Проверьте корректность ввода данных!');}else{
document.getElementById("rezbl").hidden = false;
  let rezmath=(mas/Math.pow(length*0.01,2)).toFixed(2);
let out=0;
  let pol_val=document.getElementById("pol").options[n_pol].value;
 let k=document.getElementById("active").options[n_act].value;
  if(n_pol ==1){
out=k*(10*mas+6.25*length-5*aget +pol_val);
  }else{
    out=k*(10*mas+6.25*length-5*aget -pol_val);
  }
  document.getElementById("textrut").textContent=out.toFixed(0);
}
}