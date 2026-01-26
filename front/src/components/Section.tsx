import type { ReactNode } from 'react'
import { section } from '../styles/layout.css'

type Props = {
  children: ReactNode
  id?: string
  className?: string
}

export const Section = ({ children, id, className }: Props) => {
  return (
    <section id={id} className={[section, className].filter(Boolean).join(' ')}>
      {children}
    </section>
  )
}
