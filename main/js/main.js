
var clickT = 0;
var defWidth = 200;
var minWidth = 35;

document.getElementsByClassName('openTips')[0].style = ("visibility: hidden;");

function down() {
  clickT = 1;
  //console.log(clickT);
}

function up() {
  clickT = 0;
  //console.log(clickT);
}

function drag(event) {
  if (clickT === 1) {
    var cordX = event.clientX + 1;
    document.getElementsByClassName('leftToolBar')[0].style = ("width:" + cordX.toString() + "px;");
  }

  if (cordX <= minWidth) {
    //console.log(minWidth + "px");
    clickT = 0;
    document.getElementsByClassName('leftToolBar')[0].style = ("display: none");
    document.getElementsByClassName('openTips')[0].style = ("display: inherit");
    document.getElementsByClassName('toolList')[0].style = ("display: none");
  }
}


function openBar() {
  //console.log("OUI");
  document.getElementsByClassName('leftToolBar')[0].style = ("display: inherit width:" + defWidth + "px");
  document.getElementsByClassName('openTips')[0].style = ("display: none");
  document.getElementsByClassName('toolList')[0].style = ("display: inherit");
}

/*================= script onglet =================*/

var flag = 0;

function toolTab() {

  if(flag === 0) {
    flag = 1;
    document.getElementsByClassName('Tab')[0].style = ("transform: rotate(-90deg);");
    document.getElementsByClassName('toolBlock')[0].style = ("height: 35px;");
    //document.getElementsByClassName('toolList')[0].style = ("visibility: hidden;");
    //console.log(flag);
  }
  else {
    flag = 0;
    document.getElementsByClassName('Tab')[0].style = ("transform: rotate(0deg);");
    document.getElementsByClassName('toolBlock')[0].style = ("height: auto;");
    //document.getElementsByClassName('toolList')[0].style = ("visibility: visible;");
    //console.log(flag);
  }


}



var lol = 0;
function add(selectNode) {

  var node_link = [
    "aset/node/node_test.html",
    "aset/node/node_text.html",
    "Container"
  ];
  var nodeSelected = node_link[selectNode]
  console.log(nodeSelected);


/*============== INCLUDE NODES ================*/


  var btn = document.createElement("div");
  btn.setAttribute("includeHTML", nodeSelected);
  btn.setAttribute("class", "Npanel_1")



  //document.head.appendChild(btn);
  document.getElementsByClassName('world')[0].appendChild(btn);





      var z, i, elmnt, file, xhttp;

      z = document.getElementsByTagName("*");
      for (i = 0; i < z.length; i++) {
        elmnt = z[i];

        file = elmnt.getAttribute("includeHTML");
        if (file) {

          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              if (this.status == 200) {
                elmnt.innerHTML = this.responseText;

                /*=====*/
                var pute = document.getElementsByClassName('nodeTitle')[lol];
                pute.setAttribute("onmousedown", "select("+lol+")");
                console.log(pute);

                console.log(lol);
                lol++;
                /*=====*/

              }
              if (this.status == 404) {elmnt.innerHTML = "Node not found. ERROR : 234";}

              elmnt.removeAttribute("includeHTML");
              //includeHTML();
             }
           }
           xhttp.open("GET", file, true);
           xhttp.send();

           return;
         }
       }

/*============== /INCLUDE NODES ================*/

}


var a = 0;
function colorPicker() {



  if (a === 0) {
    console.log("llld");
    a = 1;
    var btn = document.createElement("div");
    btn.setAttribute("includeHTML", "aset/nodule/color_picker.html");
    btn.setAttribute("class", "color_main")

    //document.head.appendChild(btn);
    document.getElementsByClassName('color_box')[0].appendChild(btn);



        var z, i, elmnt, file, xhttp;
        /*loop through a collection of all HTML elements:*/
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
          elmnt = z[i];
          /*search for elements with a certain atrribute:*/
          file = elmnt.getAttribute("includeHTML");
          if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Node not found. ERROR : 234";}
                /*remove the attribute, and call this function once more:*/
                elmnt.removeAttribute("includeHTML");
                //includeHTML();
               }
             }
             xhttp.open("GET", file, true);
             xhttp.send();
             /*exit the function:*/
             return;
           }
         }
  } else {
    a = 0;
    console.log("lol");
    var element = document.getElementsByClassName('color_main')[0];
    element.parentNode.removeChild(element);
  }




}






function select(clL) {

    document.getElementsByClassName('Npanel_1')[clL].style = "border: 1px solid #47e;";
    console.log(clL);



    //Make the DIV element draggagle:
       dragElement(document.getElementsByClassName("Npanel_1")[clL]);


     function dragElement(elmnt) {
       var elemDragX = 0, elemDragY = 0;
       var mousePosX = 0, mousePosY = 0;
       document.getElementsByClassName("nodeTitle")[clL].onmousedown = dragMouseDown;




       function dragMouseDown(event) {
         /*console.log(event);
         console.log(event);*/
         event.preventDefault();
         // get the mouse cursor position at startup:
         mousePosX = event.clientX;
         mousePosY = event.clientY;
         document.onmouseup = closeDragElement;
         // call a function whenever the cursor moves:
         document.onmousemove = elementDrag;
       }

       function elementDrag(event) {
         event.preventDefault();
         // calculate the new cursor position:
         elemDragX = mousePosX - event.clientX;
         elemDragY = mousePosY - event.clientY;
         mousePosX = event.clientX;
         mousePosY = event.clientY;
         // set the element's new position:
         elmnt.style.top = (elmnt.offsetTop - elemDragY) + "px";
         elmnt.style.left = (elmnt.offsetLeft - elemDragX) + "px";

       }

       function closeDragElement() {
         /* stop moving when mouse button is released:*/
         document.onmouseup = null;
         document.onmousemove = null;
       }
     }

}







function nodu() {


    document.getElementsByClassName('path')[0].style = "border: 1px solid #47e;";




    //Make the DIV element draggagle:
       dragElement(document.getElementsByClassName('path')[0]);


     function dragElement(elmnt) {
       var elemDragX = 0, elemDragY = 0;
       var mousePosX = 0, mousePosY = 0;
       document.getElementsByClassName('output')[0].onmousedown = dragMouseDown;

  console.log("wefwrg");


       function dragMouseDown(event) {
         /*console.log(event);
         console.log(event);*/
         event.preventDefault();
         // get the mouse cursor position at startup:
         mousePosX = event.clientX;
         mousePosY = event.clientY;
         document.onmouseup = closeDragElement;
         // call a function whenever the cursor moves:
         document.onmousemove = elementDrag;
       }

       function elementDrag(event) {
         event.preventDefault();
         // calculate the new cursor position:
         elemDragX = mousePosX - event.clientX;
         elemDragY = mousePosY - event.clientY;
         mousePosX = event.clientX;
         mousePosY = event.clientY;
         // set the element's new position:
         elmnt.style.top = (elmnt.offsetTop - elemDragY) + "px";
         elmnt.style.left = (elmnt.offsetLeft - elemDragX) + "px";

       }

       function closeDragElement() {
         /* stop moving when mouse button is released:*/
         document.onmouseup = null;
         document.onmousemove = null;
       }
     }

}
