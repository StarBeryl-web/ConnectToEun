import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { siteConfig } from '../../config/loadSiteConfig'
import { contactSchema, type ContactFormData } from './contactSchema'
import { card, primaryButton } from '../../components/ui.css'

export const ContactForm = () => {
  const [status, setStatus] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })

  const onSubmit = handleSubmit(async (data) => {
    const mode = siteConfig.contactForm.mode

    if (mode === 'none') {
      setStatus('문의 내용은 내부 확인 후 연락드리겠습니다.')
      return
    }

    if (mode === 'mailto') {
      const subject = encodeURIComponent(siteConfig.contactForm.mailtoSubject)
      const body = encodeURIComponent(
        `이름: ${data.name}\n전화: ${data.phone}\n이메일: ${data.email}\n내용: ${data.message}`,
      )
      window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`
      return
    }

    const env = import.meta.env as Record<string, string | undefined>
    const webhookUrl = env[siteConfig.integrations.contactWebhookEnv]

    if (!webhookUrl) {
      setStatus('웹훅 URL이 설정되지 않았습니다.')
      return
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source: 'site',
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error('전송 실패')
      }

      setStatus('문의가 정상적으로 접수되었습니다.')
      reset()
    } catch (error) {
      setStatus('전송에 실패했습니다. 다시 시도해 주세요.')
    }
  })

  return (
    <form className={card} onSubmit={onSubmit}>
      <h3>프로젝트 문의</h3>
      <label>
        이름
        <input
          {...register('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'error-name' : undefined}
        />
        {errors.name ? <span id="error-name">{errors.name.message}</span> : null}
      </label>
      <label>
        전화번호
        <input
          {...register('phone')}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'error-phone' : undefined}
        />
        {errors.phone ? <span id="error-phone">{errors.phone.message}</span> : null}
      </label>
      <label>
        이메일
        <input
          {...register('email')}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'error-email' : undefined}
        />
        {errors.email ? <span id="error-email">{errors.email.message}</span> : null}
      </label>
      <label>
        문의 내용
        <textarea
          rows={5}
          {...register('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'error-message' : undefined}
        />
        {errors.message ? <span id="error-message">{errors.message.message}</span> : null}
      </label>
      <label>
        <input
          type="checkbox"
          {...register('agree')}
          aria-describedby={errors.agree ? 'error-agree' : undefined}
        />{' '}
        개인정보 수집에 동의합니다.
        {errors.agree ? <span id="error-agree">{errors.agree.message}</span> : null}
      </label>
      <button className={primaryButton} type="submit" disabled={isSubmitting}>
        보내기
      </button>
      {status ? <p>{status}</p> : null}
    </form>
  )
}
