const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
   let dateToday = new Date();
   let hr = dateToday.getHours();
   let min = dateToday.getMinutes();
   let seg = dateToday.getSeconds();

   horas.textContent = hr.toString().padStart(2, '0');
   minutos.textContent = min.toString().padStart(2, '0');
   segundos.textContent = seg.toString().padStart(2, '0');

})