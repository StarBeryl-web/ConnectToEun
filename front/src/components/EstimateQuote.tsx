import { useEffect, useMemo, useRef, useState } from 'react'
import fontkit from '@pdf-lib/fontkit'
import { PDFDocument, PageSizes, rgb, type PDFFont } from 'pdf-lib'
import { easeOut, motion } from 'framer-motion'
import { Copy, Download } from 'lucide-react'
import { Toast } from './Toast'
import { CustomSelect } from './CustomSelect'
import {
  buttonRow,
  // checkboxGrid,
  // checkboxItem,
  consentCard,
  consentCheckRow,
  consentDetails,
  consentDetailsContent,
  consentDetailsToggle,
  consentRequired,
  consentSummary,
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
  modalActions,
  modalBody,
  modalButton,
  modalCard,
  modalOverlay,
  modalTitle,
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
  projectDomain: string
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
  privacyConsent: boolean
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
  projectDomain: '',
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
  privacyConsent: false,
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
  const [showConsentModal, setShowConsentModal] = useState(false)
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
    if (!form.privacyConsent) {
      setShowConsentModal(true)
      return
    }
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
      drawLine(`업종: ${form.projectDomain || '-'}`)
      drawLine(`페이지 수: ${form.pageCount || '-'}`)
      // drawLine(`기능: ${form.features.length ? form.features.join(', ') : '-'}`)
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
      drawLine(`개인정보 이용 동의: ${form.privacyConsent ? '동의함' : '미동의'}`)
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
            * 브라우저에 필요한 정보를 입력하면 즉시 PDF 요구서를 생성할 수 있어요.
              <br />
            * 페이지를 나가면 작성한 내용이 사라지니 주의해 주세요.
              <br />
            * 요구서를 바탕으로 미팅 진행하니 최대한 자세히 작성해 주세요.
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
              <CustomSelect
                ariaLabel="프로젝트 유형"
                value={form.projectType}
                onChange={(value) => updateField('projectType', value)}
                options={[
                  { label: '기업 사이트', value: '기업사이트' },
                  { label: '쇼핑몰', value: '쇼핑몰' },
                  { label: '브랜딩+웹', value: '브랜딩+웹' },
                  { label: '스튜디오 사진 촬영', value: '스튜디오 사진 촬영' },
                  { label: '메뉴판/명함 디자인', value: '메뉴판' },
                  { label: '상세페이지/배너 디자인', value: '상세페이지' },
                ]}
              />
            </label>
            <label className={label}>
              업종
              <CustomSelect
                ariaLabel="업종"
                value={form.projectDomain}
                onChange={(value) => updateField('projectDomain', value)}
                options={[
                  { label: '기업', value: '기업' },
                  { label: '제조업', value: '제조업' },
                  { label: '전문직(법률·회계)', value: '전문직(법률·회계)' },
                  { label: '인강/교육', value: '인강/교육' },
                  { label: 'IT 스타트업', value: 'IT 스타트업' },
                  { label: '병원/클리닉', value: '병원/클리닉' },
                  { label: '쇼핑/이커머스', value: '쇼핑/이커머스' },
                  { label: '공공기관', value: '공공기관' },
                  { label: '자영업/소상공인', value: '자영업/소상공인' },
                  { label: '에이전시', value: '에이전시' },
                  { label: '기타', value: '기타' },
                ]}
              />
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
          {/*
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
          */}
        </section>

        <section className={section}>
          <h3 className={sectionTitle}>예산/일정</h3>
            <p className={formSubtitle}>
              * 페이지 수와 기능에 따라 추가 요금이 발생할 수 있습니다.
          </p>
          <div className={fieldGrid}>
            <label className={label}>
              예산 범위
              <CustomSelect
                ariaLabel="예산 범위"
                value={form.budgetRange}
                onChange={(value) => updateField('budgetRange', value)}
                options={[
                  { label: '200~400 만원', value: '200~400' },
                  { label: '400~700 만원', value: '400~700' },
                  { label: '700+ 만원', value: '700+' },
                ]}
              />
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
              <CustomSelect
                ariaLabel="원하는 분위기"
                value={form.mood}
                onChange={(value) => updateField('mood', value)}
                options={[
                  { label: '미니멀', value: '미니멀' },
                  { label: '럭셔리', value: '럭셔리' },
                  { label: '내추럴', value: '내추럴' },
                  { label: '테크', value: '테크' },
                  { label: '키치', value: '키치' },
                  { label: '감성', value: '감성' },
                  { label: '클래식', value: '클래식' },
                  { label: '미래지향', value: '미래지향' },
                ]}
              />
            </label>
            <label className={label}>
              톤 앤 매너
              <CustomSelect
                ariaLabel="톤 앤 매너"
                value={form.toneManner}
                onChange={(value) => updateField('toneManner', value)}
                options={[
                  { label: '차분', value: '차분' },
                  { label: '친근', value: '친근' },
                  { label: '공격적', value: '공격적' },
                  { label: '프리미엄', value: '프리미엄' },
                  { label: '젊은', value: '젊은' },
                  { label: '전문적', value: '전문적' },
                ]}
              />
            </label>
          </div>
          <div className={fieldGrid}>
            <label className={label}>
              컬러 선호
              <CustomSelect
                ariaLabel="컬러 선호"
                value={form.colorPreference}
                onChange={(value) => updateField('colorPreference', value)}
                options={[
                  { label: '모노톤', value: '모노톤' },
                  { label: '파스텔', value: '파스텔' },
                  { label: '비비드', value: '비비드' },
                  { label: '브랜드컬러 유지', value: '브랜드컬러 유지' },
                  { label: '추천받기', value: '추천받기' },
                ]}
              />
            </label>
            <label className={label}>
              카피 스타일
              <CustomSelect
                ariaLabel="카피 스타일"
                value={form.copyStyle}
                onChange={(value) => updateField('copyStyle', value)}
                options={[
                  { label: '짧고 임팩트', value: '짧고 임팩트' },
                  { label: '설명형', value: '설명형' },
                  { label: '스토리텔링', value: '스토리텔링' },
                  { label: '데이터·근거형', value: '데이터·근거형' },
                ]}
              />
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
                {['본인', '팀', '대표'].map((option) => (
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
          <h3 className={sectionTitle}>개인정보 이용 동의</h3>
          <div className={consentCard}>
            <p className={consentSummary}>
              문의 접수 및 상담 진행을 위해 최소한의 개인정보를 수집합니다. 수집 목적,
              보관 기간, 파기 절차에 대한 자세한 내용을 확인해 주세요.
            </p>
            <details className={consentDetails}>
              <summary className={consentDetailsToggle}>요약 더보기</summary>
              <div className={consentDetailsContent}>
                [제1조] 개인정보 수집 및 이용 동의{'\n'}
                고객은 문의 접수 시 개인정보 수집 및 이용에 동의해야 합니다.{'\n'}
                {'\n'}
                [제2조] 수집 항목 및 이용 목적{'\n'}
                - 수집 항목: 이름, 연락처, 이메일{'\n'}
                - 이용 목적: 상담 진행 및 서비스 안내{'\n'}
                - 보유 기간: 5년 보관 후 파기{'\n'}
                {'\n'}
                [제3조] 쿠키 사용 안내{'\n'}
                맞춤형 정보 제공을 위해 쿠키를 사용할 수 있으며, 브라우저 설정을 통해
                거부할 수 있습니다.{'\n'}
                {'\n'}
                [제4조] 개인정보 파기{'\n'}
                보유 기간 경과 또는 동의 철회 시 지체 없이 파기합니다.{'\n'}
                {'\n'}
                [제5조] 제3자 제공{'\n'}
                법령에 근거한 요청이 아닌 경우 제3자에게 제공하지 않습니다.{'\n'}
                {'\n'}
                [제6조] 동의 철회 및 문의{'\n'}
                동의 철회는 언제든지 가능하며, 문의 사항은 connect2eun@gmail.com으로
                연락해 주세요.
              </div>
            </details>
            <label className={consentCheckRow}>
              <input
                type="checkbox"
                checked={form.privacyConsent}
                onChange={(event) => updateField('privacyConsent', event.target.checked)}
                aria-required="true"
              />
              <span className={consentRequired}>(필수)</span>
              개인정보 이용에 동의합니다.
            </label>
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
          <p className={formSubtitle}>
            * PDF를 다운로드해 메일에 첨부해 주세요.
              <br />
            * 모바일인 경우 스크린샷으로 보내주세요.(PC 권장)
              <br />
            * 남겨주신 전화번호로 미팅 일정을 안내드릴게요.
          </p>
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
      </form>

      <Toast
        open={Boolean(toast)}
        variant={toast?.variant ?? 'success'}
        message={toast?.message ?? ''}
        motionConfig={MOTION.toast}
      />
      {showConsentModal ? (
        <div className={modalOverlay} role="dialog" aria-modal="true" aria-label="개인정보 동의 필요">
          <div className={modalCard}>
            <h4 className={modalTitle}>개인정보 동의가 필요합니다</h4>
            <p className={modalBody}>
              PDF를 생성하려면 개인정보 이용 동의에 체크해 주세요.
            </p>
            <div className={modalActions}>
              <button
                type="button"
                className={modalButton}
                onClick={() => setShowConsentModal(false)}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
