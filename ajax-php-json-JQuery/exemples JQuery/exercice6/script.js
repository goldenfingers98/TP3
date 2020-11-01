
  $(document).ready(function(){
      $("#btn").click(function(){
        $.getJSON("http://localhost:1616/tpTechWeb/ajax-php-json-JQuery/exemples%20json/exemple3/afficher.php")
        .done(function(data, status){
          console.log(data);
          myFunction(data);
        });
      });
    });
  
      function myFunction(response) {
        var arr = response.etudiants;
        var i;
        var out = "<table>";
        for (i = 0; i < arr.length; i++) {
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