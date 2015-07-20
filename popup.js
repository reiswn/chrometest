var labelsRodadas = [];
var arrPontuacao = [];
var esquemas = ["3-4-3","3-5-2","4-3-3","4-4-2","4-5-1","5-3-2","5-4-1"]
var datasetValue = [];


function iterate_jason(rodada, time){
  
  var xhr = new XMLHttpRequest();
  
  xhr.open("GET", "http://cartolafc.globo.com/time/"+time+"/atletas.json?rodada_id="+rodada, false);
  xhr.onreadystatechange = function() {

    if (xhr.readyState == 4) {
      var resp = JSON.parse(xhr.responseText);
     
      //var pElement = document.createElement("tr");  

      //var td = pElement.appendChild(document.createElement("td"));
      //td.innerHTML = resp.time.rodada;
      
      //var td = pElement.appendChild(document.createElement("td"));
      //td.innerHTML = resp.time.pontuacao;
      arrPontuacao[rodada-1] = resp.time.pontuacao;
            
      //var td = pElement.appendChild(document.createElement("td"));
      //td.innerHTML = resp.time.patrimonio;
      
      //var td = pElement.appendChild(document.createElement("td"));
      //td.innerHTML = esquemas[resp.time.esquema-1];

      //document.getElementById("demo").appendChild(pElement);
      document.getElementById("ultimaRodada").value = resp.time.rodada;
    }
  }
  xhr.send();

}

document.getElementById("pesquisar").addEventListener('click', function() {


    for(var i = 1; i<14; i++){
      //iterate_jason(i, document.getElementById("time").value);
      iterate_jason(i, "se-shitara");
      labelsRodadas[i-1] = i;
    }

    datasetValue[0] = 
      {
				label: "Dataset se-shitara",
				fillColor : "rgba(151,187,205,0.2)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(151,187,205,1)",
				data : arrPontuacao
			}
      
    arrPontuacao = [];
    for(var i = 1; i<14; i++){
      iterate_jason(i, "moonra-fc");
    }
    
    datasetValue[1] = 
      {
				label: "Dataset moonra-fc",
				fillColor : "rgba(130,220,130,0.2)",
				strokeColor : "rgba(130,220,130,1)",
				pointColor : "rgba(130,220,130,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(130,220,130,1)",
				data : arrPontuacao
			}

      arrPontuacao = [];
    for(var i = 1; i<14; i++){
      iterate_jason(i, "acerri-fc");
    }
    
    datasetValue[2] = 
      {
				label: "Dataset acerri",
				fillColor : "rgba(220,220,220,0.2)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : arrPontuacao
			}
    
    var lineChartData = {
			labels : labelsRodadas,
			datasets : datasetValue
    }
    
    var ctx = document.getElementById("grafico").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true
		});
    
    //alert("Datasets: "+lineChartData.datasets[1].data);

});

				//{
					//label: "My First dataset",
					//fillColor : "rgba(220,220,220,0.2)",
					//strokeColor : "rgba(220,220,220,1)",
					//pointColor : "rgba(220,220,220,1)",
					//pointStrokeColor : "#fff",
					//pointHighlightFill : "#fff",
					//pointHighlightStroke : "rgba(220,220,220,1)",
//					data : arrPontuacao
				//},
