var canvas = new fabric.Canvas("myCanvas");
block_image_width = 50;
block_image_height = 50;
player_x = 15;
player_y = 15;
var player_object = "";
var block_image_object = "";

function player_update(){ fabric.Image.fromURL("player.png", function(Img){
     player_object = Img;
      player_object.scaleToWidth(150);
       player_object.scaleToHeight(140);
        player_object.set({ top:player_y, left:player_x });
         canvas.add(player_object);
         });
         }

 
         function new_image(get_image){
          fabric.Image.fromURL(get_image, function(Img){
               block_image_object = Img;
                block_image_object.scaleToWidth(block_image_width);
                 block_image_object.scaleToHeight(block_image_height);
                  block_image_object.set({ top:player_y, left:player_x });
                   canvas.add(block_image_object);
                 });
                 }

     window.addEventListener("keydown", my_keydown)
     function my_keydown(e){
          keypressed = e.keyCode;
          console.log(keypressed);
          if(e.shiftKey==true && keypressed=='80'){
               console.log("shift && p pressed");
               block_image_width = block_image_width + 10;
               block_image_height = block_image_height + 10;
               document.getElementById("current_width").innerHTML = block_image_width;
               document.getElementById("current_height").innerHTML = block_image_height;
          }

          if(e.shiftKey==true && keypressed=='77'){
               console.log("shift && m pressed");
               block_image_width = block_image_width - 10;
               block_image_height = block_image_height - 10;
               document.getElementById("current_width").innerHTML = block_image_width;
               document.getElementById("current_height").innerHTML = block_image_height;
          }

          if(keypressed=='84'){
               new_image('trunk.jpg');
               console.log("t");
          }

          if(keypressed=='68'){
               new_image('dark_green.png');
               console.log("d");
          }

          if(keypressed=='76'){
               new_image('light_green.png');
               console.log("l");
          }       

          if(keypressed=='71'){
               new_image('ground.png');
               console.log("g");
          }   

          if(keypressed=='87'){
               new_image('wall.jpg');
               console.log("w");
          }

          if(keypressed=='89'){
               new_image('yellow_wall.png');
               console.log("y");
          }

          if(keypressed=='82'){
               new_image('roof.jpg');
               console.log("r");
          }

          if(keypressed=='67'){
               new_image('cloud.jpg');
               console.log("c");
          }

          if(keypressed=='85'){
               new_image('unique.png');
               console.log("u");
          }

          if(keypressed=='38'){
               key_up();
               console.log("when up key is pressed=")
          }

          if(keypressed=='40'){
               key_down();
               console.log("when down key is pressed=")
          }

          if(keypressed=='37'){
               key_left();
               console.log("when left key is pressed=")
          }

          if(keypressed=='39'){
               key_right();
               console.log("when right key is pressed=")
          }
}

function key_up(){
     if(player_y>=0){
          player_y = player_y - block_image_height;
          console.log("when up arrow key is pressed value of x =" + player_x + "y = " + player_y);
          console.log("block image height" + block_image_height);
          canvas.remove(player_object);
          player_update();
     }
}

function key_down(){
     if(player_y<=500){
          player_y = player_y + block_image_height;
          console.log("when down arrow key is pressed value of x =" + player_x + "y = " + player_y);
          console.log("block image height" + block_image_height);
          canvas.remove(player_object);
          player_update();
     }
}

function key_left(){
     if(player_x>=0){
          player_x = player_x - block_image_width;
          console.log("when left arrow key is pressed value of x =" + player_x + "y = " + player_y);
          console.log("block image width" + block_image_width);
          canvas.remove(player_object);
          player_update();
     }
}

function key_right(){
     if(player_x<=750){
          player_x = player_x + block_image_width;
          console.log("when right arrow key is pressed value of x =" + player_x + "y = " + player_y);
          console.log("block image width" + block_image_width);
          canvas.remove(player_object);
          player_update();
     }
}