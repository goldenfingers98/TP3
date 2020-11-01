function refresh() {
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:1616/tpTechWeb/afficher.php";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
      document.getElementById("demo").innerHTML = this.responseText;
      alert(this.responseText);
    }
  }
  xmlhttp.open("GET",url,true);
  xmlhttp.send();
}

/*_____________________________________________________________________________________________________________*/

function ajouter(){
  var xmlhttp = new XMLHttpRequest();
  cin = document.getElementById("cin").value;
  nom = document.getElementById("nom").value;
  prenom = document.getElementById("prenom").value;
  pwd = document.getElementById("pwd").value;
  adresse = document.getElementById("adresse").value;
  classe = document.getElementById("classe").value;
  email = document.getElementById("email").value;
  var url = "http://localhost:1616/tpTechWeb/ajouter.php";
 
  //listener
  xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      par = document.getElementById("demo");
      if(this.responseText == "OK"){
        par.innerHTML = "Etudiant est bien ajouté";
        par.style.backgroundColor = "green";
      }
      else{
        par.innerHTML = "Etudiant est déjà inscrit, verifiez le CIN";
        par.style.backgroundColor = "#fba";
      }
    }
  }

  xmlhttp.open("POST",url,true);
  xmlhttp.send("?cin="+cin+"&nom="+nom+"&prenom="+prenom+"&email="+email+"&pwd="+pwd+"&adresse="+adresse+"&classe="+classe);
}
