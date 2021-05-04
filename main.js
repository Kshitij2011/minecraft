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
}