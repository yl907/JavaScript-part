// set up canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const ball_counter = document.querySelector('p');
let ball_number = 0;

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Shape {
    x;
    y;
    velX;
    velY;

    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }
}


class EvilCircle extends Shape {
    color;
    size;
    constructor(x, y) {
        super(x, y, 20, 20);
        this.color = "white";
        this.size = 10;
        
        // event listener is build in constructor? So when we create the object, it is bind with the event listener.
        window.addEventListener("keydown", (e) => {
            switch (e.key) {
              case "a":
                this.x -= this.velX;
                break;
              case "d":
                this.x += this.velX;
                break;
              case "w":
                this.y -= this.velY;
                break;
              case "s":
                this.y += this.velY;
                break;
            }
          });
    }

    draw() {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        // make the stroke thicker.
        ctx.lineWidth = 3;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
    }

    checkBounds() {
        if ((this.x + this.size) >= width) {
           this.x -= this.size;
        }
  
        if ((this.x - this.size) <= 0) {
            this.x += this.size;
        }
  
        if ((this.y + this.size) >= height) {
            this.y -= this.size;
        }
  
        if ((this.y - this.size) <= 0) {
            this.y += this.size;
        }
    }

     collisionDetect() {
        for (const ball of balls) {
            if (ball.exists) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
        
                if (distance < this.size + ball.size) {
                    ball.exists = false;
                    ball_number--;
                }
            }
        }
    }

    
}

class Ball extends Shape {
    exists;
    color;
    size;

    constructor(x, y, velX, velY, color, size) {
        super(x, y, velX, velY);
        this.exists = true;
        this.color = color;
        this.size = size;
        ball_number++;
   }

   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
   }

   update() {
      if ((this.x + this.size) >= width) {
         this.velX = -(Math.abs(this.velX));
      }

      if ((this.x - this.size) <= 0) {
         this.velX = Math.abs(this.velX);
      }

      if ((this.y + this.size) >= height) {
         this.velY = -(Math.abs(this.velY));
      }

      if ((this.y - this.size) <= 0) {
         this.velY = Math.abs(this.velY);
      }

      this.x += this.velX;
      this.y += this.velY;
   }

    collisionDetect() {
        for (const ball of balls) {
            if (!(this === ball) && ball.exists) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
        
                if (distance < this.size + ball.size) {
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }

}

// create balls to play!
const balls = [];

while (balls.length < 10) {
    const size = random(10,20);
    const ball = new Ball(
        // ball position always drawn at least one ball width
        // away from the edge of the canvas, to avoid drawing errors
        random(0 + size,width - size),
        random(0 + size,height - size),
        random(-7,7),
        random(-7,7),
        randomRGB(),
        size
    );

    balls.push(ball);
}

// object instance
const evilCircle = new EvilCircle(0.5 * width, 0.5 * height);

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0,  width, height);   

    for (const ball of balls) {
        if(ball.exists) {
            ball.draw();
            ball.update();
            ball.collisionDetect();
        }
    }

    evilCircle.draw();
    evilCircle.checkBounds();
    evilCircle.collisionDetect();

    ball_counter.textContent = `Ball count:${ball_number}`;

    requestAnimationFrame(loop);
}

loop();