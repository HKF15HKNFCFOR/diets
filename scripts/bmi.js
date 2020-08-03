

function result() {
  let mas = document.getElementById("mass").value;
   let length = document.getElementById("height").value;
if (mas.match(/^[-\+]?\d+/) == null || length.match(/^[-\+]?\d+/) == null || mas == 0|| length ==0){alert('Проверьте корректность ввода данных!');}else{
document.getElementById("rezbl").hidden = false;
  let rezmath=(mas/Math.pow(length*0.01,2)).toFixed(2);
let reztext="Ошибка!";
  document.getElementById("textrut").textContent=rezmath;
if(rezmath<=16){
  document.getElementsByClassName('win')[0].style.backgroundColor = '#e24a43';
  reztext="У Вас выраженный дефицит массы тела!";
}else if(rezmath>16 && rezmath <18.5){
  document.getElementsByClassName('win')[0].style.backgroundColor = '#ffac37';
reztext="У Вас недостаточная масса тела";
}else if(rezmath>=18.5 && rezmath <25){
  document.getElementsByClassName('win')[0].style.backgroundColor = '#005d27';
reztext="Ваш вес в норме";
}else if(rezmath>=25 && rezmath <30){
   document.getElementsByClassName('win')[0].style.backgroundColor = '#ffac37';
reztext="У Вас избыточная масса тела";
}else if(rezmath>=30 && rezmath <35){
   document.getElementsByClassName('win')[0].style.backgroundColor = '#ff7937';
reztext="У Вас ожирение 1 степени";
}else if(rezmath>=35 && rezmath <40){
   document.getElementsByClassName('win')[0].style.backgroundColor = '#ff6137';
reztext="У Вас ожирение 2 степени";
}else if(rezmath>=40){
document.getElementsByClassName('win')[0].style.backgroundColor = '#e24a43';
reztext="У Вас ожирение 3 степени!";
}
document.getElementById("textbig").textContent=reztext;
}
}