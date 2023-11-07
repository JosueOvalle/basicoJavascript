console.log("Piedra, Papel o Tijera");

var piedra = 1;
var papel = 2;
var tijera = 3;
var cpu = cpuValue();

function cpuValue() {
  var cpu = Math.random();

  if (cpu <= 0.3) {
    cpu = 1;
    console.log("CPU eligio: Piedra");
  } else if (cpu >= 0.7) {
    cpu = 2;
    console.log("CPU eligio: Papel");
  } else {
    cpu = 3;
    console.log("CPU eligio: Tijera");
  }

  return cpu
};

function game(player, cpu) {
  if (player === 1 && cpu === 3 || player === 2 && cpu === 1 || player === 3 && cpu === 2) {
    console.log("JUGADOR GANA!");
  } else if (player === cpu) {
    console.log("EMPATE!");
  } else {
    console.log("CPU GANA!");
  }
};

game(piedra, cpu);
game(papel, cpu);
game(tijera, cpu);