import { useEffect, useRef } from "react";

const ShootingStars = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars = [];

        class Star {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * -100; // Start from left outside screen
                this.y = Math.random() * -100; // Start slightly above screen
                this.size = Math.random() * 5 + 1; // Small dot size
                this.speedX = Math.random() * 2 + 2; // Move right
                this.speedY = Math.random() * 2 + 1; // Move downward
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = "#C084FC";
                ctx.fill();
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width || this.y > canvas.height) {
                    this.reset(); // Restart when out of screen
                }
            }
        }

        // Create dots
        for (let i = 0; i < 15; i++) {
            stars.push(new Star());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                star.update();
                star.draw();
            });

            requestAnimationFrame(animate);
        };

        animate();

        // Resize event to update canvas size
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                zIndex: -1,
            }}
        />
    );
};

export default ShootingStars;
