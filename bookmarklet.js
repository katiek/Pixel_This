function addRuler() {
    console.log("Making the ruler");
    var ruler = document.createElement('div');
    ruler.style.height = '500px';
    ruler.style.width = '50px';
    ruler.style.backgroundColor = '#AACAAA';
    console.log("Finished styling the ruler");
    for (var px = 0; px < 500; px = px + 1) {
        console.log("Adding a pixel", i);
        var pixel = document.createElement('div') // the var ____is now creating a box in the first _____
        pixel.style.height = '1px';
        if (px % 10 == 0) {
            pixel.style.width = '50px';
        } else if (px % 10 == 5) {
            pixel.style.width = '45px';
        } else {
            pixel.style.width = '40px';
        };

        var pxm = px % 10;
        var hue = 20 * pxm + 60;
        pixel.style.backgroundColor = 'hsl(' + hue + ',100%,50%)';
        ruler.appendChild(pixel); // the now defined pixel is being applied to the ruler, work on % opacity to make ruler more translucent while floating on the page. 
        //full opacity for top and left ruler
        //when hovering over a pixel on your document the pixel line will turn on to a bright color not found on the ruler in general and will also display the pixel number
    }

    console.log("About to add the ruler to the body")
    var myBody = document.body;
    myBody.appendChild(ruler); //the ruler is now being applied to the body aka webpage
    console.log("done");
}

addRuler();
