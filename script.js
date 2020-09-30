const featureBoxes = document.querySelectorAll('#feature-boxes>div'); // creating an array of expanded info boxes
var gBoxes= document.querySelectorAll("g > rect");
const imgsvg = document.getElementById("Layer_1");
const imgPopup = document.querySelectorAll('.feature-exit');

imgsvg.addEventListener('click', function(event) {
    var feature = (event.target.parentNode.id +"-More");
    [].forEach.call(featureBoxes, function(el, i, els) {
        if(els[i].classList.contains(feature)){
            gBoxes[i].classList.add("active-feature")
            featureBoxes[i].style.display='block';
            document.getElementById('selection').classList.add("hidden");
        }
        else {
            gBoxes[i].classList.remove("active-feature")
            featureBoxes[i].style.display='none';
        }
    });
    if((event.target.parentNode.classList.contains("box-active"))){
        document.getElementById('selection').classList.add("hidden");
    }
    else{
        document.getElementById('selection').classList.remove("hidden");
    }
    

});

function closeWin(el) {
    el.parentNode.style.display='none';
    document.getElementById('selection').classList.remove("hidden");
    [].forEach.call(featureBoxes, function(el, i, els) {
        gBoxes[i].classList.remove("active-feature")
    });
}