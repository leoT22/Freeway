function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  controleAtor();   
  voltaPosiçãoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}


