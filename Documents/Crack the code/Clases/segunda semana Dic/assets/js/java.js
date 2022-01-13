//Array
var names = ["Julia","Martin","Miguel","Sofia"];
var content = document.getElementById("array-content");
var newContent = document.getElementById ("new-arrays-content")
//mostrar datos 
showData(names,content);

//variables botones
let btnPush = document.getElementById("btn-Push");
let btnPop = document.getElementById("btn-Pop");
let btnUnshift = document.getElementById("btn-Unshift");
let btnShift = document.getElementById("btn-Shift");
let btnSlice = document.getElementById("btn-Slice");

//anclar funciones 
btnPush.onclick = fPush;
btnPop.onclick = fPop;
btnUnshift.onclick = fUnshift;
btnShift.onclick = fShift;
btnSlice.onclick = fSlice;

//funciones
function fPush(e){
names.push("Margarito");
showData(names,content);
}

function fPop(e){
names.pop();
showData(names,content);
}

function fUnshift(e){
names.unshift("Margarita");
showData(names,content);
}

function fShift(e){
names.shift();
showData(names,content);
}

function fSlice(e){
    b = 0;
    e = 2;
    newArray = names.slice(b,e);
    sh
}
