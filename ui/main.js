console.log('Loaded!');
//making a element of html move
var element = document.getElementById('img');
var margin = 20;
function movedown(){
    element.style.marginTop = margin + 'px';
}
function moveup(){
    element.style.marginBottom = margin + 'px';
}
element.onclick = function(){
    
    var interval = setInterval(movedown,50);
    
    
    
};
var element1 = document.getElementById('img1');
element1.onclick = function(){
    element1.style.marginTop = '20px';
};