import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useFinePointer } from '../hooks/usePointer'

export function CursorFollow() {
  const fine = useFinePointer()
  const reduce = useReducedMotion()
  const ref = useRef(null)

  useEffect(() => {
    if (!fine || reduce) return undefined
    const el = ref.current
    if (!el) return undefined

    const onMove = (event) => {
      el.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [fine, reduce])

  if (!fine || reduce) return null

  return <motion.div ref={ref} className="cursor-ring" aria-hidden="true" />
}
