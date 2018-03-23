var images = ['images/modi.png', 'images/chaplin.jpg', 'images/raman.jpg', 'images/kalam.jpg', 'images/disney.jpg']
var container, img, buttonContiner, leftbutton,righButton;
var currentIndex = 0;

setStage();

/* 
Settting stage start here  */
function setStage() {
    container = giveElement('div');
    container.setAttribute('class', 'container-div');
    img = giveElement('img');
    container.appendChild(img);
    document.body.appendChild(container);
    
    displayImage();
    setButtons();
    createThumbnails();
}
function createThumbnails() {
    for (var i = 0; i < images.length; i++) {
        var thumbnail = giveElement('img');
        thumbnail.src = images[i];
        thumbnail.setAttribute('src-img-id', i);
        thumbnail.className = "thumb-img";
        thumbnail.onclick = thumbClick;
        buttonContiner.appendChild(thumbnail);
    }
}

function thumbClick (e){
    currentIndex = e.srcElement.getAttribute('src-img-id');
    displayImage()

}
function setButtons(){

    buttonContiner =giveElement('div');
    buttonContiner.setAttribute('class','button-container') ;

    leftbutton = giveElement('button');
    leftbutton.innerHTML = "Previous"
    leftbutton.onclick = previousImage;

    righButton = giveElement('button');
    righButton.innerHTML = "Next";
    righButton.onclick = nextImage;

    buttonContiner.appendChild(leftbutton);
    buttonContiner.appendChild(righButton);

    document.body.appendChild(buttonContiner);
}
/* 
Setting starge ending */

/* Nav functions start */

function nextImage(){
    if(currentIndex>=images.length-1){
        return;
    }
    console.log(currentIndex)
    currentIndex++
    displayImage()
    
}

function previousImage(){
    if(currentIndex<=0){
        return;
    };
    currentIndex--
    displayImage();
    
}

function displayImage(){
    img.src = images[currentIndex];
}
/* 
Nav Functions end  */

/* Utitlity functions  */
function giveElement(tag){
    return document.createElement(tag);
}
/* Utility Funcitons end */