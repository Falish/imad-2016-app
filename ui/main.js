console.log('Loaded!');
//making a element of html move
var element = document.getElementById('img');
var margin = 0;
function movedown(){
    margin = margin + 5;
    element.style.marginTop = margin + 'px';
}
function moveup(){
    margin = margin + 2;
    element.style.marginBottom = margin + 'px';
}
element.onclick = function(){
   
    var interval = setInterval(movedown,50,10);
    var interval1 = setInterval(moveup,50,10);
   
    
};
var element1 = document.getElementById('img1');
element1.onclick = function(){
    element1.style.marginTop = '20px';
};