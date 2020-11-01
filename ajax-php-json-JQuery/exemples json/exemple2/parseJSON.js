var xmlHTTPRequest = new XMLHttpRequest();
var url = "http://localhost:1616/tpTechWeb/ajax-php-json-JQuery/exemples%20json/exemple2/listeEtudiants.json";
xmlHTTPRequest.open("GET",url,true);
xmlHTTPRequest.send();

xmlHTTPRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var jsonContent = JSON.parse(this.responseText);
        var table = document.getElementById("table");
        jsonContent.forEach(element => {
            table.innerHTML += "<tr><td>"+element.nom+"</td><td>"+element.prenom+"</td></tr>";
        });
    }
};