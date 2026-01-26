import type { ReactNode } from 'react'
import { container } from '../styles/layout.css'

type Props = {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: Props) => {
  return <div className={[container, className].filter(Boolean).join(' ')}>{children}</div>
}
