# Company Intro Template (Vite + React)

이 프로젝트는 **회사 소개 사이트(5페이지)**를 1~2일 안에 반복 제작하기 위한 템플릿입니다.
사용자가 바꿀 곳은 **딱 2곳**입니다.

1) `src/site.config.ts`
2) `.env` 또는 `.env.local`

---

## 로컬 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
npm run preview
```

---

## 리포 구조

- `src/site.config.ts` : 단일 설정 파일 (텍스트/메뉴/연락처/SEO/색상/이미지/데이터)
- `src/config/presets/*` : 프리셋 기본값
- `src/pages/*` : 라우팅 페이지 5개 + privacy + 404
- `src/sections/*` : 페이지별 섹션 컴포넌트
- `src/components/*` : 공통 레이아웃/SEO/위젯
- `public/branding/*` : 이미지 교체 경로 고정

---

## 사용자가 수정하는 곳

### 1) `src/site.config.ts`
- 회사명/슬로건/소개
- 연락처/주소/CTA
- 메뉴 구성
- SEO 기본값/페이지별 설정
- 서비스/포트폴리오/FAQ/후기/하이라이트/지도 설정
- 디자인 토큰(색/폰트/여백)
- 문의 폼 모드 (none/mailto/webhook)

### 2) `.env(.local)`
```bash
VITE_SITE_PRESET=default
VITE_GA_ID=
VITE_GTM_ID=
VITE_CHANNELTALK_PLUGIN_KEY=
VITE_KAKAO_MAP_KEY=
VITE_CONTACT_WEBHOOK_URL=
```

---

## 프리셋 사용

- 기본 제공: `default`, `law`, `studio`
- `.env`에서 `VITE_SITE_PRESET` 값으로 선택

### 프리셋 추가 체크리스트
1. `src/config/presets`에 새 파일 생성
2. `presetMap`에 등록 (`src/config/presets/index.ts`)
3. 최소 항목 확인:
   - `brand`, `contact`, `navigation`, `seo`, `theme`, `data`, `contactForm`, `privacy`
4. 이미지/색상/SEO/메뉴 변경 포인트 확인
5. `npm run build`로 확인

---

## 이미지 교체 규칙

이미지는 **`/public/branding/*`**에 고정합니다.
`site.config.ts`에는 경로만 적습니다.

권장 규칙:
- `logo.svg`
- `hero.svg` (Hero 이미지)
- `og.svg` (Open Graph, 1200x630 권장)
- `portfolio-1.svg` 등

---

## 외부 위젯/분석 (env 기반)

`Integrations` 컴포넌트에서 환경변수 기준으로 로드됩니다.
값이 없으면 스크립트가 로드되지 않습니다.

- `VITE_GA_ID`
- `VITE_GTM_ID`
- `VITE_CHANNELTALK_PLUGIN_KEY`
- `VITE_KAKAO_MAP_KEY`

### CSP 수정 가이드 (예시)
- Google Tag Manager: `https://www.googletagmanager.com`
- Google Analytics: `https://www.google-analytics.com`
- ChannelTalk: `https://cdn.channel.io`
- Kakao Map: `https://dapi.kakao.com`

---

## Contact 폼

- `react-hook-form + zod`
- 필드: `name, phone, email, message, agree`
- 모드:
  - `none` : 전송 없음 (안내 메시지)
  - `mailto` : 메일앱 실행
  - `webhook` : `VITE_CONTACT_WEBHOOK_URL`로 POST

### 웹훅 요청 예시
```json
{
  "name": "홍길동",
  "phone": "010-0000-0000",
  "email": "test@email.com",
  "message": "문의 내용",
  "agree": true,
  "source": "site",
  "timestamp": "2026-01-25T12:34:56.000Z"
}
```

### 성공 응답 예시
```json
{ "ok": true }
```

---

## 라우팅 / GitHub Pages

- 기본은 `HashRouter` 사용
- `vite.config.ts`의 `base`는 기본 `./` 설정
- `HashRouter`라 404 이슈가 거의 없습니다

---

## GitHub Pages 배포

워크플로 파일: `.github/workflows/deploy.yml`

Pages 설정 체크리스트:
1. GitHub Repository → Settings → Pages
2. Source를 **GitHub Actions**로 선택
3. 배포 완료 후 URL 확인

---

## 테스트 (선택)

```bash
npm run test
```

---

## 추가 팁
- 사이트 전체 테마는 `site.config.ts`에서만 변경
- 이미지 경로도 `site.config.ts`에만 기록
- `privacy`는 모달과 `/privacy` 라우트 모두 지원
