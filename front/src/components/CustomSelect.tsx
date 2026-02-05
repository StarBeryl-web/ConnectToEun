import { useEffect, useId, useRef, useState } from 'react'
import {
  selectCaret,
  selectField,
  selectMenu,
  selectOption,
  selectPlaceholder,
  selectTrigger,
} from './select.css'

export type SelectOption = {
  label: string
  value: string
}

type CustomSelectProps = {
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  ariaLabel?: string
}

export const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder = '선택해 주세요',
  ariaLabel,
}: CustomSelectProps) => {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const listId = useId()

  const selected = options.find((option) => option.value === value)

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current) return
      if (event.target instanceof Node && !wrapperRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onEscape)
    }
  }, [])

  return (
    <div className={selectField} ref={wrapperRef}>
      <button
        type="button"
        className={selectTrigger}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={listId}
        aria-label={ariaLabel}
      >
        <span className={selected ? undefined : selectPlaceholder}>
          {selected ? selected.label : placeholder}
        </span>
        <span className={selectCaret} aria-hidden="true">
          ▾
        </span>
      </button>
      {open ? (
        <div className={selectMenu} role="listbox" id={listId}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={selectOption}
              data-selected={option.value === value}
              role="option"
              aria-selected={option.value === value}
              onMouseDown={(event) => {
                event.preventDefault()
                onChange(option.value)
                setOpen(false)
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
