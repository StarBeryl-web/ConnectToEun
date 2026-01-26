import type { SiteConfig } from '../types'

export const defaultPreset: SiteConfig = {
  brand: {
    name: 'Company Template',
    tagline: '한 줄 슬로건을 입력하세요',
    description: '회사 소개 문구를 여기에 입력하세요.',
    logoText: 'Company',
    logoImage: '/branding/logo.svg',
    ogImage: '/branding/og.svg',
    heroImage: '/branding/hero.svg',
  },
  contact: {
    phone: '02-0000-0000',
    email: 'hello@example.com',
    ctaLabel: '문의하기',
    ctaHref: '#contact',
    address: '서울특별시 강남구 테헤란로 00, 0층',
    businessInfo: 'Company Template | 사업자등록번호 000-00-00000',
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
    map: {
      lat: 37.5665,
      lng: 126.978,
      level: 3,
      showMarker: true,
    },
  },
  navigation: {
    header: [
      { label: '회사소개', href: '#/about' },
      { label: '서비스', href: '#/services' },
      { label: '포트폴리오', href: '#/portfolio' },
      { label: '문의', href: '#/contact' },
    ],
    footer: [
      { label: '서비스', href: '#/services' },
      { label: '포트폴리오', href: '#/portfolio' },
      { label: '개인정보처리방침', href: '#privacy' },
    ],
  },
  seo: {
    siteName: 'Company Template',
    titleTemplate: '%s | Company Template',
    description: '회사 소개 템플릿 설명 문구를 입력하세요.',
    canonicalBase: 'https://example.github.io',
    ogImage: '/branding/og.svg',
    twitterHandle: '@company',
    pages: {
      about: {
        title: '회사소개',
      },
      services: {
        title: '서비스',
      },
      portfolio: {
        title: '포트폴리오',
      },
      blog: {
        title: '기술 블로그',
      },
      contact: {
        title: '문의',
      },
    },
  },
  theme: {
    colors: {
      brand: '#680f81',
      brandStrong: '#0b2f4f',
      accent: '#e0a21b',
      text: '#0d1b2a',
      textMuted: '#52616b',
      background: '#f7f3ed',
      surface: '#ffffff',
      border: '#e6e0d9',
    },
    typography: {
      body: '"Libre Baskerville", Georgia, serif',
      heading: '"Space Grotesk", "Helvetica Neue", Arial, sans-serif',
    },
    radii: {
      sm: '8px',
      md: '14px',
      lg: '22px',
    },
    shadow: {
      sm: '0 6px 18px rgba(15, 28, 48, 0.08)',
      md: '0 16px 30px rgba(15, 28, 48, 0.12)',
    },
    layout: {
      maxWidth: '1120px',
      gutter: 'clamp(16px, 4vw, 36px)',
      sectionSpacing: 'clamp(48px, 8vw, 120px)',
    },
  },
  data: {
    trustBadges: ['핵심 지표 1', '핵심 지표 2', '핵심 지표 3'],
    services: [
      {
        id: 'brand-strategy',
        title: '서비스 제목 1',
        summary: '서비스 설명을 입력하세요.',
        icon: 'Compass',
        category: 'Strategy',
        bullets: ['포인트 1', '포인트 2', '포인트 3'],
        link: 'https://example.com',
      },
      {
        id: 'visual-identity',
        title: '서비스 제목 2',
        summary: '서비스 설명을 입력하세요.',
        icon: 'Sparkles',
        category: 'Design',
        bullets: ['포인트 1', '포인트 2', '포인트 3'],
      },
      {
        id: 'launch',
        title: '서비스 제목 3',
        summary: '서비스 설명을 입력하세요.',
        icon: 'Rocket',
        category: 'Execution',
        bullets: ['포인트 1', '포인트 2', '포인트 3'],
      },
    ],
    portfolio: [
      {
        id: 'aurora',
        title: '프로젝트 제목 1',
        category: 'Hospitality',
        tags: ['Rebranding', 'UX'],
        coverImage: '/branding/portfolio-1.svg',
        summary: '프로젝트 요약 문구를 입력하세요.',
        href: 'https://example.com',
      },
      {
        id: 'orbit',
        title: '프로젝트 제목 2',
        category: 'Tech',
        tags: ['Launch', 'Marketing'],
        coverImage: '/branding/portfolio-2.svg',
        summary: '프로젝트 요약 문구를 입력하세요.',
        href: 'https://example.com',
      },
      {
        id: 'lumen',
        title: '프로젝트 제목 3',
        category: 'Healthcare',
        tags: ['Campaign'],
        coverImage: '/branding/portfolio-3.svg',
        summary: '프로젝트 요약 문구를 입력하세요.',
        href: 'https://example.com',
      },
    ],
    highlights: [
      {
        title: '핵심 성과 1',
        description: '성과 설명을 입력하세요.',
      },
      {
        title: '핵심 성과 2',
        description: '성과 설명을 입력하세요.',
      },
    ],
    testimonials: [
      {
        name: '홍길동',
        role: '직함 / 회사명',
        quote: '후기 문구를 입력하세요.',
      },
      {
        name: '김영희',
        role: '직함 / 회사명',
        quote: '후기 문구를 입력하세요.',
      },
    ],
    faqs: [
      {
        question: '자주 묻는 질문을 입력하세요.',
        answer: '답변을 입력하세요.',
      },
      {
        question: '자주 묻는 질문을 입력하세요.',
        answer: '답변을 입력하세요.',
      },
    ],
    processSteps: ['진행 단계 1', '진행 단계 2', '진행 단계 3'],
    values: ['핵심 가치 1', '핵심 가치 2', '핵심 가치 3'],
    team: [
      { name: '이름', role: '직함' },
      { name: '이름', role: '직함' },
      { name: '이름', role: '직함' },
    ],
    timeline: [
      { year: '2020', event: '주요 이정표 1' },
      { year: '2022', event: '주요 이정표 2' },
      { year: '2024', event: '주요 이정표 3' },
    ],
    blogPosts: [],
  },
  contactForm: {
    mode: 'webhook',
    mailtoSubject: '문의 요청',
  },
  integrations: {
    gaIdEnv: 'VITE_GA_ID',
    gtmIdEnv: 'VITE_GTM_ID',
    channelTalkEnv: 'VITE_CHANNELTALK_PLUGIN_KEY',
    kakaoMapEnv: 'VITE_KAKAO_MAP_KEY',
    contactWebhookEnv: 'VITE_CONTACT_WEBHOOK_URL',
  },
  privacy: {
    title: '개인정보처리방침',
    updatedAt: '2026-01-01',
    body: [
      '수집 항목: 이름, 이메일, 전화번호, 문의 내용',
      '이용 목적: 문의 대응',
      '보유 기간: 문의 처리 완료 후 1년',
    ],
  },
}
