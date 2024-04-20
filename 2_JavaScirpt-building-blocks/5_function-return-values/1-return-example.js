// Using return values in your own functions
// To return a value from a custom function, you need to use the return keyword. We saw this in action recently in our random-canvas-circles.html example. Our draw() function draws 100 random circles somewhere on an HTML <canvas>:
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
// The random() function takes one parameter — a whole number — and returns a whole random number between 0 and that number. It looks like this:
function random(number) {
    return Math.floor(Math.random() * number);
  }
// when you execute the following:
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
// If the three random() calls return the values 500, 200, and 35, respectively, the line would actually be run as if it were this:
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
// The function calls on the line are run first, and their return values are substituted for the function calls, before the line itself is then executed.
