var i = 0;
var images =
[
    "Roopa.jpeg","Suresh.jpeg","Adip.jpeg","Granny.jpeg","download.jfif "
]
var names = 
[
    "Roopa Shangunam","Suresh Babu","Adip Bhavanarushi","Narsama","Adip Bhavanarushi"
]
function update() {
i++;
var number_of_family_member_ing_array = 5;
if(i > number_of_family_member_ing_array) {
    i = 0;
}
var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("family_image").src = updatedImage;
document.getElementById("family_name").innerHTML = updatedName;
}