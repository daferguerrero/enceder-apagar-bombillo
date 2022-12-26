const $cambiarFoco = document.getElementById("cambiarFoco")
const $cambiarSwitch = document.getElementById("cambiarSwitch")
const $switch = document.querySelector(".switch")

function cambiarImagen(){
  if ($cambiarFoco.src.match("./img/apagado-1.png") && $cambiarSwitch.src.match("./img/on-or.png")){
    $cambiarFoco.src = "./img/encendido-1.png";
    $cambiarSwitch.src = "./img/off-or.png";
  }else{
    $cambiarFoco.src = "./img/apagado-1.png";
    $cambiarSwitch.src = "./img/on-or.png";
  }
}

$switch.addEventListener("click", cambiarImagen)