//Ator
let xAtor = 280;
let yAtor = 366;
let colisão = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 28, 28 );
}

function controleAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
     if (podeSeMover()){
         yAtor += 3;
     }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
     colisão = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisão){
        voltaAtor()
          colidiu.play()
        if (pontosMaiorQueZero())
          meusPontos--
    }
  }
}

function voltaAtor() {
  yAtor = 366
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25)
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 28)
}

function marcaPontos(){
    if (yAtor < 15){
      pontos.play()
      meusPontos++;
      voltaAtor()
    }
}

function pontosMaiorQueZero() {
   return meusPontos > 0
}

function podeSeMover(){
    return yAtor < 366;
}