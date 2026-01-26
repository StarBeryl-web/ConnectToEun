import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, '이름을 입력해 주세요.'),
  phone: z.string().min(8, '전화번호를 입력해 주세요.'),
  email: z.string().email('이메일 형식을 확인해 주세요.'),
  message: z.string().min(10, '문의 내용을 입력해 주세요.'),
  agree: z.literal(true, {
    errorMap: () => ({ message: '개인정보 수집에 동의해 주세요.' }),
  }),
})

export type ContactFormData = z.infer<typeof contactSchema>
