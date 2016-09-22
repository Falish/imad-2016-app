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
    for(var i=0;i<7;i++){
    var interval = setInterval(movedown,50);
    }
    for(var j=0;j<7;j++){
        var interval1 = setInterval(moveup,50);
    }
    
};
var element1 = document.getElementById('img1');
element1.onclick = function(){
    element1.style.marginTop = '20px';
};