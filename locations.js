//locations.js

var currentScore = 0;
        var northVisited = false;
        var westVisited = false;
        var eastVisited = false; 
        var southVisited = false;
        var beachvisited = false;
        var forrestVisited = false;
        var deadbodiesVisited = false;
        var holeVisited = false;
        var locale = 0;
        var currentLocation = 0;
        
        function location_switch (locale) {
        	switch(locale) {
        
        //Default Location is "tent"
          
          case "tent" : var msg = "You are inside the tent";                            
		                             updateDisplay(msg);
		                             document.getElementById("btnNorth").style.visibility="visible";
		                             document.getElementById("btnWest").style.visibility="visible";
		                             document.getElementById("btnEast").style.visibility="visible";
		                             document.getElementById("btnSouth").style.visibility="visible";
		                             document.getElementById("location").innerHTML = currentLocation;
		                             break;
                             
		  case "plane" : var msg = "You are next to the plane";
		                              updateDisplay(msg);
		                              document.getElementById("btnNorth").style.visibility="visible";
		                              document.getElementById("btnWest").style.visibility="hidden";
		                              document.getElementById("btnEast").style.visibility="hidden";
		                              document.getElementById("btnSouth").style.visibility="visible";
		                                if(!northVisited){
		                                  currentScore += 5;
		                                  document.getElementById("score").innerHTML = currentScore;
		                                  document.getElementById("location").innerHTML = currentLocation;
		                                  northVisited = true;
		                                }                             
		                              break;
                                
          case "river" : var msg = "You are walking to the river";   
		                              updateDisplay(msg);
		                              document.getElementById("btnNorth").style.visibility="hidden";
		                              document.getElementById("btnWest").style.visibility="visible";
		                              document.getElementById("btnEast").style.visibility="visible";
		                              document.getElementById("btnSouth").style.visibility="hidden";
		                                if(!westVisited){
		                                  currentScore += 5;
		                                  document.getElementById("score").innerHTML = currentScore;
		                                  document.getElementById("location").innerHTML = currentLocation;
		                                  westVisited = true;
		                                } 
		                               break;
                               
         case "volcano" : var msg = "You are walking up to the volcano";
	                                 updateDisplay(msg);
	                                 document.getElementById("btnNorth").style.visibility="hidden";
	                                 document.getElementById("btnWest").style.visibility="visible";
	                                 document.getElementById("btnEast").style.visibility="visible";
	                                 document.getElementById("btnSouth").style.visibility="hidden";
	                                  if(!eastVisited){
	                                    currentScore += 5;
	                                    document.getElementById("score").innerHTML = currentScore;
	                                    document.getElementById("location").innerHTML = currentLocation;
	                                    eastVisited = true;
	                                  }
	                                  break;
                                  
         case "coconut tree" : var msg = "You are next to the coconut tree";
		                               updateDisplay(msg);
		                               document.getElementById("btnNorth").style.visibility="visible";
		                               document.getElementById("btnWest").style.visibility="hidden";
		                               document.getElementById("btnEast").style.visibility="hidden";
		                               document.getElementById("btnSouth").style.visibility="hidden";
		                                if(!southVisited){
		                                  currentScore += 5;
		                                  document.getElementById("score").innerHTML = currentScore;
		                                  document.getElementById("location").innerHTML = currentLocation;
		                                  southVisited = true;
		                                }
		                               break;                               
                                  
         case "cave" : var msg = "you are inside the cave";
		                               updateDisplay(msg);
		                               document.getElementById("btnNorth").style.visibility="hidden";
		                               document.getElementById("btnWest").style.visibility="hidden";
		                               document.getElementById("btnEast").style.visibility="visible";
		                               document.getElementById("btnSouth").style.visibility="hidden";
		                                if(!caveVisited){
		                                  currentScore += 5;
		                                  document.getElementById("score").innerHTML = currentScore;
		                                  document.getElementById("location").innerHTML = currentLocation;
		                                  caveVisited = true;
		                                }
		                               break;
                               
         case "beach" : var msg = "You are at the beach";
		                              updateDisplay(msg)
		                              document.getElementById("btnNorth").style.visibility="hidden";
		                              document.getElementById("btnWest").style.visibility="visible";
		                              document.getElementById("btnEast").style.visibility="visible";
		                              document.getElementById("btnSouth").style.visibility="hidden";
		                                if(!beachVisited){
		                                  currentScore += 5;
		                                  document.getElementById("score").innerHTML = currentScore;
		                                  document.getElementById("location").innerHTML = currentLocation;
		                                  caveVisited = true;
		                                }
		                                break;
          
         case "forrest" : var msg = "You are walking to the forrest";
		                              updateDisplay(msg)
		                              document.getElementById("btnNorth").style.visibility="hidden";
		                              document.getElementById("btnWest").style.visibility="hidden";
		                              document.getElementById("btnEast").style.visibility="hidden";
		                              document.getElementById("btnSouth").style.visibility="visible";
		                                if(!forrestVisited){
		                                  currentScore += 5;
		                                  document.getElementById("score").innerHTML = currentScore;
		                                  document.getElementById("location").innerHTML = currentLocation;
		                                  forrestVisited = true;
		                                }
		                              break;   
		                              
		case "dead bodies" : var msg = "You are on the dead bodies";
		                              updateDisplay(msg)
		                              document.getElementById("btnNorth").style.visibility="hidden";
		                              document.getElementById("btnWest").style.visibility="visible";
		                              document.getElementById("btnEast").style.visibility="hidden";
		                              document.getElementById("btnSouth").style.visibility="visible";
		                                if(!deadbodiesVisited){
		                                  currentScore += 5;
		                                  document.getElementById("score").innerHTML = currentScore;
		                                  document.getElementById("location").innerHTML = currentLocation;
		                                  deadbodiesVisited = true;
		                                }
		                              break;    
		 
	   case "hole" : var msg = "You are next to the deep hole";
		                              updateDisplay(msg)
		                              document.getElementById("btnNorth").style.visibility="visible";
		                              document.getElementById("btnWest").style.visibility="hidden";
		                              document.getElementById("btnEast").style.visibility="hidden";
		                              document.getElementById("btnSouth").style.visibility="hidden";
		                                if(!holeVisited){
		                                  currentScore += 5;
		                                  document.getElementById("score").innerHTML = currentScore;
		                                  document.getElementById("location").innerHTML = currentLocation;
		                                  holeVisited = true;
		                                }
		                              break;                                                       
                                
          default            : var msg = "Error, Please enter valid commands";
                              updateDisplay(msg);
                              break;      
        }                  
      }  
      
      function btn_north() {
        var msg = "Invalid Command..please try again.";
         	 if (currentLocation === 0) {
          	 	 	currentLocation = 1;
          	 	 	location_switch("plane");
     } 	else if (currentLocation === 4) {
          			currentLocation = 0;
          			location_switch("tent");
     } 	else if (currentLocation === 1) {
                 	 currentLocation = 10;
                 	 location_switch("forrest");
     }	else updateDisplay(msg);
      }
      
      function btn_west() {
        var msg = "Invalid Command..please try again.";
         	 if (currentLocation === 0) {
	         	 	currentLocation = 2;
	         	 	location_switch("river");
     }	else if (currentLocation === 2) {
                	currentLocation = 5;
                	location_switch("cave");
     }	else if (currentLocation === 3) {
                    currentLocation = 0;
                    location_switch("tent");
     }	else if (currentLocation === 6) {
                    currentLocation = 3;
                    location_switch("volcano");
     }  else updateDisplay(msg);
      }

      function btn_east() {
        var msg = "Invalid Command..please try again.";
       		if (currentLocation === 0) {
            		currentLocation = 3;
            		location_switch("volcano");
     }	else if (currentLocation === 3) {
                	currentLocation = 6;
                	location_switch("beach");
     }  else if (currentLocation === 2) {
                    currentLocation = 0;
                    location_switch("tent");
     }	else if (currentLocation === 5) {
                    currentLocation = 2;
                    location_switch("river");
     }   else updateDisplay(msg);   
      }
      
      function btn_south() {
        var msg = "Invalid Command..please try again.";
          	if (currentLocation === 0) {
           			 currentLocation = 4;
           			 location_switch("coconut tree");
     }	else if (currentLocation === 1) {
            		    currentLocation = 0;
            		    location_switch("tent");
     }	else if (currentLocation === 10) {
        	            currentLocation = 1;
        	            location_switch("plane");
     }  else updateDisplay(msg);
      }                     
               
     function updateDisplay(msg) {
     	msg = msg + " [" + currentLocation + "]";
     	var ta = document.getElementById("taGame");
     	ta.value = msg + "\n" + ta.value;
     } 
      
      function updateScore(msg) {
        var ta = document.getElementById("taGame");
        ta.value = message + "\n" + ta.value;
      }
      
      function invalidCommand(msg) {
        var ta = document.getElementById("taGame");
        ta.value = message + "\n" + ta.value;
      }
      
      function score_btn_onclick() {
        updateScore(score);
      }
      
      function btn_go_click() {
        var userInput = document.getElementById("txtCommand").value;
        if  ((userInput === "n")  || (userInput === "N")) {
            btn_north();
        } else if ((userInput === "s") || (userInput === "S")) {
            btn_south();
        } else if ((userInput === "e") || (userInput === "E")) {
            btn_east();
        } else if ((userInput === "w") || (userInput === "W")) {
            btn_west();
        } else {
            invalidCommand("Invaled! Please use commands: N,S,E,W,n,s,e,w.");
        }
      }
      
