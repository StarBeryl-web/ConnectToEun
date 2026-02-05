import { AnimatePresence, motion, type Transition } from 'framer-motion'
import { AlertCircle, Check } from 'lucide-react'
import { toastCard, toastIcon, toastMessage, toastRegion } from '../sections/contact/contact.css'

type ToastVariant = 'success' | 'error'

type ToastMotion = {
  initial: { opacity: number; y: number; scale: number }
  animate: { opacity: number; y: number; scale: number }
  exit: { opacity: number; y: number; scale: number }
  transition: Transition
}

type ToastProps = {
  open: boolean
  message: string
  variant: ToastVariant
  motionConfig: ToastMotion
}

const iconMap = {
  success: Check,
  error: AlertCircle,
}

export const Toast = ({ open, message, variant, motionConfig }: ToastProps) => {
  const Icon = iconMap[variant]

  return (
    <div className={toastRegion}>
      <AnimatePresence>
        {open ? (
          <motion.div
            className={toastCard}
            role="status"
            aria-live="polite"
            initial={motionConfig.initial}
            animate={motionConfig.animate}
            exit={motionConfig.exit}
            transition={motionConfig.transition}
          >
            <span className={toastIcon} aria-hidden="true">
              <Icon size={18} />
            </span>
            <p className={toastMessage}>{message}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
