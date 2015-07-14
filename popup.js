var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.cartola.globo.com/time_adversario/se-shitara.json", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // JSON.parse does not evaluate the attacker's scripts.
    var resp = JSON.parse(xhr.responseText);
    document.getElementById("demo").innerHTML =
      resp.atletas[0].apelido + "<br>" +
      resp.atletas[1].apelido + "<br>" +
      resp.time.nome;
  }
}
xhr.send();

