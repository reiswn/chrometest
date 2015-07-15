function iterate_jason(rodada, time){
  
  var xhr = new XMLHttpRequest();
  
  xhr.open("GET", "http://cartolafc.globo.com/time/"+time+"/atletas.json?rodada_id="+rodada, false);
  xhr.onreadystatechange = function() {

    if (xhr.readyState == 4) {
      var resp = JSON.parse(xhr.responseText);
     
      var pElement = document.createElement("tr");  

      var td = pElement.appendChild(document.createElement("td"));
      td.innerHTML = resp.time.rodada;
      
      var td = pElement.appendChild(document.createElement("td"));
      td.innerHTML = resp.time.pontuacao;
      
      var td = pElement.appendChild(document.createElement("td"));
      td.innerHTML = resp.time.patrimonio;

      document.getElementById("demo").appendChild(pElement);
      document.getElementById("ultimaRodada").value = resp.time.rodada;
    }
  }
  xhr.send();

}

document.getElementById("pesquisar").addEventListener('click', function() {

    var largura = 200; var altura = 300;
    var canvas = document.getElementById("grafico");
    var ctx = canvas.getContext("2d");
    var x = 0;

    canvas.setAttribute("width", largura);
    canvas.setAttribute("height", altura);

    ctx.fillStyle = "lime"; 
    ctx.fillRect(0, 0, largura, altura); 
    ctx.font = "30px Courier";

    for(var i = 1; i<14; i++){
      iterate_jason(i, document.getElementById("time").value);

    //define o avanço horizontal 
    x+=10; 
    //desenha uma linha até a posição gerada 
    ctx.lineTo(x, altura-i); 
    ctx.stroke(); 
    //desenha um retangulo onde está sendo escrito o valor do gráfico 
    ctx.fillStyle = "lime"; 
    ctx.fillRect(0, 0, largura, 30); 
    //desenha o texto indicando o valor do gráfico, na posição x atual 
    ctx.fillStyle = "red"; 
    ctx.fillText(i, x, 30);

    }

});
