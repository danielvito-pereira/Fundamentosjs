

function CalculeMedia() {
    let n1= document.getElementById("txtN1").value
    let n2= document.getElementById("txtN2").value
    let n3= document.getElementById("txtN3").value
    let n4= document.getElementById("txtN4").value
    media = (n1 + n2 + n3+ n4) / 4;
    return document.write("A sua media final é : " + media);
   
}
