// Help Rudy the Red Dot collect all the green dots!

// Control Rudy with the following commands:
//  up();                   -- moves Rudy up one square
//  down();                 -- ...down one square
//  left();                 -- ...left one square
//  right();                -- ...right one square

// Interact with Rudy's environment using the following commands:
//  remainingDots();        -- returns the number of green dots remaining
//  getColor();             -- returns the color of Rudy's square
//  setColor(color);        -- changes the color of Rudy's square, opens gates if colors match

function repeatDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}
function repeatUp(total) {
  var count = 0;
  while (count < total) {
    up();
    count = count + 1;
  }
}
function repeatLeft(total) {
  var count = 0;
  while (count < total) {
    left();
    count = count + 1;
  }
}
function DownLeft() {
    down();
    left();
}
function RightUp() {
    right();
    up();
}
down();
if (getColor() == "yellow") {
  repeatDown(8);
  right();
  setColor("yellow");
} else {
  if (getColor() == "blue") {
      repeatDown(8);
		  right();
  		setColor("blue");
  } else {
      if (getColor() == "red") {
      repeatDown(8);
		  right();
  		setColor("red");
      } else {
          if (getColor() == "green") {
     		  repeatDown(8);
		 	 	  right();
          setColor("green");
          }
      }
  }
}
left();
repeatUp(7);
if (getColor() == "yellow") {
  repeatDown(7);
  right();
  RightUp();
  setColor("yellow");
} else {
  if (getColor() == "blue") {
      repeatDown(7);
		  right();
      RightUp();
  		setColor("blue");
  } else {
      if (getColor() == "red") {
        repeatDown(7);
        right();
      	RightUp();
  		setColor("red");
      } else {
          if (getColor() == "green") {
     		  repeatDown(7);
            right();
            RightUp();
          setColor("green");
          }
      }
  }
}
down();
repeatLeft(2);
repeatUp(6);
if (getColor() == "yellow") {
  repeatDown(6);
  right();
  RightUp();
  RightUp();
  setColor("yellow");
} else {
  if (getColor() == "blue") {
    repeatDown(6);
		right();
    RightUp();
    RightUp();
  		setColor("blue");
  } else {
      if (getColor() == "red") {
        repeatDown(6);
        right();
      	RightUp();
        RightUp();
        setColor("red");
      } else {
          if (getColor() == "green") {
     		  repeatDown(6);
            right();
            RightUp();
            RightUp();
          setColor("green");
          }
      }
  }
}
DownLeft();
down();
repeatLeft(2);
repeatUp(5);
if (getColor() == "yellow") {
  repeatDown(5);
  right();
  RightUp();
  RightUp();
  RightUp();
  setColor("yellow");
} else {
  if (getColor() == "blue") {
    repeatDown(5);
    right();
    RightUp();
    RightUp();
    RightUp();
    setColor("blue");
  } else {
      if (getColor() == "red") {
        repeatDown(5);
        right();
      	RightUp();
        RightUp();
        RightUp();
        setColor("red");
      } else {
          if (getColor() == "green") {
            repeatDown(5);
            right();
            RightUp();
            RightUp();
            RightUp();
            setColor("green");
          }
      }
  }
}
DownLeft();
DownLeft();
DownLeft();
left();
repeatUp(4);
if (getColor() == "yellow") {
  repeatDown(4);
  right();
  RightUp();
  RightUp();
  RightUp();
  RightUp();
  setColor("yellow");
} else {
  if (getColor() == "blue") {
    repeatDown(4);
    right();
    RightUp();
    RightUp();
    RightUp();
    RightUp();
  		setColor("blue");
  } else {
      if (getColor() == "red") {
        repeatDown(4);
        right();
      	RightUp();
        RightUp();
        RightUp();
        RightUp();
  		setColor("red");
      } else {
          if (getColor() == "green") {
            repeatDown(4);
            right();
            RightUp();
            RightUp();
            RightUp();
            RightUp();
            setColor("green");
          }
      }
  }
}
DownLeft();
DownLeft();
DownLeft();
DownLeft();
left();
repeatUp(3);
if (getColor() == "yellow") {
  repeatDown(3);
  right();
  RightUp();
  RightUp();
  RightUp();
  RightUp();
  RightUp();
  setColor("yellow");
} else {
  if (getColor() == "blue") {
    repeatDown(3);
    right();
    RightUp();
    RightUp();
    RightUp();
    RightUp();
    RightUp();
    setColor("blue");
  } else {
      if (getColor() == "red") {
        repeatDown(3);
        right();
      	RightUp();
        RightUp();
        RightUp();
        RightUp();
        RightUp();
        setColor("red");
      } else {
          if (getColor() == "green") {
            repeatDown(3);
            right();
            RightUp();
            RightUp();
            RightUp();
            RightUp();
            RightUp();
            setColor("green");
          }
      }
  }
}
DownLeft();
DownLeft();
DownLeft();
DownLeft();
DownLeft();
left();
repeatUp(2);
if (getColor() == "yellow") {
  repeatDown(2);
  right();
  RightUp();
  RightUp();
  RightUp();
  RightUp();
  RightUp();
  RightUp();
  setColor("yellow");
} else {
  if (getColor() == "blue") {
    repeatDown(2);
    right();
    RightUp();
    RightUp();
    RightUp();
    RightUp();
    RightUp();
    RightUp();
    setColor("blue");
  } else {
      if (getColor() == "red") {
        repeatDown(2);
        right();
      	RightUp();
        RightUp();
        RightUp();
        RightUp();
        RightUp();
        RightUp();
        setColor("red");
      } else {
          if (getColor() == "green") {
            repeatDown(2);
            right();
            RightUp();
            RightUp();
            RightUp();
            RightUp();
            RightUp();
            RightUp();
            setColor("green");
          }
      }
  }
}
DownLeft();
DownLeft();
DownLeft();
DownLeft();
DownLeft();
DownLeft();
left();
up();
if (getColor() == "yellow") {
  down();
  right();
  RightUp();
  RightUp();
  RightUp();
  RightUp();
  RightUp();
  RightUp();
  RightUp();
  setColor("yellow");
} else {
  if (getColor() == "blue") {
    down();
    right();
    RightUp();
    RightUp();
    RightUp();
    RightUp();
    RightUp();
    RightUp();
    RightUp();
    setColor("blue");
  } else {
      if (getColor() == "red") {
        down();
        right();
      	RightUp();
        RightUp();
        RightUp();
        RightUp();
        RightUp();
        RightUp();
        RightUp();
        setColor("red");
      } else {
          if (getColor() == "green") {
            down();
            right();
            RightUp();
            RightUp();
            RightUp();
            RightUp();
            RightUp();
            RightUp();
            RightUp();
            setColor("green");
          }
      }
  }
}
RightUp();
up();
