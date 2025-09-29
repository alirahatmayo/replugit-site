'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = svgRef.current
    const LOOP_DUR = 20.0
    const IDLE_TAIL = 1.0
    const SCALE = 0.4
    const WIDTH = 1200, HEIGHT = 400
    const MARGIN_X = 40, MARGIN_Y = 40
    const devices = [
      { id: 'dev-laptop', dur: 3.0 },
      { id: 'dev-phone', dur: 3.0 },
      { id: 'dev-tablet', dur: 3.0 },
      { id: 'dev-watch', dur: 2.0 },
      { id: 'dev-monitor', dur: 2.5 },
      { id: 'dev-earbuds', dur: 2.0 },
      { id: 'dev-controller', dur: 2.0 }
    ]

    function rand(min: number, max: number) { return Math.random() * (max - min) + min }
    function shuffle<T>(arr: T[]): T[] {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
      return arr
    }

    function scheduleAndPlace() {
      const loop = svg.querySelector('#loop') as SVGAnimateElement
      const order = shuffle(devices.slice())
      let t = 0
      for (const d of order) {
        const gap = Math.max(0.1, Math.min(0.5, rand(0.12, 0.45), (LOOP_DUR - IDLE_TAIL) - t - d.dur))
        const start = t + gap
        t = start + d.dur

        const g = svg.querySelector(`#${d.id}`) as SVGGElement
        if (!g) continue
        
        const maxX = WIDTH - 200
        const maxY = HEIGHT - 160
        const x = Math.max(MARGIN_X, Math.min(maxX, rand(MARGIN_X, maxX)))
        const y = Math.max(MARGIN_Y, Math.min(maxY, rand(MARGIN_Y, maxY)))
        g.setAttribute('transform', `translate(${x.toFixed(1)},${y.toFixed(1)}) scale(${SCALE})`)

        const path = g.querySelector('path')
        if (path) {
          const drawAnim = path.querySelector('animate[attributeName="stroke-dashoffset"]') as SVGAnimateElement
          if (drawAnim) drawAnim.setAttribute('begin', `loop.begin+${start.toFixed(2)}s`)
        }
        const circle = g.querySelector('circle')
        if (circle) {
          const opa = circle.querySelector('animate[attributeName="opacity"]') as SVGAnimateElement
          if (opa) opa.setAttribute('begin', `loop.begin+${start.toFixed(2)}s`)
          const mot = circle.querySelector('animateMotion') as SVGAnimateMotionElement
          if (mot) mot.setAttribute('begin', `loop.begin+${start.toFixed(2)}s`)
        }
      }
    }

    function runCycle() {
      scheduleAndPlace()
      const loop = svg.querySelector('#loop') as SVGAnimateElement
      if (loop && loop.beginElement) loop.beginElement()
    }

    const loop = svg.querySelector('#loop') as SVGAnimateElement
    if (loop) {
      loop.addEventListener('endEvent', runCycle)
    }
    runCycle()

    return () => {
      if (loop) {
        loop.removeEventListener('endEvent', runCycle)
      }
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      style={{ display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role="img"
      aria-labelledby="title desc"
      className="opacity-20"
    >
      <title id="title">Refurb Tech Line Animation</title>
      <desc id="desc">A line draws multiple electronic devices in random sequence and random positions with subtle motion accents.</desc>

      <defs>
        <style>{`
          .line { fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; vector-effect: non-scaling-stroke; }
          .pulse { opacity: 0.8; }
          .fade { opacity: 0; }
        `}</style>
        
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#ff6b6b', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#4ecdc4', stopOpacity: 1 }} />
        </linearGradient>
        
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#a8e6cf', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#ffd93d', stopOpacity: 1 }} />
        </linearGradient>
        
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#74b9ff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#fd79a8', stopOpacity: 1 }} />
        </linearGradient>
        
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#00b894', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#e17055', stopOpacity: 1 }} />
        </linearGradient>
        
        <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#6c5ce7', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#a29bfe', stopOpacity: 1 }} />
        </linearGradient>
        
        <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#fd79a8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#fdcb6e', stopOpacity: 1 }} />
        </linearGradient>
        
        <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#00cec9', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#55a3ff', stopOpacity: 1 }} />
        </linearGradient>
        
        <linearGradient id="ecoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#16a34a', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
        </linearGradient>
        
        <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="0" y="0" width="1200" height="400" fill="#f8fafc"/>

      <g opacity="0.16" transform="translate(70,275) scale(0.9) rotate(-12 60 60)">
        <path id="eco-leaf-2" className="line" stroke="url(#ecoGrad)" strokeWidth="1.6"
              d="M 50 20 C 95 30 115 70 80 105 C 45 140 15 130 12 85 C 10 45 22 28 50 20 Z
                 M 48 22 C 43 58 40 86 26 110"
              pathLength="520" strokeDasharray="520" strokeDashoffset="520">
          <animate attributeName="stroke-dashoffset" from="520" to="0" dur="2s" begin="0.8s" fill="freeze"/>
        </path>
      </g>

      <rect width="0" height="0" fill="none" opacity="0">
        <animate id="loop" attributeName="width" from="0" to="0" dur="20s" begin="indefinite"/>
      </rect>

      {/* LAPTOP */}
      <g id="dev-laptop" transform="translate(120,60) scale(0.4)">
        <path id="path-laptop" className="line"
              stroke="url(#grad1)"
              d="M 40 20 H 320 V 200 H 40 Z
                 M 40 200 L 20 230 H 340 L 320 200
                 M 60 230 H 300"
              pathLength="1000"
              strokeDasharray="1000"
              strokeDashoffset="1000">
          <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="3s" begin="loop.begin+0s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.2 1"/>
        </path>
        <circle className="pulse" r="4" fill="url(#grad1)" filter="url(#pulseGlow)" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="3s" begin="loop.begin+0s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"/>
          <animateMotion dur="3s" begin="loop.begin+0s" fill="freeze" rotate="auto">
            <mpath xlinkHref="#path-laptop"/>
          </animateMotion>
        </circle>
      </g>

      {/* PHONE */}
      <g id="dev-phone" transform="translate(520,75) scale(0.4)">
        <path id="path-phone" className="line"
              stroke="url(#grad2)"
              d="M 80 0
                 h 120
                 a 16 16 0 0 1 16 16
                 v 208
                 a 16 16 0 0 1 -16 16
                 h -120
                 a 16 16 0 0 1 -16 -16
                 v -208
                 a 16 16 0 0 1 16 -16
                 Z
                 M 88 28 H 192 V 212 H 88 Z
                 M 155 16 a 2 2 0 1 1 -0.01 0"
              pathLength="1000"
              strokeDasharray="1000"
              strokeDashoffset="1000">
          <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="3s" begin="loop.begin+3.2s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.2 1"/>
        </path>
        <circle className="pulse" r="4" fill="url(#grad2)" filter="url(#pulseGlow)" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="3s" begin="loop.begin+3.2s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"/>
          <animateMotion dur="3s" begin="loop.begin+3.2s" fill="freeze" rotate="auto">
            <mpath xlinkHref="#path-phone"/>
          </animateMotion>
        </circle>
      </g>

      {/* TABLET */}
      <g id="dev-tablet" transform="translate(830,60) scale(0.4)">
        <path id="path-tablet" className="line"
              stroke="url(#grad3)"
              d="M 10 10
                 h 260
                 a 20 20 0 0 1 20 20
                 v 240
                 a 20 20 0 0 1 -20 20
                 h -260
                 a 20 20 0 0 1 -20 -20
                 v -240
                 a 20 20 0 0 1 20 -20
                 Z
                 M 30 40 H 250 V 240 H 30 Z
                 M 150 262 a 5 5 0 1 1 -0.01 0"
              pathLength="1000"
              strokeDasharray="1000"
              strokeDashoffset="1000">
          <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="3s" begin="loop.begin+6.4s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.2 1"/>
        </path>
        <circle className="pulse" r="4" fill="url(#grad3)" filter="url(#pulseGlow)" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="3s" begin="loop.begin+6.4s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"/>
          <animateMotion dur="3s" begin="loop.begin+6.4s" fill="freeze" rotate="auto">
            <mpath xlinkHref="#path-tablet"/>
          </animateMotion>
        </circle>
      </g>

      {/* SMARTWATCH */}
      <g id="dev-watch" transform="translate(100,320) scale(0.4)">
        <path id="path-watch" className="line"
              stroke="url(#grad4)"
              d="M 40 20
                 h 80
                 a 15 15 0 0 1 15 15
                 v 50
                 a 15 15 0 0 1 -15 15
                 h -80
                 a 15 15 0 0 1 -15 -15
                 v -50
                 a 15 15 0 0 1 15 -15
                 Z
                 M 45 30 H 115 V 75 H 45 Z"
              pathLength="800"
              strokeDasharray="800"
              strokeDashoffset="800">
          <animate attributeName="stroke-dashoffset" from="800" to="0" dur="2s" begin="loop.begin+9.8s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.2 1"/>
        </path>
        <circle className="pulse" r="4" fill="url(#grad4)" filter="url(#pulseGlow)" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="2s" begin="loop.begin+9.8s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"/>
          <animateMotion dur="2s" begin="loop.begin+9.8s" fill="freeze" rotate="auto">
            <mpath xlinkHref="#path-watch"/>
          </animateMotion>
        </circle>
      </g>

      {/* DESKTOP MONITOR */}
      <g id="dev-monitor" transform="translate(400,280) scale(0.4)">
        <path id="path-monitor" className="line"
              stroke="url(#grad5)"
              d="M 20 20 H 280 V 180 H 20 Z
                 M 140 180 L 130 200 H 170 L 160 180
                 M 110 200 H 190"
              pathLength="900"
              strokeDasharray="900"
              strokeDashoffset="900">
          <animate attributeName="stroke-dashoffset" from="900" to="0" dur="2.5s" begin="loop.begin+12s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.2 1"/>
        </path>
        <circle className="pulse" r="4" fill="url(#grad5)" filter="url(#pulseGlow)" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="2.5s" begin="loop.begin+12s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"/>
          <animateMotion dur="2.5s" begin="loop.begin+12s" fill="freeze" rotate="auto">
            <mpath xlinkHref="#path-monitor"/>
          </animateMotion>
        </circle>
      </g>

      {/* EARBUDS */}
      <g id="dev-earbuds" transform="translate(750,320) scale(0.4)">
        <path id="path-earbuds" className="line"
              stroke="url(#grad6)"
              d="M 20 30 
                 a 15 15 0 1 1 0 30
                 a 15 15 0 1 1 0 -30
                 M 35 45 Q 60 35 85 45
                 M 85 30
                 a 15 15 0 1 1 0 30
                 a 15 15 0 1 1 0 -30"
              pathLength="600"
              strokeDasharray="600"
              strokeDashoffset="600">
          <animate attributeName="stroke-dashoffset" from="600" to="0" dur="2s" begin="loop.begin+14.8s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.2 1"/>
        </path>
        <circle className="pulse" r="4" fill="url(#grad6)" filter="url(#pulseGlow)" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="2s" begin="loop.begin+14.8s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"/>
          <animateMotion dur="2s" begin="loop.begin+14.8s" fill="freeze" rotate="auto">
            <mpath xlinkHref="#path-earbuds"/>
          </animateMotion>
        </circle>
      </g>

      {/* GAMING CONTROLLER */}
      <g id="dev-controller" transform="translate(950,300) scale(0.4)">
        <path id="path-controller" className="line"
              stroke="url(#grad7)"
              d="M 30 40
                 Q 20 30 30 20
                 H 100
                 Q 110 30 100 40
                 Q 110 50 100 60
                 H 30
                 Q 20 50 30 40
                 Z
                 M 40 35 a 3 3 0 1 1 0 0.01
                 M 50 35 a 3 3 0 1 1 0 0.01
                 M 80 30 a 2 2 0 1 1 0 0.01
                 M 90 35 a 2 2 0 1 1 0 0.01"
              pathLength="700"
              strokeDasharray="700"
              strokeDashoffset="700">
          <animate attributeName="stroke-dashoffset" from="700" to="0" dur="2s" begin="loop.begin+17s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.2 1"/>
        </path>
        <circle className="pulse" r="4" fill="url(#grad7)" filter="url(#pulseGlow)" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="2s" begin="loop.begin+17s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"/>
          <animateMotion dur="2s" begin="loop.begin+17s" fill="freeze" rotate="auto">
            <mpath xlinkHref="#path-controller"/>
          </animateMotion>
        </circle>
      </g>
    </svg>
  )
}
