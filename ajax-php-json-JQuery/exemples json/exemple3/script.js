var url = "http://localhost:1616/tpTechWeb/ajax-php-json-JQuery/exemples%20json/exemple3/afficher.php";


function refresh(){
    var xmlHTTPRequest = new XMLHttpRequest();
    xmlHTTPRequest.open("GET",url,true);
    xmlHTTPRequest.send();
    xmlHTTPRequest.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            var obj = JSON.parse(this.responseText);
            var arr=obj.etudiants;
            var i;
            var out = "<table>";
            for(i = 0; i < arr.length; i++) {
                out += "<tr><td>" +
                arr[i].cin +
                "</td><td>" +
                arr[i].nom +
                "</td><td>" +
                arr[i].prenom +
                "</td><td>" +
                arr[i].email +
                "</td><td>" +
                arr[i].adresse +
                "</td><td>" +
                arr[i].classe +
                "</td></tr>";
            }
            out += "</table>";
            document.getElementById("demo").innerHTML = out;
        }
    };
}