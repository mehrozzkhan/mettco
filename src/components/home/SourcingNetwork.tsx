"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * SIGNATURE 1 — animated global sourcing network.
 * Lahore origin node; supply-lane arcs draw outward (Framer Motion pathLength),
 * "verified" pulses travel each lane (SMIL animateMotion), nodes pulse staggered.
 * Static fallback when prefers-reduced-motion.
 */

const ORIGIN = { x: 560, y: 360, label: "Lahore" };

const NODES = [
  { id: "rotterdam", label: "Rotterdam", x: 80, y: 110, delay: 0.75 },
  { id: "istanbul", label: "Istanbul", x: 235, y: 215, delay: 0.9 },
  { id: "dubai", label: "Dubai", x: 375, y: 455, delay: 1.05 },
  { id: "shanghai", label: "Shanghai", x: 850, y: 205, delay: 1.2 },
  { id: "tokyo", label: "Tokyo", x: 945, y: 105, delay: 1.35 },
  { id: "singapore", label: "Singapore", x: 790, y: 505, delay: 1.5 },
];

function lane(to: { x: number; y: number }) {
  const mx = (ORIGIN.x + to.x) / 2;
  const lift = Math.abs(ORIGIN.x - to.x) * 0.22 + 40;
  const my = Math.min(ORIGIN.y, to.y) - lift;
  return `M ${ORIGIN.x} ${ORIGIN.y} Q ${mx} ${my} ${to.x} ${to.y}`;
}

const CYAN = "#4FA8C4";
const ORANGE = "#FF5A1F";
const MUTED = "#5C6672";

export function SourcingNetwork({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 1020 620"
      fill="none"
      aria-hidden
      className={className}
    >
      {/* Range rings around origin — quiet radar/engineering texture */}
      {[70, 150, 240].map((r, i) => (
        <motion.circle
          key={r}
          cx={ORIGIN.x}
          cy={ORIGIN.y}
          r={r}
          stroke={MUTED}
          strokeOpacity={0.22 - i * 0.05}
          strokeWidth="1"
          strokeDasharray="2 6"
          initial={reduce ? undefined : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" }}
          style={{ transformOrigin: `${ORIGIN.x}px ${ORIGIN.y}px` }}
        />
      ))}

      {/* Supply lanes — draw outward from Lahore */}
      {NODES.map((n) => (
        <motion.path
          key={`lane-${n.id}`}
          d={lane(n)}
          stroke={CYAN}
          strokeOpacity={0.38}
          strokeWidth="1.2"
          initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 1.4, delay: n.delay, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.3, delay: n.delay },
          }}
        />
      ))}

      {/* Verified pulses traveling each lane */}
      {!reduce &&
        NODES.map((n, i) => (
          <motion.circle
            key={`pulse-${n.id}`}
            r="3.2"
            fill={ORANGE}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 3.2,
              delay: n.delay + 1.2,
              repeat: Infinity,
              repeatDelay: 1.6,
              times: [0, 0.12, 0.85, 1],
            }}
          >
            <animateMotion
              dur="4.8s"
              begin={`${n.delay + 1.2}s`}
              repeatCount="indefinite"
              path={lane(n)}
              keyPoints="0;0.667;0.667"
              keyTimes="0;0.667;1"
              calcMode="linear"
            />
          </motion.circle>
        ))}

      {/* Destination nodes + labels */}
      {NODES.map((n) => (
        <motion.g
          key={`node-${n.id}`}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: n.delay + 1.1 }}
        >
          {!reduce && (
            <motion.circle
              cx={n.x}
              cy={n.y}
              r="4"
              fill="none"
              stroke={CYAN}
              strokeWidth="1"
              animate={{ scale: [1, 2.6], opacity: [0.7, 0] }}
              transition={{
                duration: 2.4,
                delay: n.delay + 1.4,
                repeat: Infinity,
                repeatDelay: 1.4,
                ease: "easeOut",
              }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
          )}
          <circle cx={n.x} cy={n.y} r="3.5" fill={CYAN} />
          <text
            x={n.x}
            y={n.y - 14}
            textAnchor="middle"
            fill={MUTED}
            fontSize="11"
            letterSpacing="0.18em"
            className="font-mono uppercase"
          >
            {n.label.toUpperCase()}
          </text>
        </motion.g>
      ))}

      {/* Origin — Lahore */}
      <motion.g
        initial={reduce ? undefined : { opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: `${ORIGIN.x}px ${ORIGIN.y}px` }}
      >
        {!reduce && (
          <motion.circle
            cx={ORIGIN.x}
            cy={ORIGIN.y}
            r="7"
            fill="none"
            stroke={ORANGE}
            strokeWidth="1.4"
            animate={{ scale: [1, 3], opacity: [0.8, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: 1 }}
            style={{ transformOrigin: `${ORIGIN.x}px ${ORIGIN.y}px` }}
          />
        )}
        <circle cx={ORIGIN.x} cy={ORIGIN.y} r="6" fill={ORANGE} />
        <circle cx={ORIGIN.x} cy={ORIGIN.y} r="11" fill="none" stroke={ORANGE} strokeOpacity="0.4" strokeWidth="1.2" />
        <text
          x={ORIGIN.x}
          y={ORIGIN.y + 30}
          textAnchor="middle"
          fill="#F3F5F7"
          fontSize="12"
          fontWeight="600"
          letterSpacing="0.2em"
          className="font-mono uppercase"
        >
          {ORIGIN.label.toUpperCase()}
        </text>
        <text
          x={ORIGIN.x}
          y={ORIGIN.y + 46}
          textAnchor="middle"
          fill={MUTED}
          fontSize="9.5"
          letterSpacing="0.16em"
          className="font-mono uppercase"
        >
          ORIGIN · PK
        </text>
      </motion.g>
    </svg>
  );
}
