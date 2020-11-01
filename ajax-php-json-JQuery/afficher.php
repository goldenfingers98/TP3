<?php
try {
  $bdd = new PDO('mysql:host=localhost;dbname=gestion_etudiant;charset=utf8','root','');
} catch (Exception $e) {
  die('Erreur : '.$e->getMessage());
}
$req = "SELECT * FROM etudiant";
$response = $bdd->query($req);
if($response->rowCount()>0){
  $out = "<table>";
  while($row = $response->fetch(PDO::FETCH_ASSOC)){ //FETCH_ASSOC : Récupère une ligne de résultat sous forme de tableau associatif
    $out .= "<tr><td>".$row['cin']."</td><td>".$row['nom']."</td><td>".$row['prenom']."</td><td>".$row['email']."</td><td>".$row['classe']."</td></tr>";
  }
  $out .= "</table>";
  echo $out;
}
else
  echo "table vide";
 ?>
