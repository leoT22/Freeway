//código do carro

let xCarros = [650, 650, 650, 650, 650, 650];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeDosCarros = [1.9, 1.6, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i],  comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeDosCarros[i];
  }
}

function voltaPosiçãoInicialCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarros){
    return xCarros < -50;
}