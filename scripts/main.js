let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/a5ce2dcf2723329870d469a561e62d31_r.jpg') {
    myImage.setAttribute('src', 'images/mmexport1581759034382.jpg');
    } else {
    myImage.setAttribute('src', 'images/a5ce2dcf2723329870d469a561e62d31_r.jpg');
    }
}