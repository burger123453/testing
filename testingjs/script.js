'use strict';

console.log('Hello world');

alert("click the buttons... (mysterious noises)");
let e = "";
function dosumin() {
    if (e === "f" || e === "") {
        document.getElementById("aa").innerHTML = "hello";
        alert("ez cheezy");
    }
    else {
        document.getElementById("aa").innerHTML = "goodbye";
        alert("ez peezy");
    }
    if (e === "f" || e === "") {
        e = "g";
    }
    else if (e === "g") {
        e = "f";
    }

}
function omaewamoushindeiru() {
    if (e === "" || e === "g") {
        alert("huh");
    }
    if (e === "f") {
        var answer = alert("omae wa mou shindeiru");
        window.close();
    }
} 

let w = false;
function bananaaaa() {
    document.getElementById("changeBanana").innerHTML = "i eat da banana";
    alert("nani?????");
    document.getElementById("changeBanana").innerHTML = "i eat da banana";
    ohayo();
    on();
}
function on() {
    if (w === false) {
        w = true;
    }
}
function ohayo() {
    if (w === true) {
        window.close();
    }
}