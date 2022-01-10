   // variables
   var wInnerH = innerHeight;
   var halfInnerH = wInnerH / 2;
   var card = document.getElementsByClassName("cards");

   window.onload = function () {
       // default background images
       if (scrollY >= 0 && scrollY <= halfInnerH) {
           card[4].style.opacity = 1;
       }

       // onscroll check the position of scrollY if scroll position come in range then image changes
       document.onscroll = function () {
           if (scrollY >= 0 && scrollY <= halfInnerH) {
               card[4].style.opacity = 1;
           } else {
               card[4].style.opacity = 0;
           }
           if (scrollY > halfInnerH && scrollY <= wInnerH + halfInnerH) {
               card[3].style.opacity = 1;
           } else {
               card[3].style.opacity = 0;
           }
           if (
               scrollY > wInnerH + halfInnerH && scrollY <= wInnerH * 2 + halfInnerH
           ) {
               card[2].style.opacity = 1;
           } else {
               card[2].style.opacity = 0;
           }
           if (
               scrollY > wInnerH * 2 + halfInnerH && scrollY <= wInnerH * 3 + halfInnerH
           ) {
               card[1].style.opacity = 1;
           } else {
               card[1].style.opacity = 0;
           }
           if (scrollY > wInnerH * 3 + halfInnerH && scrollY <= wInnerH * 4) {
               card[0].style.opacity = 1;
           } else {
               card[0].style.opacity = 0;
           }
       };
   }
