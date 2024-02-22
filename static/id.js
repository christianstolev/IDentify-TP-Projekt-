particlesJS("particles-js", {
  "particles": {
      // Configuration for the particles
      "number": {
          "value": 80, // Number of particles
          "density": {
              "enable": true,
              "value_area": 800 // Density of particles on the canvas
          }
      },
      "color": {
          "value": "#e3108d" // Color of particles
      },
      "shape": {
          "type": "circle", // Shape of particles
          "stroke": {
              "width": 3,
              "color": "#d000ff" // Stroke properties for particles
          },
          "polygon": {
              "nb_sides": 5 // Number of sides for polygon particles
          },
          "image": {
              "src": "img/github.svg", // Image source for particles
              "width": 100,
              "height": 100 // Width and height of image particles
          }
      },
      "opacity": {
          "value": 0.288, // Opacity value of particles
          "random": true,
          "anim": {
              "enable": false, // Animation properties for opacity
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 8, // Size of particles
          "random": true,
          "anim": {
              "enable": false, // Animation properties for size
              "speed": 40,
              "size_min": 0.1,
              "sync": false
          }
      },
      "line_linked": {
          "enable": true,
          "distance": 150, // Distance for connecting lines between particles
          "color": "#ffffff", // Color of the connecting lines
          "opacity": 0.4,
          "width": 1 // Width of the connecting lines
      },
      "move": {
          "enable": true,
          "speed": 6, // Speed of particle movement
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200 // Attraction properties for particle movement
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          // Interactivity events configuration
          "onhover": {
              "enable": true,
              "mode": "repulse" // On hover interaction mode
          },
          "onclick": {
              "enable": true,
              "mode": "push" // On click interaction mode
          },
          "resize": true // Resize event
      },
      "modes": {
          // Interaction modes configuration
          "grab": {
              "distance": 400,
              "line_linked": {
                  "opacity": 1 // Grab interaction settings
              }
          },
          "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3 // Bubble interaction settings
          },
          "repulse": {
              "distance": 200,
              "duration": 0.4 // Repulse interaction settings
          },
          "push": {
              "particles_nb": 4 // Push interaction settings
          },
          "remove": {
              "particles_nb": 2 // Remove interaction settings
          }
      }
  },
  "retina_detect": true // Retina display detection
});

// Handling touch events
$(document).on("touchstart", function (e) {
  let x;
  let y;
  if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
      var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      x = touch.pageX;
      y = touch.pageY; // Getting touch coordinates
  } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave') {
      x = e.clientX;
      y = e.clientY; // Getting mouse coordinates
  }
  x = x - 65; // Adjusting for image position
  y = y - 65;
 
  let html = `
      <img class="scale-in-center_01 fade-out" style="height: 130px; position: absolute; top: ${y}px; left: ${x}px;" src="/static/images/circle.png" alt="">
      <img class="scale-in-center_02 fade-out" style="height: 130px; position: absolute; top: ${y}px; left: ${x}px;" src="/static/images/circle2.png" alt="">
      <img class="scale-in-center_03 fade-out" style="height: 130px; position: absolute; top: ${y}px; left: ${x}px;" src="/static/images/circle3.png" alt="">
  `; // HTML content for displaying images at clicked position

  $("#main").append(html); // Appending HTML content to an element with id "main"
});

window.addEventListener("click", function (e) {
  // Handling click events
  // Not implemented due to touch start handling this event already.
});
