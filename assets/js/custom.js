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
var allHasChildren = document.querySelectorAll(".book-search-btn");
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



//splide home banner slider js
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.resort_banner_slide',{
  	  rewind: true,
      type: 'fade',
      autoplay: true,
      rewindSpeed: 1000,
      speed: 500,
      pauseOnHover:false,
      fixedWidth : '100%',
      fixedHeight: 'auto',
  } );
  splide.mount();
} );

//splide home banner slider js
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.dts_banner_slide',{
      rewind: true,
      type: 'loop',
      autoplay: true,
      rewindSpeed: 1000,
      speed: 500,
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


// modal js
const modals = document.querySelectorAll("[data-modal]");

modals.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add("open");
    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("open");
      });
    });
  });
});


// gallery popup js
class AsyncGallery {
  constructor(settings) {
    this.settings = {
      images: ".gallery__Image",
      loop: true,
      next: undefined,
      prev: undefined,
      dots: undefined,
      close: undefined,
      loader: undefined,
      counter: undefined,
      counterDivider: "/",
      keyboardNavigation: true,
      hiddenElements: []
    };

    Object.assign(this.settings, settings);

    this.gallery = null;
    this.index = 0;
    this.items = [...document.querySelectorAll(this.settings.images)];

    this.addedItems = {};

    this.touch = {
      endX: 0,
      startX: 0
    };

    this.init();
  }

  get loading() {
    return !this.settings.hiddenElements.includes("loader");
  }

  get dotsVisible() {
    return !this.settings.hiddenElements.includes("dots");
  }

  init() {
    this.clearUncomplete();
    this.createElements();
    this.bindEvents();
  }

  clearUncomplete() {
    this.items = this.items.filter(item => {
      return item.dataset.large;
    });
  }

  createElements() {
    this.gallery = document.createElement("DIV");
    this.gallery.classList.add("asyncGallery");

    this.createSingleElement({
      element: "prev",
      type: "BUTTON",
      event: "click",
      func: this.getPrevious
    });

    this.createSingleElement({
      element: "next",
      type: "BUTTON",
      event: "click",
      func: this.getNext
    });

    this.createSingleElement({
      element: "close",
      type: "BUTTON",
      event: "click",
      func: this.closeGallery
    });

    this.createSingleElement({
      element: "loader",
      type: "SPAN",
      text: "Loading..."
    });

    this.createSingleElement({
      element: "counter",
      type: "SPAN",
      text: "0/0"
    });

    this.createSingleElement({
      element: "dots",
      type: "UL",
      text: ""
    });

    if (!this.settings.hiddenElements.includes("dots")) {
      this.items.forEach((item, i) => {
        let dot = document.createElement("LI");
        dot.dataset.index = i;
        let button = document.createElement("BUTTON");
        button.innerHTML = i;
        button.addEventListener("click", () => {
          this.index = i;
          this.getItem(i);
        });

        dot.append(button);
        this.dots.append(dot);
      });
    }

    window.document.body.append(this.gallery);
  }

  createSingleElement({ element, type, event = "click", func, text }) {
    if (!this.settings.hiddenElements.includes(element)) {
      if (!this.settings[element]) {
        this[element] = document.createElement(type);
        this[element].classList.add(
          `asyncGallery__${this.capitalizeFirstLetter(element)}`
        );
        this[element].innerHTML = text !== undefined ? text : element;
        this.gallery.append(this[element]);
      } else {
        this[element] = document.querySelector(this.settings[element]);
        this.gallery.append(this[element]);
      }

      if (func) {
        this[element].addEventListener(event, func.bind(this));
      }
    }
  }

