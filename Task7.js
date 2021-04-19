//Task 1

var myWindow = window.open("", "myWindow", "width=300,height=300");


function resizeWinTo() {
    myWindow.resizeTo(500, 500);
    myWindow.focus();
  }

  window.setTimeout(resizeWinTo, 2000);

function Move(){
    myWindow.moveTo(200, 200)
}

window.setTimeout(Move, 4000);

function Close()
{ myWindow.close()

}  
window.setTimeout(Close, 6000);


//Task 2 - in HTML