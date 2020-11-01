<?php
$cin = $_REQUEST['cin'];
$nom = $_REQUEST['nom'];
$prenom = $_REQUEST['prenom'];
$email = $_REQUEST['email'];
$adresse = $_REQUEST['adresse'];
$pwd = $_REQUEST['pwd'];
$classe = $_REQUEST['classe'];
try {
  $bd = new PDO('mysql:host=localhost;dbname=gestion_etudiant;charset=utf8','root','');
} catch (Exception $e) {
  die('Erreur :'.$e->getMessage());
}
$req = "INSERT INTO etudiant(cin,email,password,nom,prenom,adresse,classe) VALUES('$cin','$email','$pwd','$nom','$prenom','$adresse','$classe')";
$reponse = $bd->exec($req) or die('error');
if($reponse) echo "OK";
else echo "Not OK";
 ?>
