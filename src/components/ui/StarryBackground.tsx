import React, { useEffect, useRef, useMemo } from 'react';

interface Star {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  delay: number;
}

const ShootingStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const createStar = (): Star => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.5,
      length: Math.random() * 80 + 40,
      speed: Math.random() * 3 + 2,
      opacity: Math.random() * 0.5 + 0.3,
      delay: Math.random() * 3000,
    });

    const stars: Star[] = Array.from({ length: 15 }, createStar);
    const startTimes = stars.map(() => Date.now());

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, index) => {
        const elapsed = Date.now() - startTimes[index];
        if (elapsed < star.delay) return;

        // Draw shooting star
        ctx.save();
        ctx.translate(star.x, star.y);
        ctx.rotate(Math.PI / 4);

        const gradient = ctx.createLinearGradient(0, 0, star.length, 0);
        gradient.addColorStop(0, 'rgba(240, 112, 10, 0)');
        gradient.addColorStop(0.5, `rgba(247, 185, 109, ${star.opacity * 0.8})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${star.opacity})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(star.length, 0);
        ctx.stroke();

        ctx.restore();

        // Update position
        star.x += star.speed;
        star.y += star.speed;

        // Reset star when it goes off screen
        if (star.x > canvas.width + star.length || star.y > canvas.height + star.length) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height * 0.5;
          star.length = Math.random() * 80 + 40;
          star.speed = Math.random() * 3 + 2;
          star.opacity = Math.random() * 0.5 + 0.3;
          startTimes[index] = Date.now();
          star.delay = Math.random() * 3000;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

// Static stars component - FIXED VERSION
const StaticStars: React.FC = () => {
  // useMemo untuk memoize posisi bintang agar tidak berubah saat re-render
  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      animationDelay: Math.random() * 3,
      animationDuration: Math.random() * 2 + 2,
    }));
  }, []); // Empty dependency array = hanya generate sekali

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

// Combined background component
const StarryBackground: React.FC = () => {
  return (
    <>
      <StaticStars />
      <ShootingStars />
    </>
  );
};

export default StarryBackground;