export type NavItem = {
  label: string
  href: string
  external?: boolean
}

export type ServiceItem = {
  id: string
  title: string
  summary: string
  icon?: string
  image?: string
  category: string
  bullets: string[]
  link?: string
}

export type PortfolioItem = {
  id: string
  title: string
  category: string
  tags: string[]
  coverImage: string
  summary: string
  href: string
}

export type HighlightItem = {
  title: string
  description: string
}

export type FAQItem = {
  question: string
  answer: string
}

export type Testimonial = {
  name: string
  role: string
  quote: string
}

export type BlogPost = {
  id: string
  title: string
  summary: string
  date: string
  href: string
  tags?: string[]
  content?: string
}

export type SiteConfig = {
  brand: {
    name: string
    tagline: string
    description: string
    logoText: string
    logoImage?: string
    ogImage: string
    heroImage: string
  }
  contact: {
    phone: string
    email: string
    ctaLabel: string
    ctaHref: string
    address: string
    businessInfo: string
    socials: {
      instagram?: string
      linkedin?: string
      blog?: string
    }
    map: {
      lat: number
      lng: number
      level: number
      showMarker: boolean
    }
  }
  navigation: {
    header: NavItem[]
    footer: NavItem[]
  }
  seo: {
    siteName: string
    titleTemplate: string
    description: string
    canonicalBase?: string
    ogImage: string
    twitterHandle?: string
    pages?: Record<string, { title?: string; description?: string }>
  }
  theme: {
    colors: {
      brand: string
      brandStrong: string
      accent: string
      text: string
      textMuted: string
      background: string
      surface: string
      border: string
    }
    typography: {
      body: string
      heading: string
    }
    radii: {
      sm: string
      md: string
      lg: string
    }
    shadow: {
      sm: string
      md: string
    }
    layout: {
      maxWidth: string
      gutter: string
      sectionSpacing: string
    }
  }
  data: {
    trustBadges: string[]
    services: ServiceItem[]
    portfolio: PortfolioItem[]
    highlights: HighlightItem[]
    testimonials: Testimonial[]
    faqs: FAQItem[]
    processSteps: string[]
    values: string[]
    team: { name: string; role: string }[]
    timeline: { year: string; event: string }[]
    blogPosts: BlogPost[]
  }
  contactForm: {
    mode: 'none' | 'mailto' | 'webhook'
    mailtoSubject: string
  }
  integrations: {
    gaIdEnv: string
    gtmIdEnv: string
    channelTalkEnv: string
    kakaoMapEnv: string
    contactWebhookEnv: string
  }
  privacy: {
    title: string
    updatedAt: string
    body: string[]
  }
}

export type SiteConfigOverride = Partial<SiteConfig>
