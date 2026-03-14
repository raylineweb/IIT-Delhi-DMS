"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface SegmentedProgressProps {
  value?: number
  segments?: number
  label?: string
  showPercentage?: boolean
  showDemo?: boolean
  className?: string
  color?: string
}

export function SegmentedProgress({
  value: initialValue = 80,
  segments = 20,
  label,
  showPercentage = true,
  showDemo = false,
  className,
  color,
}: SegmentedProgressProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const animationRef = useRef<number | null>(null)
  const startValueRef = useRef(0)
  const startTimeRef = useRef(0)

  const filledSegments = Math.round((displayValue / 100) * segments)

  useEffect(() => {
    if (!isInitialized) {
      const initTimeout = setTimeout(() => setIsInitialized(true), 50)
      return () => clearTimeout(initTimeout)
    }

    const duration = 800
    startValueRef.current = displayValue
    startTimeRef.current = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const newValue = startValueRef.current + (initialValue - startValueRef.current) * eased
      setDisplayValue(newValue)
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [initialValue, isInitialized])

  const getSegmentStyle = (index: number, isFilled: boolean) => {
    let scale = 1
    let translateY = 0
    if (hoveredSegment !== null) {
      const distance = Math.abs(hoveredSegment - index)
      if (distance === 0) { scale = 1.3; translateY = -1 }
      else if (distance <= 3) {
        const falloff = Math.cos((distance / 3) * (Math.PI / 2))
        scale = 1 + 0.2 * falloff
        translateY = -0.5 * falloff
      }
    }
    const delay = isInitialized ? index * 20 : 0
    return { transform: `scaleY(${scale}) translateY(${translateY}px)`, transitionDelay: `${delay}ms` }
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-center justify-between">
        {label && <span className="text-xs font-medium text-neutral-400 tracking-wide">{label}</span>}
        {showPercentage && (
          <span className="text-xs font-semibold tabular-nums" style={{ color: color || '#E8821A' }}>
            {Math.round(displayValue)}%
          </span>
        )}
      </div>
      <div className="flex gap-[2px] py-0.5" role="progressbar" aria-valuenow={initialValue} aria-valuemin={0} aria-valuemax={100}>
        {Array.from({ length: segments }).map((_, index) => {
          const isFilled = index < filledSegments
          const isHovered = hoveredSegment === index
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredSegment(index)}
              onMouseLeave={() => setHoveredSegment(null)}
              onTouchStart={() => setHoveredSegment(index)}
              onTouchEnd={() => setHoveredSegment(null)}
              className={cn(
                "h-2 flex-1 rounded-sm cursor-pointer origin-center",
                "transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                isFilled ? "" : "bg-neutral-200 dark:bg-neutral-700",
                isHovered && !isFilled && "bg-neutral-300",
              )}
              style={{
                ...getSegmentStyle(index, isFilled),
                backgroundColor: isFilled ? (color || '#E8821A') : undefined,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
