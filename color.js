let body = document.body;
let div = document.createElement("div");
div.style.height = "80vh";
div.style.width = "50vw";
div.style.backgroundColor = "skyblue";
div.style.backgroundSize = "cover";
div.style.margin = "auto";
body.appendChild(div);

let h1 = document.createElement("h1");
h1.textContent = "Color Picker";
h1.style.fontSize = "60px";
h1.style.color = "black";
h1.style.textAlign = "center";
h1.style.paddingTop = "200px";
div.appendChild(h1);

let button = document.getElementById("to");
to.style.backgroundColor = "red";
to.style.height = "100px";
to.style.width = "100px";
to.style.marginLeft = "20px";
to.style.borderRadius = "20px";
to.style.borderColor = "black";
to.style.borderWidth = "5px";
to.style.fontSize = "20px";
to.style.fontFamily = "sansSerif";
to.style.fontWeight = "bold"; 
// to. style.borderWidth = "0px";
div.appendChild(button);

let button2 = document.getElementById("no");
no.style.backgroundColor = "green";
no.style.height = "100px";
no.style.height = "100px";
no.style.width = "100px";
no.style.marginLeft = "8px";
no.style.borderRadius = "20px";
no.style.borderColor = "black";
no.style.borderWidth = "5px";
no.style.fontSize = "20px";
no.style.fontFamily = "sansSerif";
no.style.fontWeight = "bold"; 
div.appendChild(button2);

let button3 = document.getElementById("so");
so.style.backgroundColor = "yellow";
so.style.height = "100px";
so.style.width = "100px";
so.style.marginLeft = "8px";
so.style.borderRadius = "20px";
so.style.borderColor = "black";
so.style.borderWidth = "5px";
so.style.fontSize = "20px";
so.style.fontFamily = "sansSerif";
so.style.fontWeight = "bold"; 
div.appendChild(button3);

let button4 = document.getElementById("on");
on.style.backgroundColor = "#56ccf2";
on.style.height = "100px";
on.style.width = "100px";
on.style.margin = "8px";
on.style.borderRadius = "20px";
on.style.borderColor = "black";
on.style.borderWidth = "5px";
on.style.fontSize = "20px";
on.style.fontFamily = "sansSerif";
on.style.fontWeight = "bold"; 
div.appendChild(button4);

let div2 = document.createElement("div");
div2.style.backgroundColor = "black";
div2.textContent = "Background Color";
div2.style.height = "70px";
div2.style.marginTop = "20px";
div2.style.color = "white";
div.appendChild(div2);

function changeColor() {
    div.style.backgroundColor = "Red";
    div.style.backgroundSize = "cover";
}

function Changecolor() {
    div.style.backgroundColor = "green";
    div.style.backgroundSize = "cover";
}

function ChangeColor() {
    div.style.backgroundColor = "yellow";
    div.style.backgroundSize = "cover";
}

function changecolor() {
    div.style.backgroundColor = "#56ccf2";
    div.style.backgroundSize = "cover";
}
