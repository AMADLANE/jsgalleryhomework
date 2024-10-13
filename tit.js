function upDate(previewPic){
    var a=document.getElementById("image");
    a.style.backgroundImage= "url('" + previewPic.src + "')";
    a.innerHTML=previewPic.alt;
    }
    function unDo(){
     var b=document.getElementById("image")
     b.style.backgroundImage="url('')";
     b.innerHTML="Hover over an image below to display here.";
    }
function myTabFunction() {
let photos = document.querySelectorAll(".preview");
for (let i = 0; i < photos.length; i++) {
 let index = i;
 photos[i].setAttribute("tabindex", index);
}
}
function replace(element) {
element.style.backgroundColor = "red";
}
function myBlur() {
let x = document.querySelectorAll("img");
for (i = 0; i < x.length; i++) {
 x[i].alt = x[i].alt.toUpperCase();
}
}
myBlur();