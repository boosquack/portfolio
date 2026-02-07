"use client";

import { useCallback, useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

interface Stroke {
  points: Point[];
  createdAt: number;
  opacity: number;
}

const HIGHLIGHT_COLOR = "255, 241, 118"; // #FFF176
const HIGHLIGHT_OPACITY = 0.4;
const LINE_WIDTH = 20;
const STROKE_LIFETIME = 5000; // ms

export default function HighlighterCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const strokesRef = useRef<Stroke[]>([]);
  const isDrawingRef = useRef(false);
  const animFrameRef = useRef<number>(0);
  const dprRef = useRef(1);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    dprRef.current = dpr;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
  }, []);

  const drawStrokes = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const now = Date.now();
    const dpr = dprRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    strokesRef.current = strokesRef.current.filter((stroke) => {
      // Active stroke (still being drawn) — always keep it
      const isActive =
        isDrawingRef.current &&
        stroke === strokesRef.current[strokesRef.current.length - 1];

      if (isActive) {
        stroke.opacity = HIGHLIGHT_OPACITY;
      } else {
        const elapsed = now - stroke.createdAt;
        if (elapsed > STROKE_LIFETIME) return false;
        stroke.opacity = HIGHLIGHT_OPACITY;
      }

      // Need at least 2 points to draw a line, but keep the stroke alive
      if (stroke.points.length < 2) return true;

      ctx.beginPath();
      ctx.strokeStyle = `rgba(${HIGHLIGHT_COLOR}, ${stroke.opacity})`;
      ctx.lineWidth = LINE_WIDTH * dpr;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const sx = window.scrollX;
      const sy = window.scrollY;
      ctx.moveTo((stroke.points[0].x - sx) * dpr, (stroke.points[0].y - sy) * dpr);
      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo((stroke.points[i].x - sx) * dpr, (stroke.points[i].y - sy) * dpr);
      }
      ctx.stroke();

      return true;
    });

    if (strokesRef.current.length > 0) {
      animFrameRef.current = requestAnimationFrame(drawStrokes);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animFrameRef.current = 0;
    }
  }, []);

  const ensureAnimating = useCallback(() => {
    if (!animFrameRef.current) {
      animFrameRef.current = requestAnimationFrame(drawStrokes);
    }
  }, [drawStrokes]);

  useEffect(() => {
    resizeCanvas();

    const handleResize = () => resizeCanvas();

    const getPoint = (e: MouseEvent | Touch): Point => ({
      x: e.clientX + window.scrollX,
      y: e.clientY + window.scrollY,
    });

    const handleMouseDown = (e: MouseEvent) => {
      isDrawingRef.current = true;
      document.body.style.userSelect = "none";
      strokesRef.current.push({
        points: [getPoint(e)],
        createdAt: Date.now(),
        opacity: HIGHLIGHT_OPACITY,
      });
      ensureAnimating();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDrawingRef.current) return;
      const current = strokesRef.current[strokesRef.current.length - 1];
      if (current) {
        current.points.push(getPoint(e));
        ensureAnimating();
      }
    };

    const handleMouseUp = () => {
      if (!isDrawingRef.current) return;
      isDrawingRef.current = false;
      document.body.style.userSelect = "";
      // Reset createdAt so fade starts from release time
      const current = strokesRef.current[strokesRef.current.length - 1];
      if (current) {
        current.createdAt = Date.now();
      }
      ensureAnimating();
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      isDrawingRef.current = true;
      strokesRef.current.push({
        points: [getPoint(touch)],
        createdAt: Date.now(),
        opacity: HIGHLIGHT_OPACITY,
      });
      ensureAnimating();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDrawingRef.current) return;
      const touch = e.touches[0];
      if (!touch) return;
      const current = strokesRef.current[strokesRef.current.length - 1];
      if (current) {
        current.points.push(getPoint(touch));
        ensureAnimating();
      }
    };

    const handleTouchEnd = () => {
      if (!isDrawingRef.current) return;
      isDrawingRef.current = false;
      const current = strokesRef.current[strokesRef.current.length - 1];
      if (current) {
        current.createdAt = Date.now();
      }
      ensureAnimating();
    };

    const handleScroll = () => ensureAnimating();

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.documentElement);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [resizeCanvas, ensureAnimating, drawStrokes]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
