var featureBoxes = document.querySelectorAll('#feature-boxes>div'); // creating an array of expanded info boxes
var imgsvg = document.getElementById("Layer_1");
var gBoxes= document.querySelectorAll("g > rect");

document.addEventListener('click', function(event) {
    console.log(event.target);
    var feature = (event.target.parentNode.id +"-More");
    [].forEach.call(featureBoxes, function(el, i, els) {
        if(els[i].classList.contains(feature)){
            gBoxes[i].classList.add("active-feature")
            featureBoxes[i].style.display='block';
            document.getElementById('selection').classList.add("hidden");
        }
        else if (event.target.classList.contains("feature-exit")){
        featureBoxes[i].style.display="none";
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