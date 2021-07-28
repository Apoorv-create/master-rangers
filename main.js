var canvas = new fabric.Canvas('my_canvas');
block_image_width = 30;
block_image_height = 30;

block_x=10;
block_y=10;

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(140);
      
        block_image_object.set({
            top: block_y,
            left:block_x
        })
        });
    };
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log("keyPressed");

    if (keyPressed == '82') {
        new_image('rr1.png');
        console.log("red ranger")
    }
    if (keyPressed == '66') {
        new_image('br.png');
        console.log("blue ranger")
    }
    if (keyPressed == '71') {
        new_image('gr.png');
        console.log("green ranger")
    }
    if (keyPressed == '89') {
        new_image('yr.png');
        console.log("yellow ranger")
    }
    if (keyPressed == '80') {
        new_image('pr.png')
        console.log("pink ranger")
    }
}