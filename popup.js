function iterate_jason(rodada){
  
  var xhr = new XMLHttpRequest();
  
  xhr.open("GET", "http://cartolafc.globo.com/time/moonra-fc/atletas.json?rodada_id="+rodada, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // JSON.parse does not evaluate the attacker's scripts.
      var resp = JSON.parse(xhr.responseText);
      
      var pElement = document.createElement("tr");  

      var td = pElement.appendChild(document.createElement("td"));
      td.innerHTML = resp.time.rodada;
      
      var td = pElement.appendChild(document.createElement("td"));
      td.innerHTML = resp.time.pontuacao;
      
      var td = pElement.appendChild(document.createElement("td"));
      td.innerHTML = resp.time.patrimonio;

      document.getElementById("demo").appendChild(pElement);

    }
  }
  xhr.send();

}

for(var i = 1; i<14; i++){
  iterate_jason(i);
}