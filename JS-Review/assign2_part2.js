//TO DO D: Configure the paths of the five images
var slideimages =["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg",
    "images/7.jpg"];
//TO DO D: Configure URL to the five target links
var slidelinks = ['https://en.wikipedia.org/wiki/Great_Wall_of_China',
    'https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)','https://en.wikipedia.org/wiki/Machu_Picchu',
    'https://en.wikipedia.org/wiki/Chichen_Itza','https://en.wikipedia.org/wiki/Colosseum',
    'https://en.wikipedia.org/wiki/Taj_Mahal','https://en.wikipedia.org/wiki/Petra'];

var imgCaption =['Great Wall of China (China)','Christ the Redeemer Statue (Rio de Janeiro)',
    'Machu Picchu (Peru)','Chichen Itza (Yucatan Peninsula, Mexico)','The Roman Colosseum (Rome)',
    'Taj Mahal (Agra, India)','Petra (Jordan)'];

function gotoshow() {
    if (!window.winslide || winslide.closed)
        winslide=window.open(slidelinks[index]);
    else
        winslide.location=slidelinks[index];
    winslide.focus();
}

//TO DO E: configure the speed of the slideshow, in milliseconds
var slideshowspeed=2000;
var index=0;
function slideit() {
    var image = document.getElementById("slider");
    var imageURL = document.getElementById("imageURL");
    var imageCaption = document.getElementById("wonder-caption");
    image.src = slideimages[index];
    imageURL.href = slidelinks[index];
    imageCaption.textContent = imgCaption[index];
    index++;
    index %= slideimages.length;

//TO DO F: update index so that the image keep rotating for ever
//TO DO G: set the next image in the img tag
    setTimeout(slideit,slideshowspeed);
}