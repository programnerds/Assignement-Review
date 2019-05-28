function changePara1()
{
    document.getElementById("para1").innerHTML="New Text!";
}
function changeOriginal() {
    document.getElementById("para1").innerHTML="Original Text";
}

function insertCurrentDate()
{
    document.getElementById("datePara").innerHTML=Date();
}

function onMouseOver (elementToChange) {
    elementToChange.style.color = "chocolate";
    elementToChange.style.fontFamily = "Copperplate";
}
function onMouseLeave (elementToChange) {
    elementToChange.style.color = "";
    elementToChange.style.fontFamily ="";
}





