var labelsRodadas = [];
var arrPontuacao = [];

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
      arrPontuacao[rodada-1] = resp.time.pontuacao;
      
      var td = pElement.appendChild(document.createElement("td"));
      td.innerHTML = resp.time.patrimonio;

      document.getElementById("demo").appendChild(pElement);
      document.getElementById("ultimaRodada").value = resp.time.rodada;
    }
  }
  xhr.send();

}

document.getElementById("pesquisar").addEventListener('click', function() {


    for(var i = 1; i<14; i++){
      iterate_jason(i, document.getElementById("time").value);
      labelsRodadas[i-1] = i;
    }
    
    var ctx = document.getElementById("grafico").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true
		});

});

    var lineChartData = {
			labels : labelsRodadas,
			datasets : [
				//{
					//label: "My First dataset",
					//fillColor : "rgba(220,220,220,0.2)",
					//strokeColor : "rgba(220,220,220,1)",
					//pointColor : "rgba(220,220,220,1)",
					//pointStrokeColor : "#fff",
					//pointHighlightFill : "#fff",
					//pointHighlightStroke : "rgba(220,220,220,1)",
//					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				//},
				{
					label: "My Second dataset",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : arrPontuacao
				}
			]

		}