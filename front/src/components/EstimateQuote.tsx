import { useEffect, useMemo, useRef, useState } from 'react'
import fontkit from '@pdf-lib/fontkit'
import { PDFDocument, PageSizes, rgb, type PDFFont } from 'pdf-lib'
import { easeOut, motion } from 'framer-motion'
import { Copy, Download } from 'lucide-react'
import { Toast } from './Toast'
import {
  buttonRow,
  checkboxGrid,
  checkboxItem,
  emailRow,
  fieldGrid,
  fieldStack,
  formCard,
  formHeader,
  formSubtitle,
  formTitle,
  helperText,
  input,
  label,
  primaryButton,
  radioGroup,
  radioItem,
  secondaryButton,
  section,
  sectionTitle,
  select,
  textarea,
} from '../sections/contact/contact.css'

const EMAIL_ADDRESS = 'connect2eun@gmail.com'


const MOTION = {
  button: {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
  },
  toast: {
    initial: { opacity: 0, y: 16, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 12, scale: 0.98 },
    transition: { duration: 0.22, ease: easeOut },
  },
}

type FixedThree = [string, string, string]

type FormState = {
  clientName: string
  email: string
  projectType: string
  pageCount: string
  features: string[]
  budgetRange: string
  desiredDate: string
  additionalRequest: string
  referenceLinks: FixedThree
  mood: string
  toneManner: string
  colorPreference: string
  copyStyle: string
  keywords: FixedThree
  avoidFeelings: string
  feedbackStyle: string
  decisionMaker: string
  brandGuide: string
}

type ToastState = {
  id: number
  variant: 'success' | 'error'
  message: string
}

const initialState: FormState = {
  clientName: '',
  email: '',
  projectType: '',
  pageCount: '',
  features: [],
  budgetRange: '',
  desiredDate: '',
  additionalRequest: '',
  referenceLinks: ['', '', ''],
  mood: '',
  toneManner: '',
  colorPreference: '',
  copyStyle: '',
  keywords: ['', '', ''],
  avoidFeelings: '',
  feedbackStyle: '',
  decisionMaker: '',
  brandGuide: '',
}

const formatDate = (date: Date, separator = '-') => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return [year, month, day].join(separator)
}

