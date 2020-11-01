var jsonContent = '{"etudiants":['+
    '{"nom":"X","prenom":"Y"},'+
    '{"nom":"XX","prenom":"YY"},'+
    '{"nom":"XXX","prenom":"YYY"}]}';

var clickEvent = ()=>{
    var obj = JSON.parse(jsonContent);
    var table = document.getElementById("table");
    obj.etudiants.forEach(element => {
    table.innerHTML += "<tr><td>"+element.nom+"</td><td>"+element.prenom+"</td></tr>";
}); 
};

window.onload = ()=>{ 
    var btn = document.getElementById("btn");
    btn.addEventListener('click',clickEvent);
};