
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






      function Container(){
          /*============== INCLUDE NODES ================*/
          var btn = document.createElement("div");
          btn.setAttribute("w3-include-html", "aset/node/node_test.html");

          //document.head.appendChild(btn);
          document.getElementsByClassName('world')[0].appendChild(btn);



             var z, i, elmnt, file, xhttp;
             /*loop through a collection of all HTML elements:*/
             z = document.getElementsByTagName("*");
             for (i = 0; i < z.length; i++) {
               elmnt = z[i];
               /*search for elements with a certain atrribute:*/
               file = elmnt.getAttribute("w3-include-html");
               if (file) {
                 /*make an HTTP request using the attribute value as the file name:*/
                 xhttp = new XMLHttpRequest();
                 xhttp.onreadystatechange = function() {
                   if (this.readyState == 4) {
                     if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                     if (this.status == 404) {elmnt.innerHTML = "Node not found. ERROR : 234";}
                     /*remove the attribute, and call this function once more:*/
                     elmnt.removeAttribute("w3-include-html");
                     includeHTML();
                   }
                 }
                 xhttp.open("GET", file, true);
                 xhttp.send();
                 /*exit the function:*/
                 return;
               }
             }


          /*============== /INCLUDE NODES ================*/

      }
