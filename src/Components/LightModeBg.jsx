import { useEffect, useRef } from 'react'

export default function LightModeBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let w, h
    let particles = []

    class Circle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * w
        this.y = Math.random() * -h // start above screen
        this.size = Math.random() * 20 + 5
        this.speedY = Math.random() * 0.5 + 0.3
        this.speedX = Math.random() * 0.3 - 0.15
        this.opacity = Math.random() * 0.2 + 0.05

        const colors = [
          '99,102,241',   // indigo
          '139,92,246',   // purple
          '59,130,246',   // blue
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.y += this.speedY
        this.x += this.speedX

        if (this.y > h) {
          this.reset()
          this.y = -20
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`
        ctx.fill()
      }
    }

    function init() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight

      particles = []
      const count = Math.floor((w * h) / 20000) // LOW density

      for (let i = 0; i < count; i++) {
        particles.push(new Circle())
      }
    }

    function animate() {
      ctx.clearRect(0, 0, w, h)

      particles.forEach(p => {
        p.update()
        p.draw()
      })

      requestAnimationFrame(animate)
    }

    window.addEventListener('resize', init)

    init()
    animate()

    return () => {
      window.removeEventListener('resize', init)
    }
  }, [])

  return (
    <div className="bg-animation-light">
      <canvas ref={canvasRef} className="particles-canvas" />
    </div>
  )
}