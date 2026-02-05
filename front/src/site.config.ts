import type { SiteConfigOverride } from './config/types'

export const sitePreset = 'default'

export const siteOverrides: SiteConfigOverride = {
  brand: {
    name: 'CONNECT 2 EUN : AI PlayBook',
    tagline: '',
    description: 'AI를 실무에 맞게 적용하고\nWEB을 디지털 자산으로 만듭니다',
    logoText: 'CONNECT 2 EUN',
    logoImage: '',
    heroImage: '',
    ogImage: ''
  },
  contact: {
    phone: '',
    email: 'connect2eun@gmail.com',
    ctaLabel: '첫 미팅 예약',
    ctaHref: '#/contact',
    // address: '서울특별시 영등포구 여의대로 100',
    // businessInfo: '커넥트투은 | 사업자등록번호 000-00-00000',
    socials: {
      instagram: undefined,
      linkedin: undefined,
      blog: undefined
    },
    map: {
      lat: 0,
      lng: 0,
      level: 0,
      showMarker: false
    },
    address: '',
    businessInfo: ''
  },
  navigation: {
    header: [
      { label: 'About', href: '#/about' },
      { label: 'Service', href: '#/services' },
      { label: 'Portfolio', href: '#/portfolio' },
      { label: 'Blog', href: '#/blog' }
    ],
    footer: []
  },
  contactForm: {
    mode: 'webhook',
    mailtoSubject: '프로젝트 문의',
  },
  data: {
       trustBadges: ['핵심 지표 1', '핵심 지표 2', '핵심 지표 3'],
    services: [
      {
        id: 'brand-strategy',
        title: '기회를 설계하는 기획',
        summary:
          '데이터를 근거로 방향을 잡습니다. 타겟·메시지·구조를 정리해 “문의/예약이 가능한 흐름”을 설계해요.',
        icon: 'Compass',
        category: 'Product Strategy',
        bullets: [
          '타겟/포지셔닝/핵심 메시지 1장 정리',
          '페이지 구조·동선·CTA 우선순위 설계',
          '기능 범위/일정/예산을 현실적으로 고정'],
        image: '/branding/PM_ill.png',
      },
      {
        id: 'visual-identity',
        title: '신뢰를 만드는 Design',
        summary:
          '첫 방문 5초 안에 이해되고 믿기 쉬운 화면을 만듭니다. 브랜드 톤과 정보 우선순위를 깔끔하게 정리해요.',
        icon: 'Sparkles',
        category: 'Design',
        bullets: [
          '톤앤매너(색/폰트/이미지) + 카피 톤 정리',
          '가독성 중심 레이아웃·정보 구조 설계',
          '포트폴리오/후기/연락처 등 신뢰 요소 강화',
        ],
        image: '/branding/DE_ill.png',
      },
      {
        id: 'launch',
        title: '빠르게 만들고, 안정적으로 런칭',
        summary:
          'Engineering과 AI를 실무에 맞게 적용해 빠르게 출시합니다. 오픈 이후 운영/개선까지 이어지게 구축해요.',
        icon: 'Rocket',
        category: 'Engineering & AI',
        bullets: [
          '반응형·속도·안정성 중심의 구현/배포',
          '문의/예약/FAQ 등 운영 자동화 포인트 적용',
          '유입·이탈·클릭 기반 개선 포인트 제공',
  ],
        image: '/branding/CO_ill.png',
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
    // trustBadges: [],
    // services: [],
    // portfolio: [],
    // highlights: [],
    // testimonials: [],
    // faqs: [],
    // processSteps: [],
    // values: [],
    // team: [],
    // timeline: []
  },
  integrations: {
    gaIdEnv: 'VITE_GA_ID',
    gtmIdEnv: 'VITE_GTM_ID',
    channelTalkEnv: 'VITE_CHANNELTALK_PLUGIN_KEY',
    kakaoMapEnv: 'VITE_KAKAO_MAP_KEY',
    contactWebhookEnv: 'VITE_CONTACT_WEBHOOK_URL',
  },
  seo: {
    siteName: 'CONNECT2EUN',
    titleTemplate: '%s | CONNECT2EUN',
    description: '가치를 연결하는 빛나는 기술',
    ogImage: ''
  }
}
