<?php
try{
  $bd = new PDO('mysql:host=localhost;dbname=gestion_etudiant;charset=utf8','root','');
}
catch(Exception $err){
  die("erreur: ".$err->getMessage());
}
$req = "SELECT * FROM etudiant";
$output = $bd->query($req);
if($output->rowCount()>0){
  $outputs["etudiants"]=array();
  while ($row = $output ->fetch(PDO::FETCH_ASSOC)) {
    $etudiant = array();
    $etudiant["cin"] = $row["cin"];
    $etudiant["nom"] = $row["nom"];
    $etudiant["prenom"] = $row["prenom"];
    $etudiant["adresse"] = $row["adresse"];
    $etudiant["email"] = $row["email"];
    $etudiant["classe"] = $row["classe"];
    array_push($outputs["etudiants"], $etudiant);
  }
// success
$outputs["success"] = 1;
echo json_encode($outputs);
} 
else {
$outputs["success"] = 0;
$outputs["message"] = "Pas d'étudiants";
// echo no users JSON

echo json_encode($outputs);
}
?>