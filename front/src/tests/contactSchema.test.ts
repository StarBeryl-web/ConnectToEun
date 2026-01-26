import { describe, expect, it } from 'vitest'
import { contactSchema } from '../sections/contact/contactSchema'

describe('contact schema', () => {
  it('accepts valid data', () => {
    const result = contactSchema.safeParse({
      name: '홍길동',
      phone: '010-0000-0000',
      email: 'test@example.com',
      message: '문의 내용입니다. 감사합니다.',
      agree: true,
    })
    expect(result.success).toBe(true)
  })
})