  getItem(i, content = null) {
    let contentObj = content;
    if (contentObj === null) {
      contentObj = {};
      contentObj.src = this.items[i].dataset.large;
      contentObj.description = this.items[i].dataset.description;
    }

    if (!this.settings.hiddenElements.includes("counter")) {
      this.counter.innerHTML = `
          <span class="asyncGallery__Current">${this.index + 1}</span>${
        this.settings.counterDivider
      }<span class="asyncGallery__Current">${this.items.length}</span>
          `;
    }

    if (!this.addedItems.hasOwnProperty(i)) {
      let image = document.createElement("IMG");

      let galleryItem = document.createElement("DIV");
      galleryItem.classList.add("asyncGallery__Item");

      if (this.loading) {
        this.loader.classList.add("is-visible");
      }

      this.clearVisible();

      if (this.dotsVisible) {
        this.gallery
          .querySelector(`.asyncGallery__Dots li[data-index="${i}"]`)
          .classList.add("is-active");
      }

      image.src = contentObj.src;
      image.alt = contentObj.description ? contentObj.description : "";

      galleryItem.innerHTML = `
          <div class="asyncGallery__ItemImage">
            ${image.outerHTML}
          </div>
          `;

      if (contentObj.description) {
        galleryItem.innerHTML += `
            <div class="asyncGallery__ItemDescription">
              <p>${contentObj.description}</p>
            </div>
            `;
      }

      this.gallery.append(galleryItem);
      this.addedItems[i] = galleryItem;

      image.addEventListener("load", () => {
        this.addedItems[i].loaded = true;
        if (!this.gallery.querySelector(".asyncGallery__Item.is-visible")) {
          this.addedItems[i].classList.add("is-visible");
        }

        if (this.loading) {
          this.loader.classList.remove("is-visible");
        }
      });
    } else {
      this.clearVisible();
      if (this.addedItems[this.index].loaded) {
        this.addedItems[this.index].classList.add("is-visible");
        if (this.loading) {
          this.loader.classList.remove("is-visible");
        }
      } else if (this.loading) {
        this.loader.classList.add("is-visible");
      }

      if (this.dotsVisible) {
        this.gallery
          .querySelector(`.asyncGallery__Dots li[data-index="${i}"]`)
          .classList.add("is-active");
      }
    }

    if (!this.settings.loop) {
      if (this.index === 0) this.prev.setAttribute("disabled", true);
      else this.prev.removeAttribute("disabled");

      if (this.index === this.items.length - 1)
        this.next.setAttribute("disabled", true);
      else this.next.removeAttribute("disabled");
    }
  }

  clearVisible() {
    if (this.gallery.querySelector(".asyncGallery__Item.is-visible")) {
      this.gallery
        .querySelector(".asyncGallery__Item.is-visible")
        .classList.remove("is-visible");
    }

    if (this.gallery.querySelector(".asyncGallery__Dots li.is-active")) {
      this.gallery
        .querySelector(".asyncGallery__Dots li.is-active")
        .classList.remove("is-active");
    }
  }

  closeGallery() {
    this.gallery.classList.remove("is-visible");
    this.clearVisible();
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  handleGesure() {
    if (this.touch.endX > this.touch.startX + 20) {
      this.getPrevious();
    } else if (this.touch.endX < this.touch.startX - 20) {
      this.getNext();
    }
  }

  getPrevious() {
    if (this.settings.loop) {
      this.index--;
      if (this.index === -1) {
        this.index = this.items.length - 1;
      }
      this.getItem(this.index);
    } else if (this.index > 0) {
      this.index--;
      this.getItem(this.index);
    }
  }

  getNext() {
    if (this.settings.loop) {
      this.index++;
      if (this.index === this.items.length) {
        this.index = 0;
      }
      this.getItem(this.index);
    } else if (this.index < this.items.length - 1) {
      this.index++;
      this.getItem(this.index);
    }
  }

  bindEvents() {
    this.items.forEach((item, i) => {
      item.addEventListener("click", e => {
        this.gallery.classList.add("is-visible");
        this.index = i;
        this.getItem(i, {
          src: e.target.dataset.large,
          description: e.target.dataset.description
        });
      });
    });

    document.addEventListener("keyup", e => {
      if (this.gallery.classList.contains("is-visible")) {
        if (e.key === "Escape") this.closeGallery();
        if (this.settings.keyboardNavigation) {
          if (e.keyCode === 39) this.getNext();
          else if (e.keyCode === 37) this.getPrevious();
        }
      }
    });

    this.gallery.addEventListener(
      "touchstart",
      e => {
        this.touch.startX = e.changedTouches[0].screenX;
      },
      false
    );

    this.gallery.addEventListener(
      "touchend",
      e => {
        this.touch.endX = e.changedTouches[0].screenX;
        this.handleGesure();
      },
      false
    );
  }
}

new AsyncGallery();

// gallery popup js



		




