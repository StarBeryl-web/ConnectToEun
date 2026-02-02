import type { SiteConfigOverride } from './config/types'

export const sitePreset = 'default'

export const siteOverrides: SiteConfigOverride = {
  brand: {
    name: 'CONNECT 2 EUN',
    tagline: 'AI 시대일수록 본질은 더 선명해야 합니다.',
    description: '기술은 문제를 해결하는 방법 중 하나입니다. 핵심은 전달 입니다.',
    logoText: 'CONNECT 2 EUN',
    logoImage: '',
    heroImage: '',
    ogImage: ''
  },
  contact: {
    phone: '010-0000-0000',
    email: 'connect2eun@gmail.com',
    ctaLabel: '프로젝트 문의',
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
        title: '서비스 제목 1',
        summary: '서비스 설명을 입력하세요.',
        icon: 'Compass',
        category: 'Product Management',
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

    blogPosts: [
      {
        id: 'design-system',
        title: '브랜드 시스템을 빠르게 정리하는 법',
        summary: '컬러/타이포/컴포넌트 규칙을 정리하는 체크리스트를 공유합니다.',
        date: '2026-01-10',
        href: '#/blog/design-system',
        tags: ['Design', 'System'],
      },
      {
        id: 'launch-playbook',
        title: '런칭 준비: 2주 안에 끝내는 체크리스트',
        summary: '제품/서비스 런칭 시 꼭 확인해야 할 항목을 정리했습니다.',
        date: '2026-01-18',
        href: '#/blog/launch-playbook',
        tags: ['Launch'],
      },
      {
        id: 'case-study',
        title: '리브랜딩 프로젝트 회고',
        summary: '브랜드 리뉴얼 과정에서 얻은 인사이트를 공유합니다.',
        date: '2026-01-22',
        href: '#/blog/case-study',
        tags: ['Case Study'],
      },
    ],
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
