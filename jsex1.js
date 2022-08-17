
let HT=new Date();
document.getElementById('HT').innerHTML='LA DATE EST : '+HT.toLocaleDateString();
var yy=new Date();
document.getElementById('yy').innerHTML='year: '+yy.getFullYear();

//fonction start 
function validation(){
    //variable utiliser
    nom = document.getElementById("fname").value;
    prenom = document.getElementById("lname").value;
    dateN = document.getElementById("daten").value;
    code = document.getElementById("code").value;
    pays = document.getElementById("pays").value;
    tele = document.getElementById("teleph").value;
    email = document.getElementById("email").value;
    passw = document.getElementById("passw").value;
    verif = document.getElementById("passwv").value;
    pays = document.getElementById("pays").value
     //check box 
    pdc = document.querySelector('input[name ="pcn"]:checked');
    gndr = document.querySelector('input[name ="sex"]:checked');
    // email
    var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
    testemail = regEmail.test(email);
    //var erreur
    ernm = document.getElementById("ernm");
    erpm = document.getElementById("erpm");
    erdn = document.getElementById("erdn");
    erTn = document.getElementById("erTn");
    erpw = document.getElementById("erpw");
    ervf= document.getElementById("ervf");
    erel = document.getElementById("erel");
    ercd = document.getElementById("ercd");
    erpdc = document.getElementById("erpdc");
    ergnd = document.getElementById("ergnd")
    erpay = document.getElementById("erpay");
    //nom 
    if( nom.length <= 2 || nom == ""){
        ernm.innerText = "enter your name!";
    }else{
        ernm.innerText = "";
    }
    //prenom
    if( prenom.length <= 2 || prenom == ""){
        erpm.innerText = "enter your last name!";
    }else{
        erpm.innerText = "";
    }
    //date de naissance
    var x = new Date().getFullYear() - new Date(dateN).getFullYear();
    if(dateN == ""){
        erdn.innerText = "enter birth date!";
    }else
        if(x < 18 ){
        erdn.innerText ="not old enough!";
    }else{
    erdn.innerText ="";
     }
    //code postal
    if(code == ""){
        ercd.innerText = "enter the zipcode!";
    }else
      if(code.length > 5){
      ercd.innerText =  "enter 5 characters!";
    }else{
        ercd.innerText = "";
    }
    //phonenum
    if(tele == ""){
        erTn.innerText = "enter phone number!";
    }else
    if(tele.length >10 || tele.length < 10 ){
        erTn.innerText = "enter 10 character";
    }else{
        erTn.innerText = "";
    }
    //password
    if(passw == ""){
        erpw.innerText = "enter the password!";
    }else
    if(passw.length > 12 || passw.length < 12 ){
        erpw.innerText = "enter 12 character !";
    }else{
        erpw.innerText = "";
    }
    //password verification 
    if(verif == ""){
        ervf.innerText = "enter the verification code!";
    }else 
    if(verif != passw || verif.length != passw.length){
        ervf.innerText = "use the same characters as the password!";
    }else{
        ervf.innerText = "";
    }

    //email
    if(email == ""){
        erel.innerText = "enter an email!";
    }else
    if(!testemail){
      erel.innerText="Email invalide";
     }else{
        erel.innerText = "";
     }

    //check Box
    if(pdc == null){
        erpdc.innerText = "choose contact preference";
    }else{
    erpdc.innerText = "";
    }
    //gender box
    if(gndr == null){
        ergnd.innerText = "choose a gender";
    }else{
        ergnd.innerText = "";
    }
    //pays
    if(pays == ""){
        erpay.innerText = "choose a country";
    }else{
        erpay.innerText = "";
 
}

}
