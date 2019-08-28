function changeFrameHeight(){
    var ifm= document.getElementById("myiframe"); 
    ifm.height=document.documentElement.clientHeight;
    ifm.width =document.documentElement.offsetWidth +10;
}

window.onresize=function(){ changeFrameHeight();}

$(function(){changeFrameHeight();});