const sanitizeFileName = (value: string) =>
  value.replace(/[\\/:*?"<>|]/g, '').replace(/\s+/g, '_').slice(0, 40)

const wrapText = (text: string, maxWidth: number, font: PDFFont, size: number) => {
  if (!text) return ['-']
  const hasSpaces = text.includes(' ')
  const units = hasSpaces ? text.split(' ') : text.split('')
  const lines: string[] = []
  let line = ''

  for (const unit of units) {
    const candidate = line ? (hasSpaces ? `${line} ${unit}` : `${line}${unit}`) : unit
    const width = font.widthOfTextAtSize(candidate, size)
    if (width <= maxWidth) {
      line = candidate
      continue
    }
    if (line) lines.push(line)
    line = unit
  }

  if (line) lines.push(line)
  return lines
}

export const EstimateQuote = () => {
  const [form, setForm] = useState<FormState>(initialState)
  const [toast, setToast] = useState<ToastState | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const emailInputRef = useRef<HTMLInputElement | null>(null)

  const referenceLinks = useMemo(
    () => form.referenceLinks.filter((link) => link.trim().length > 0),
    [form.referenceLinks],
  )
  const keywords = useMemo(
    () => form.keywords.filter((keyword) => keyword.trim().length > 0),
    [form.keywords],
  )

  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(() => setToast(null), 2200)
    return () => window.clearTimeout(timer)
  }, [toast])

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const updateFixedArray = (key: 'referenceLinks' | 'keywords', index: number, value: string) => {
    setForm((prev) => {
      const next = [...prev[key]] as FixedThree
      next[index] = value
      return { ...prev, [key]: next }
    })
  }

  const toggleFeature = (feature: string) => {
    setForm((prev) => {
      const next = new Set(prev.features)
      if (next.has(feature)) next.delete(feature)
      else next.add(feature)
      return { ...prev, features: Array.from(next) }
    })
  }

  const showToast = (variant: ToastState['variant'], message: string) => {
    setToast({ id: Date.now(), variant, message })
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS)
      showToast('success', '메일 주소가 복사됐어요!')
    } catch (error) {
      console.error('PDF generation failed:', error)
      try {
        if (emailInputRef.current) {
          emailInputRef.current.select()
          const success = document.execCommand('copy')
          if (success) {
            showToast('success', '메일 주소가 복사됐어요!')
            return
          }
        }
      } catch (fallbackError) {
        // noop
      }
      showToast('error', '복사에 실패했어요. 직접 복사해 주세요.')
    }
  }

  const handleDownloadPdf = async () => {
    setIsGenerating(true)
    try {
      const pdfDoc = await PDFDocument.create()
      let currentPage = pdfDoc.addPage(PageSizes.A4)
      pdfDoc.registerFontkit(fontkit)
      const fontUrl = `${import.meta.env.BASE_URL}fonts/NotoSansKR-Regular.ttf`
      const fontResponse = await fetch(fontUrl)
      if (!fontResponse.ok) {
        throw new Error('FONT_LOAD_FAILED')
      }
      const fontBytes = await fontResponse.arrayBuffer()
      if (fontBytes.byteLength === 0) {
        throw new Error('FONT_LOAD_FAILED')
      }
      const font = await pdfDoc.embedFont(fontBytes)
      const fontBold = font
      const { width, height } = currentPage.getSize()

      const margin = 40
      const titleSize = 18
      const bodySize = 11
      const lineHeight = 16
      let cursorY = height - margin

      const ensureSpace = (lines = 1) => {
        if (cursorY - lines * lineHeight < margin) {
          currentPage = pdfDoc.addPage(PageSizes.A4)
          cursorY = currentPage.getSize().height - margin
        }
      }
      const maxWidth = width - margin * 2

      const drawLine = (text: string, size = bodySize, bold = false) => {
        ensureSpace(1)
        currentPage.drawText(text, {
          x: margin,
          y: cursorY,
          size,
          font: bold ? fontBold : font,
          color: rgb(0.1, 0.1, 0.1),
        })
        cursorY -= lineHeight
      }

      const drawParagraph = (text: string) => {
        const parts = text.split('\n')
        parts.forEach((part, index) => {
          const lines = wrapText(part, maxWidth, font, bodySize)
          lines.forEach((line) => drawLine(line))
          if (index < parts.length - 1) {
            cursorY -= 4
          }
        })
      }

      drawLine('웹사이트 제작 요구서', titleSize, true)
      cursorY -= 6
      drawLine(`발행일: ${formatDate(new Date(), '-')}`)
      drawLine(`고객명/회사명: ${form.clientName || '-'}`)
      drawLine(`전화번호: ${form.email || '-'}`)
      cursorY -= 6

      drawLine('프로젝트 요약', bodySize, true)
      drawLine(`프로젝트 유형: ${form.projectType || '-'}`)
      drawLine(`페이지 수: ${form.pageCount || '-'}`)
      drawLine(`기능: ${form.features.length ? form.features.join(', ') : '-'}`)
      drawLine(`예산 범위: ${form.budgetRange || '-'}`)
      drawLine(`희망 일정: ${form.desiredDate || '-'}`)
      drawParagraph(`추가 요청사항: ${form.additionalRequest || '-'}`)
      cursorY -= 6

      drawLine('취향/스타일 요약', bodySize, true)
      drawLine('레퍼런스 링크:')
      if (referenceLinks.length) {
        referenceLinks.forEach((link) => drawParagraph(`- ${link}`))
      } else {
        drawLine('- 없음')
      }
      drawLine(`분위기: ${form.mood || '-'}`)
      drawLine(`톤 앤 매너: ${form.toneManner || '-'}`)
      drawLine(`컬러 선호: ${form.colorPreference || '-'}`)
      drawLine(`카피 스타일: ${form.copyStyle || '-'}`)
      drawLine(`키워드: ${keywords.length ? keywords.join(', ') : '-'}`)
      drawParagraph(`금지 요소: ${form.avoidFeelings || '-'}`)
      cursorY -= 6

      drawLine('협업 정보', bodySize, true)
      drawLine(`피드백 스타일: ${form.feedbackStyle || '-'}`)
      drawLine(`결정권자 여부: ${form.decisionMaker || '-'}`)
      drawLine(`브랜드 가이드 유무: ${form.brandGuide || '-'}`)
      cursorY -= 6

      drawParagraph('최종 금액/범위는 미팅 후 확정됩니다.')
      cursorY -= 4
      drawLine('Connect 2 EUN | contact: connect2eun@gmail.com')

      const pdfBytes = await pdfDoc.save()
      const safeBytes = new Uint8Array(pdfBytes)
      const blob = new Blob([safeBytes], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
      const today = formatDate(new Date(), '')
      const nameSafe = sanitizeFileName(form.clientName || '고객')
      const fileName = `요구서_${nameSafe}_${today}.pdf`

      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)
    } catch (error) {
      if (error instanceof Error && error.message === 'FONT_LOAD_FAILED') {
        showToast('error', '한글 폰트를 불러오지 못했어요. 폰트 파일을 확인해 주세요.')
      } else if (error instanceof Error) {
        showToast('error', `PDF 생성 실패: ${error.message}`)
      } else {
        showToast('error', 'PDF 생성에 실패했어요. 다시 시도해 주세요.')
      }
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <>
      <form className={formCard} onSubmit={(event) => event.preventDefault()}>
        <div className={formHeader}>
          <h2 className={formTitle}>요구서 작성</h2>
          <p className={formSubtitle}>
            브라우저에 필요한 정보를 입력하면 즉시 PDF 요구서를 생성할 수 있어요.
              <br />
            요구서를 바탕으로 미팅 진행하니 최대한 자세히 작성해주세요.
          </p>
        </div>

        <section className={section}>
          <h3 className={sectionTitle}>프로젝트 기본 정보</h3>
          <div className={fieldGrid}>
            <label className={label}>
              고객명/회사명
              <input
                className={input}
                value={form.clientName}
                onChange={(event) => updateField('clientName', event.target.value)}
              />
            </label>
            <label className={label}>
              전화번호
              <input
                className={input}
                type="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
              />
            </label>
          </div>
          <div className={fieldGrid}>
            <label className={label}>
              프로젝트 유형
              <select
                className={select}
                value={form.projectType}
                onChange={(event) => updateField('projectType', event.target.value)}
              >
                <option value="" disabled>
                  선택해 주세요
                </option>
                <option value="기업사이트">기업 사이트</option>
                <option value="쇼핑몰">쇼핑몰</option>
                <option value="브랜딩+웹">브랜딩+웹</option>
                <option value="스튜디오 사진 촬영">스튜디오 사진 촬영</option>
                <option value="메뉴판">메뉴판/명함 디자인</option>
                <option value="상세페이지">상세페이지/배너 디자인</option>
              </select>
            </label>
            <label className={label}>
              페이지 수
              <input
                className={input}
                type="number"
                min={1}
                value={form.pageCount}
                onChange={(event) => updateField('pageCount', event.target.value)}
              />
            </label>
          </div>
          <div className={fieldStack}>
            <span className={label}>기능 체크박스</span>
            <div className={checkboxGrid}>
              {['예약', '로그인', 'AI 에이전트'].map((feature) => (
                <label key={feature} className={checkboxItem}>
                  <input
                    type="checkbox"
                    checked={form.features.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                  />
                  {feature}
                </label>
              ))}
            </div>
          </div>
        </section>

        <section className={section}>
          <h3 className={sectionTitle}>예산/일정</h3>
            <p className={formSubtitle}>
              페이지 수와 기능에 따라 추가 요금이 발생할 수 있습니다.
          </p>
          <div className={fieldGrid}>
            <label className={label}>
              예산 범위
              <select
                className={select}
                value={form.budgetRange}
                onChange={(event) => updateField('budgetRange', event.target.value)}
              >
                <option value="" disabled>
                  선택해 주세요
                </option>
                <option value="200~400">200~400 만원</option>
                <option value="400~700">400~700 만원</option>
                <option value="700+">700+ 만원</option>
              </select>
            </label>
            <label className={label}>
              희망 일정
              <input
                className={input}
                type="date"
                value={form.desiredDate}
                onChange={(event) => updateField('desiredDate', event.target.value)}
              />
            </label>
          </div>
          <label className={label}>
            추가 요청사항
            <textarea
              className={textarea}
              rows={4}
              value={form.additionalRequest}
              onChange={(event) => updateField('additionalRequest', event.target.value)}
            />
          </label>
        </section>

        <section className={section}>
          <h3 className={sectionTitle}>취향/스타일</h3>
          <div className={fieldStack}>
            <span className={label}>레퍼런스 링크 (좋아하는 사이트/브랜드) 1~3개</span>
            <div className={fieldGrid}>
              {form.referenceLinks.map((link, index) => (
                <input
                  key={`ref-${index}`}
                  className={input}
                  placeholder="https://..."
                  value={link}
                  onChange={(event) => updateFixedArray('referenceLinks', index, event.target.value)}
                />
              ))}
            </div>
          </div>
          <div className={fieldGrid}>
            <label className={label}>
              원하는 분위기
              <select
                className={select}
                value={form.mood}
                onChange={(event) => updateField('mood', event.target.value)}
              >
                <option value="" disabled>
                  선택해 주세요
                </option>
                {['미니멀', '럭셔리', '내추럴', '테크', '키치', '감성', '클래식', '미래지향'].map(
                  (option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ),
                )}
              </select>
            </label>
            <label className={label}>
              톤 앤 매너
              <select
                className={select}
                value={form.toneManner}
                onChange={(event) => updateField('toneManner', event.target.value)}
              >
                <option value="" disabled>
                  선택해 주세요
                </option>
                {['차분', '친근', '공격적', '프리미엄', '젊은', '전문적'].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className={fieldGrid}>
            <label className={label}>
              컬러 선호
              <select
                className={select}
                value={form.colorPreference}
                onChange={(event) => updateField('colorPreference', event.target.value)}
              >
                <option value="" disabled>
                  선택해 주세요
                </option>
                {['모노톤', '파스텔', '비비드', '브랜드컬러 유지', '추천받기'].map(
                  (option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ),
                )}
              </select>
            </label>
            <label className={label}>
              카피 스타일
              <select
                className={select}
                value={form.copyStyle}
                onChange={(event) => updateField('copyStyle', event.target.value)}
              >
                <option value="" disabled>
                  선택해 주세요
                </option>
                {['짧고 임팩트', '설명형', '스토리텔링', '데이터·근거형'].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className={fieldStack}>
            <span className={label}>대표 키워드 3개 (브랜드를 나타내는 단어)</span>
            <div className={fieldGrid}>
              {form.keywords.map((keyword, index) => (
                <input
                  key={`keyword-${index}`}
                  className={input}
                  value={keyword}
                  onChange={(event) => updateFixedArray('keywords', index, event.target.value)}
                />
              ))}
            </div>
          </div>
          <label className={label}>
            피하고 싶은 느낌/금지 요소
            <textarea
              className={textarea}
              rows={3}
              placeholder="너무 귀여운 느낌은 싫어요, 과한 효과 X"
              value={form.avoidFeelings}
              onChange={(event) => updateField('avoidFeelings', event.target.value)}
            />
          </label>
        </section>

        <section className={section}>
          <h3 className={sectionTitle}>협업 정보</h3>
          <div className={fieldGrid}>
            <div className={fieldStack}>
              <span className={label}>피드백 스타일</span>
              <div className={radioGroup}>
                {['빠르게 자주', '모아서 한 번에', '주 1회 정기 미팅'].map((option) => (
                  <label key={option} className={radioItem}>
                    <input
                      type="radio"
                      name="feedbackStyle"
                      checked={form.feedbackStyle === option}
                      onChange={() => updateField('feedbackStyle', option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <div className={fieldStack}>
              <span className={label}>결정권자 여부</span>
              <div className={radioGroup}>
                {['본인', '팀', '대표', '외주 대행'].map((option) => (
                  <label key={option} className={radioItem}>
                    <input
                      type="radio"
                      name="decisionMaker"
                      checked={form.decisionMaker === option}
                      onChange={() => updateField('decisionMaker', option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className={fieldStack}>
            <span className={label}>기존 브랜드 가이드 유무</span>
            <div className={radioGroup}>
              {['있음', '없음'].map((option) => (
                <label key={option} className={radioItem}>
                  <input
                    type="radio"
                    name="brandGuide"
                    checked={form.brandGuide === option}
                    onChange={() => updateField('brandGuide', option)}
                  />
                  {option}
                </label>
              ))}
            </div>
            <p className={helperText}>
              로고/폰트/컬러/명함 등 자료가 있으면 메일로 함께 보내주세요.
            </p>
          </div>
        </section>

        <section className={section}>
          <h3 className={sectionTitle}>메일 주소 복사</h3>
          <div className={emailRow}>
            <input
              ref={emailInputRef}
              className={input}
              readOnly
              value={EMAIL_ADDRESS}
              onFocus={(event) => event.currentTarget.select()}
              onClick={(event) => event.currentTarget.select()}
              aria-label="메일 주소"
            />
            <motion.button
              type="button"
              className={secondaryButton}
              onClick={handleCopyEmail}
              aria-label="메일 주소 복사하기"
              {...MOTION.button}
            >
              <Copy size={16} />
              메일 주소 복사하기
            </motion.button>
          </div>
        </section>

        <div className={buttonRow}>
          <motion.button
            type="button"
            className={primaryButton}
            onClick={handleDownloadPdf}
            aria-label="요구서 PDF 다운로드"
            disabled={isGenerating}
            {...MOTION.button}
          >
            <Download size={16} />
            {isGenerating ? 'PDF 생성 중...' : '요구서 PDF 다운로드'}
          </motion.button>
        </div>
      </form>

      <Toast
        open={Boolean(toast)}
        variant={toast?.variant ?? 'success'}
        message={toast?.message ?? ''}
        motionConfig={MOTION.toast}
      />
    </>
  )
}
