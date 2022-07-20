"use strict";

// open search modal
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}




// counter animation
const counterAnim = (e, t = 0, s, i = 1e3) => {
    const n = document.querySelector(e);
    let l = null;
    const a = (e) => {
        l || (l = e);
        const d = Math.min((e - l) / i, 1);
        (n.innerText = Math.floor(d * (s - t) + t)), d < 1 && window.requestAnimationFrame(a);
    };

    window.requestAnimationFrame(a);
};


const xyz = () => {
     counterAnim("#count1", 300, 2000, 1e3), counterAnim("#count2", 5e3, 4e3, 1500), counterAnim("#count3", 1e3, 3000, 2e3), 
     counterAnim("#count4", 500, 7000, 2500);
}

let isAnimeDone = false;
const animate = () => {
    if(isAnimeDone) return;

    const rect = document.querySelector("#scrollanime").getBoundingClientRect();
    if((rect.top + 260) <= (window.innerHeight || document.documentElement.clientHeight)){
        xyz();
        isAnimeDone = true;
    }
}
window.addEventListener("scroll", animate);



//Mobile Menu js
function openNav() {
  document.getElementById("mySidepanel").style.left = "0";
}
function closeNav() {
  document.getElementById("mySidepanel").style.left = "-100%";
}

function openNav() {
  document.getElementById("mySidepanel2").style.left = "0";
}
function closeNav() {
  document.getElementById("mySidepanel2").style.left = "-100%";
}          

// mobile menu dropdown js 
var allHasChildren = document.querySelectorAll(".prent-dropdown");
for (var x = 0; x < allHasChildren.length; x++) {
    allHasChildren[x].onclick = function() {
        // get the first submenu and toggle using classes
        var subMenu = this.parentNode.getElementsByClassName("child-dropdown")[0];
        if (subMenu.classList.contains('show-menu')) {
            subMenu.classList.remove("show-menu");
        } else {
            subMenu.classList.add("show-menu");
        }
    }
}


// click add class
var allHasChildren = document.querySelectorAll(".add-to-cart");
for (var x = 0; x < allHasChildren.length; x++) {
    allHasChildren[x].onclick = function() {
        var subMenu = this.parentNode.getElementsByClassName("add-tocart-overlay")[0];
        if (subMenu.classList.contains('show')) {
            // subMenu.classList.remove("show");
        } else {
            subMenu.classList.add("show");
        }
    }
}


// Window Scroll class add js
var scrollpos = window.scrollY;
var header = document.getElementById("header");

function add_class_on_scroll() {
    header.classList.add("fade-in");
}

function remove_class_on_scroll() {
    header.classList.remove("fade-in");
}

window.addEventListener('scroll', function(){ 
    scrollpos = window.scrollY;

    if(scrollpos > 50){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    // console.log(scrollpos);
});


// back to top btn
var t1 = 0;
window.onscroll = scroll1;

function scroll1() {
  var toTop = document.getElementById('toTop');
  window.scrollY > 45 ? toTop.style.display = 'Block' : toTop.style.display = 'none';
}

function abcd() {
  var y1 = window.scrollY;
  y1 = y1 - 1000;
  window.scrollTo(0, y1);
  if (y1 > 0) {
    t1 = setTimeout("abcd()", 50);
  } else {
    clearTimeout(t1);
  }
}

// date time function
let time = document.getElementById("current-time");

setInterval(() => {
  let date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);



//splide slider js
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.resort_banner_slide',{
  	  rewind: true,
      type: 'fade',
      autoplay: true,
      rewindSpeed: 10000,
      speed: 10000,
      pauseOnHover:false,
      fixedWidth : '100%',
      fixedHeight: 'auto',
  } );
  splide.mount();
} );


// start type write script
// <span id="typewriter" data-array=""></span>

// var typeWriterElement = document.getElementById('typewriter');

// var textArray = ["The most exotic resort in Bangladesh"];

// function delWriter(text, i, cb) {
//   if (i >= 0 ) {
//     typeWriterElement.innerHTML = text.substring(0, i--);
//     var rndBack = 10 + Math.random() * 100;
//     setTimeout(function() {
//       delWriter(text, i, cb);
//     },rndBack); 
//   } else if (typeof cb == 'function') {
//     setTimeout(cb,100);
//   }
// };


// function typeWriter(text, i, cb) {
//   if ( i < text.length+1 ) {
//     typeWriterElement.innerHTML = text.substring(0, i++);
//     var rndTyping = 250 - Math.random() * 100;
//     setTimeout( function () { 
//       typeWriter(text, i++, cb)
//     },rndTyping);
//   } else if (i === text.length+1) {
//     setTimeout( function () {
//       delWriter(text, i, cb)
//     },100);
//   }
// };

// function StartWriter(i) {
//   if (typeof textArray[i] == "undefined") {
//     setTimeout( function () {
//       StartWriter(0)
//     },100);
//   } else if(i < textArray[i].length+1) {
//     typeWriter(textArray[i], 0, function () {
//       StartWriter(i+1);
//     });
//   }  
// };
// setTimeout( function () {
//   StartWriter(0);
// },100);
  

// End type write script





// back to top btn
var t1 = 0;
window.onscroll = scroll1;

function scroll1() {
  var toTop = document.getElementById('toTop');
  window.scrollY > 45 ? toTop.style.display = 'Block' : toTop.style.display = 'none';
  
  // if (window.scrollY > 45) {
  //   toTop.style.display = "block";
  // }else{
  //    toTop.style.display = "none";
  // }

}

function abcd() {
  var y1 = window.scrollY;
  y1 = y1 - 1000;
  window.scrollTo(0, y1);
  if (y1 > 0) {
    t1 = setTimeout("abcd()", 50);
  } else {
    clearTimeout(t1);
  }
}

// tab js
document.getElementById("defaultOpen").click();
function tabOpener(evt, kat) {
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(kat).style.display = "block";
  evt.currentTarget.className += " active";
}




		




