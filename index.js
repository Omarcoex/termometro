let resultado=document.getElementById("calculo");
resultado.addEventListener("click",convertir);

function convertir() {
  let f = document.getElementById("temp").value;
  let c = ((f - 32) * 5 / 9).toFixed(1);
  document.getElementById("calcular").innerHTML = `<h2>${c}</h2>`;
  document.getElementById("spin").style.height=c+'px'
}


function reiniciarContenido() {
  document.getElementById("calculo").value=""
  document.getElementById("temp").value=""
  document.getElementById("calcular").innerHTML=``
  document.getElementById("spin").style.height=0
}
let reinicio = document.getElementById("reiniciar")
reinicio.addEventListener("click",reiniciarContenido)