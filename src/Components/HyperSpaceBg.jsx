import { useEffect, useRef } from "react";

export default function HyperSpaceBg() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null); //  add this

  useEffect(() => {
    const canvas = canvasRef.current;
    const glow = glowRef.current; //  get ref
    const ctx = canvas.getContext("2d", { alpha: false });

    let w, h;
    let lines = [];
    let cx, cy;
    let targetCx, targetCy;
    let speed = 8;

    class StarLine {
      constructor() {
        this.reset();
        this.z = Math.random() * w;
      }

      reset() {
        this.x = (Math.random() - 0.5) * w * 2;
        this.y = (Math.random() - 0.5) * h * 2;
        this.z = w;
        this.pz = this.z;

        const c = Math.random();
        if (c > 0.8) this.color = "#fff";
        else if (c > 0.4) this.color = "#00bfff";
        else this.color = "#2563eb";
      }

      update() {
        this.pz = this.z;
        this.z -= speed;

        if (this.z < 1) {
          this.reset();
          this.pz = this.z;
        }
      }

      draw() {
        const sx = (this.x / this.z) * w + cx;
        const sy = (this.y / this.z) * w + cy;
        const px = (this.x / this.pz) * w + cx;
        const py = (this.y / this.pz) * w + cy;

        const alpha = 1 - this.z / w;

        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = Math.max(0.5, (1 - this.z / w) * 3);
        ctx.stroke();
      }
    }

    function init() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;

      cx = targetCx = w / 2;
      cy = targetCy = h / 2;

      lines = [];
      const numLines = Math.floor((w * h) / 1200);

      for (let i = 0; i < numLines; i++) {
        lines.push(new StarLine());
      }
    }

    function animate() {
      ctx.fillStyle = "rgba(2, 6, 23, 0.2)";
      ctx.fillRect(0, 0, w, h);

      cx += (targetCx - cx) * 0.08;
      cy += (targetCy - cy) * 0.08;

      //  MOVE GLOW (FIX)
      if (glow) {
        glow.style.left = `${cx}px`;
        glow.style.top = `${cy}px`;
      }

      lines.forEach((line) => {
        line.update();
        line.draw();
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    }

    const handleMouseMove = (e) => {
      targetCx = e.clientX;
      targetCy = e.clientY;

      const dist =
        Math.abs(e.clientX - w / 2) + Math.abs(e.clientY - h / 2);
      speed = 6 + dist * 0.01;
    };

    window.addEventListener("resize", init);
    window.addEventListener("mousemove", handleMouseMove);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-animation">
      <canvas ref={canvasRef} className="tunnel-canvas" />
      <div className="warp-vignette"></div>
      <div ref={glowRef} className="center-glow"></div> {/*  attach ref */}
    </div>
  );
}