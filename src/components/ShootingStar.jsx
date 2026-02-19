import { useEffect, useRef } from "react";

const ShootingStars = () => {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");

    // Resize helper
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // ── Colour palette — brand blue + soft accents ──
    const COLORS = [
      "rgba(44, 176, 237, 1)",    // #2CB0ED  brand blue
      "rgba(157, 227, 252, 1)",   // light sky
      "rgba(6,  215, 156, 1)",    // teal accent
      "rgba(255, 255, 255, 1)",   // white
      "rgba(196, 181, 253, 1)",   // soft purple
    ];

    // ── Twinkle static background stars ──
    class Twinkle {
      constructor() { this.reset(true); }

      reset(init = false) {
        this.x     = Math.random() * canvas.width;
        this.y     = Math.random() * canvas.height;
        this.r     = Math.random() * 1.2 + 0.2;
        this.alpha = Math.random();
        this.speed = (Math.random() * 0.006 + 0.002) * (Math.random() < 0.5 ? 1 : -1);
        if (init) this.alpha = Math.random();
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, this.alpha));
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.alpha += this.speed;
        if (this.alpha <= 0 || this.alpha >= 1) this.speed *= -1;
      }
    }

    // ── Shooting star with glowing trail ──
    class ShootingStar {
      constructor() { this.reset(); }

      reset() {
        // Spawn from top-left region
        this.x      = Math.random() * canvas.width  * 0.6 - 80;
        this.y      = Math.random() * canvas.height * 0.4 - 80;
        this.size   = Math.random() * 3 + 1.5;
        this.speedX = Math.random() * 5  + 3;
        this.speedY = Math.random() * 3  + 1.5;
        this.color  = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.trail  = [];                     // stores past positions
        this.trailLen = Math.floor(Math.random() * 25 + 15); // 15–40 pts
        this.alpha  = 0;                      // fade in
        this.life   = 0;
        this.maxLife = Math.floor(Math.random() * 80 + 60);
        this.alive  = true;
      }

      draw() {
        if (this.trail.length < 2) return;

        // Draw trail as a tapered line
        for (let i = 1; i < this.trail.length; i++) {
          const t      = i / this.trail.length;           // 0→1 along trail
          const alpha  = t * this.alpha * 0.9;
          const width  = t * this.size * 1.8;

          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.strokeStyle = this.color;
          ctx.lineWidth   = width;
          ctx.lineCap     = "round";
          ctx.beginPath();
          ctx.moveTo(this.trail[i - 1].x, this.trail[i - 1].y);
          ctx.lineTo(this.trail[i].x,     this.trail[i].y);
          ctx.stroke();
          ctx.restore();
        }

        // Glowing head
        const grd = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3.5
        );
        grd.addColorStop(0,   this.color.replace("1)", "0.95)"));
        grd.addColorStop(0.4, this.color.replace("1)", "0.5)"));
        grd.addColorStop(1,   this.color.replace("1)", "0)"));

        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.life++;

        // Fade in / hold / fade out
        if (this.life < 12)
          this.alpha = this.life / 12;
        else if (this.life > this.maxLife - 18)
          this.alpha = Math.max(0, (this.maxLife - this.life) / 18);
        else
          this.alpha = 1;

        // Record trail
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > this.trailLen) this.trail.shift();

        this.x += this.speedX;
        this.y += this.speedY;

        // Mark dead when off-screen or max life reached
        if (
          this.life >= this.maxLife ||
          this.x > canvas.width  + 100 ||
          this.y > canvas.height + 100
        ) {
          this.alive = false;
        }
      }
    }

    // ── Particle burst when a star dies ──
    class Particle {
      constructor(x, y, color) {
        this.x     = x;
        this.y     = y;
        this.color = color;
        this.r     = Math.random() * 2 + 0.5;
        this.vx    = (Math.random() - 0.5) * 3;
        this.vy    = (Math.random() - 0.5) * 3;
        this.alpha = 1;
        this.decay = Math.random() * 0.04 + 0.02;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.x     += this.vx;
        this.y     += this.vy;
        this.alpha -= this.decay;
        this.vy    += 0.05; // gravity
      }
    }

    // ── Initialise pools ──
    const twinkles  = Array.from({ length: 120 }, () => new Twinkle());
    let   shooters  = Array.from({ length: 6  }, () => new ShootingStar());
    let   particles = [];

    // Spawn interval — add a new star every 1.2s
    const spawnInterval = setInterval(() => {
      if (shooters.filter(s => s.alive).length < 10)
        shooters.push(new ShootingStar());
    }, 1200);

    // ── Main animation loop ──
    const animate = () => {
      // Semi-transparent clear for motion blur effect
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Twinkle stars
      twinkles.forEach(t => { t.update(); t.draw(); });

      // Shooting stars
      shooters = shooters.filter(s => {
        if (!s.alive) {
          // Spawn burst particles at death position
          for (let i = 0; i < 6; i++)
            particles.push(new Particle(s.x, s.y, s.color));
          return false;
        }
        s.update();
        s.draw();
        return true;
      });

      // Particles
      particles = particles.filter(p => {
        if (p.alpha <= 0) return false;
        p.update();
        p.draw();
        return true;
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Resize
    const handleResize = () => {
      resize();
      twinkles.forEach(t => t.reset(true));
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(spawnInterval);
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         "100vw",
        height:        "100vh",
        pointerEvents: "none",
        zIndex:        0,
        opacity:       0.55,
      }}
    />
  );
};

export default ShootingStars;